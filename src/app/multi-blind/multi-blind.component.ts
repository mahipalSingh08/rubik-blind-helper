import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MemoService } from '../memo-generator/memo.service';
import { CubeEngine } from '../shared/cube-engine';
import { BldTracer } from '../shared/bld-tracer';

export interface MultiBlindCube {
  id: number;
  scramble: string;
  scrambleLines: string[];
  faces: Record<string, string[]>;
  edgePairs: string[];
  cornerPairs: string[];
  parity: boolean;
  copied?: boolean;
}

@Component({
  selector: 'app-multi-blind',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './multi-blind.component.html',
  styleUrls: ['./multi-blind.component.css']
})
export class MultiBlindComponent implements OnInit, OnDestroy {
  cubeCount: number = 3;
  cubes: MultiBlindCube[] = [];
  showSolutions: boolean = false;
  copiedAll: boolean = false;
  
  private copyTimeout: any = null;
  private copyCubeTimeouts: Map<number, any> = new Map();

  private colorMap: Record<string, string> = {
    A: '#ffffff', B: '#ffffff', C: '#ffffff', D: '#ffffff', // U (White)
    E: '#ff9800', F: '#ff9800', G: '#ff9800', H: '#ff9800', // L (Orange)
    I: '#4caf50', J: '#4caf50', K: '#4caf50', L: '#4caf50', // F (Green)
    M: '#f44336', N: '#f44336', O: '#f44336', P: '#f44336', // R (Red)
    Q: '#2196f3', R: '#2196f3', S: '#2196f3', T: '#2196f3', // B (Blue)
    U: '#ffeb3b', V: '#ffeb3b', W: '#ffeb3b', X: '#ffeb3b', // D (Yellow)
  };

  constructor(public memoService: MemoService) {}

  ngOnInit() {
    this.loadState();
    if (this.cubes.length === 0) {
      this.generate();
    }
  }

  ngOnDestroy() {
    if (this.copyTimeout) {
      clearTimeout(this.copyTimeout);
    }
    this.copyCubeTimeouts.forEach(t => clearTimeout(t));
  }

  private loadState() {
    const saved = localStorage.getItem('bld-multiblind-v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.cubeCount && typeof parsed.cubeCount === 'number') {
          this.cubeCount = Math.min(100, Math.max(1, parsed.cubeCount));
        }
        if (Array.isArray(parsed.cubes) && parsed.cubes.length > 0) {
          this.cubes = parsed.cubes;
        }
      } catch (e) {
        console.error('Failed to load multiblind state', e);
      }
    }
  }

  private saveState() {
    const state = {
      cubeCount: this.cubeCount,
      cubes: this.cubes
    };
    try {
      localStorage.setItem('bld-multiblind-v2', JSON.stringify(state));
    } catch (e) {
      console.warn('Storage limit reached or failed to persist cubes', e);
    }
  }

  setCubeCount(count: number) {
    this.cubeCount = count;
    this.generate();
  }

  onCubeCountChange() {
    if (!this.cubeCount || isNaN(this.cubeCount)) {
      this.cubeCount = 1;
    } else if (this.cubeCount > 100) {
      this.cubeCount = 100;
    } else if (this.cubeCount < 1) {
      this.cubeCount = 1;
    }
  }

  generate() {
    this.onCubeCountChange();
    const count = this.cubeCount;
    const tracer = new BldTracer();
    const edgeBuffer = (this.memoService.edgeBuffer || 'C').toUpperCase();
    const cornerBuffer = (this.memoService.cornerBuffer || 'C').toUpperCase();

    const newCubes: MultiBlindCube[] = [];

    for (let i = 1; i <= count; i++) {
      // 20-move standard scramble containing both edges and corners
      const scramble = CubeEngine.generateScramble('standard', 20);
      const engine = new CubeEngine();
      engine.applyScramble(scramble);

      const faces = this.computeFaces(engine);

      const edges = tracer.traceEdges(engine.edges, edgeBuffer);
      const corners = tracer.traceCorners(engine.corners, cornerBuffer);

      const edgePairs = this.toPairs(edges);
      const cornerPairs = this.toPairs(corners);
      const parity = edges.length % 2 !== 0 && corners.length % 2 !== 0;

      const moves = scramble.split(' ');
      const scrambleLines = this.formatScrambleLines(moves);

      newCubes.push({
        id: i,
        scramble,
        scrambleLines,
        faces,
        edgePairs,
        cornerPairs,
        parity,
        copied: false
      });
    }

    this.cubes = newCubes;
    // Always hidden by default whenever new scrambles generate
    this.showSolutions = false;
    this.saveState();
  }

  toggleSolutions() {
    this.showSolutions = !this.showSolutions;
  }

  scrollToSolutions() {
    const el = document.getElementById('solutions-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  trackByCubeId(index: number, cube: MultiBlindCube): number {
    return cube.id;
  }

  private formatScrambleLines(moves: string[]): string[] {
    const lines: string[] = [];
    // Format 20 moves into 3 clean lines: 7, 7, 6
    if (moves.length === 20) {
      lines.push(moves.slice(0, 7).join('   '));
      lines.push(moves.slice(7, 14).join('   '));
      lines.push(moves.slice(14, 20).join('   '));
    } else {
      // Fallback chunking by 7
      for (let i = 0; i < moves.length; i += 7) {
        lines.push(moves.slice(i, i + 7).join('   '));
      }
    }
    return lines;
  }

  private toPairs(letters: string[]): string[] {
    const pairs: string[] = [];
    for (let i = 0; i < letters.length; i += 2) {
      if (i + 1 < letters.length) {
        pairs.push(letters[i] + letters[i + 1]);
      } else {
        pairs.push(letters[i]);
      }
    }
    return pairs;
  }

  private l(letter: string): number {
    return letter.charCodeAt(0) - 65;
  }

  private getColor(engine: CubeEngine, type: 'edge' | 'corner', pos: string): string {
    const currentPiece = type === 'edge' ? engine.edges[this.l(pos)] : engine.corners[this.l(pos)];
    return this.colorMap[currentPiece] || '#333333';
  }

  private computeFaces(engine: CubeEngine): Record<string, string[]> {
    return {
      U: [
        this.getColor(engine, 'corner', 'A'), this.getColor(engine, 'edge', 'A'), this.getColor(engine, 'corner', 'B'),
        this.getColor(engine, 'edge', 'D'),   '#ffffff',                          this.getColor(engine, 'edge', 'B'),
        this.getColor(engine, 'corner', 'D'), this.getColor(engine, 'edge', 'C'), this.getColor(engine, 'corner', 'C')
      ],
      L: [
        this.getColor(engine, 'corner', 'E'), this.getColor(engine, 'edge', 'E'), this.getColor(engine, 'corner', 'F'),
        this.getColor(engine, 'edge', 'H'),   '#ff9800',                          this.getColor(engine, 'edge', 'F'),
        this.getColor(engine, 'corner', 'H'), this.getColor(engine, 'edge', 'G'), this.getColor(engine, 'corner', 'G')
      ],
      F: [
        this.getColor(engine, 'corner', 'I'), this.getColor(engine, 'edge', 'I'), this.getColor(engine, 'corner', 'J'),
        this.getColor(engine, 'edge', 'L'),   '#4caf50',                          this.getColor(engine, 'edge', 'J'),
        this.getColor(engine, 'corner', 'L'), this.getColor(engine, 'edge', 'K'), this.getColor(engine, 'corner', 'K')
      ],
      R: [
        this.getColor(engine, 'corner', 'M'), this.getColor(engine, 'edge', 'M'), this.getColor(engine, 'corner', 'N'),
        this.getColor(engine, 'edge', 'P'),   '#f44336',                          this.getColor(engine, 'edge', 'N'),
        this.getColor(engine, 'corner', 'P'), this.getColor(engine, 'edge', 'O'), this.getColor(engine, 'corner', 'O')
      ],
      B: [
        this.getColor(engine, 'corner', 'Q'), this.getColor(engine, 'edge', 'Q'), this.getColor(engine, 'corner', 'R'),
        this.getColor(engine, 'edge', 'T'),   '#2196f3',                          this.getColor(engine, 'edge', 'R'),
        this.getColor(engine, 'corner', 'T'), this.getColor(engine, 'edge', 'S'), this.getColor(engine, 'corner', 'S')
      ],
      D: [
        this.getColor(engine, 'corner', 'U'), this.getColor(engine, 'edge', 'U'), this.getColor(engine, 'corner', 'V'),
        this.getColor(engine, 'edge', 'X'),   '#ffeb3b',                          this.getColor(engine, 'edge', 'V'),
        this.getColor(engine, 'corner', 'X'), this.getColor(engine, 'edge', 'W'), this.getColor(engine, 'corner', 'W')
      ]
    };
  }

  async copyScramble(cube: MultiBlindCube) {
    await this.copyTextToClipboard(cube.scramble);
    cube.copied = true;
    const existing = this.copyCubeTimeouts.get(cube.id);
    if (existing) clearTimeout(existing);
    const timeout = setTimeout(() => {
      cube.copied = false;
      this.copyCubeTimeouts.delete(cube.id);
    }, 2000);
    this.copyCubeTimeouts.set(cube.id, timeout);
  }

  async copyAllScrambles() {
    if (!this.cubes || this.cubes.length === 0) return;
    const text = this.cubes.map(c => `${c.id}. ${c.scramble}`).join('\n\n');
    await this.copyTextToClipboard(text);
    this.copiedAll = true;
    if (this.copyTimeout) clearTimeout(this.copyTimeout);
    this.copyTimeout = setTimeout(() => {
      this.copiedAll = false;
    }, 2500);
  }

  private async copyTextToClipboard(text: string): Promise<boolean> {
    if (navigator?.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        // Fallback below
      }
    }
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      textArea.style.top = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);
      return success;
    } catch (err) {
      console.error('Failed to copy text', err);
      return false;
    }
  }
}
