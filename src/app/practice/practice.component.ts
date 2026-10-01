import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MemoService } from '../memo-generator/memo.service';
import { DictionaryService } from '../shared/dictionary.service';
import { CommutatorService } from '../shared/commutator.service';
import { CubeEngine } from '../shared/cube-engine';
import { BldTracer } from '../shared/bld-tracer';
import { FiveStyleAlgDef } from '../shared/default5-algo';

export interface GroupedPair {
  type: '3-style' | '5-style';
  pairs: string[];
  display: string;
  words: string[];
  algShort?: string;
  algLong?: string;
  algExpand?: string;
}

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  scramble: string = '';
  edgePairs: string[] = [];
  cornerPairs: string[] = [];
  edgeGroups: GroupedPair[] = [];
  cornerGroups: GroupedPair[] = [];
  showWords: boolean = true;
  showCommutators: boolean = false;
  parity: boolean = false;
  
  practiceMode: 'both' | 'edges' | 'corners' = 'both';
  moveSet: 'standard' | 'mu' | 'ru' | 'ruf' = 'standard';
  grayOutUnused: boolean = true;
  userSolution: string = '';

  engine!: CubeEngine;
  
  // Array of colors for 9 stickers of each face
  faces: Record<string, string[]> = {
    U: [], L: [], F: [], R: [], B: [], D: []
  };

  private colorMap: Record<string, string> = {
    A: '#ffffff', B: '#ffffff', C: '#ffffff', D: '#ffffff', // U
    E: '#ff9800', F: '#ff9800', G: '#ff9800', H: '#ff9800', // L
    I: '#4caf50', J: '#4caf50', K: '#4caf50', L: '#4caf50', // F
    M: '#f44336', N: '#f44336', O: '#f44336', P: '#f44336', // R
    Q: '#2196f3', R: '#2196f3', S: '#2196f3', T: '#2196f3', // B
    U: '#ffeb3b', V: '#ffeb3b', W: '#ffeb3b', X: '#ffeb3b', // D
  };

  constructor(
    public memoService: MemoService, 
    public dictionary: DictionaryService,
    public commutator: CommutatorService
  ) {}

  ngOnInit() {
    this.loadSettings();
    const saved = localStorage.getItem('practiceScramble');
    if (saved) {
      this.loadScramble(saved);
    } else {
      this.generate();
    }
  }

  loadSettings() {
    const savedMode = localStorage.getItem('practiceMode');
    if (savedMode) this.practiceMode = savedMode as any;
    const savedMoves = localStorage.getItem('practiceMoveSet');
    if (savedMoves) this.moveSet = savedMoves as any;
    const savedGray = localStorage.getItem('practiceGrayOut');
    if (savedGray !== null) this.grayOutUnused = savedGray === 'true';
    const savedSolution = localStorage.getItem('practiceUserSolution');
    if (savedSolution !== null) this.userSolution = savedSolution;
  }

  saveSettings() {
    localStorage.setItem('practiceMode', this.practiceMode);
    localStorage.setItem('practiceMoveSet', this.moveSet);
    localStorage.setItem('practiceGrayOut', this.grayOutUnused.toString());
    this.retrace(); // retrace updates UI immediately
  }
  
  saveUserSolution() {
    localStorage.setItem('practiceUserSolution', this.userSolution);
  }

  private toPairs(letters: string[]): string[] {
    const pairs = [];
    for (let i = 0; i < letters.length; i += 2) {
      if (i + 1 < letters.length) {
        pairs.push(letters[i] + letters[i+1]);
      } else {
        pairs.push(letters[i]);
      }
    }
    return pairs;
  }
  
  private l(letter: string): number {
    return letter.charCodeAt(0) - 65;
  }
  
  private getColor(type: 'edge' | 'corner', pos: string): string {
    if (this.grayOutUnused) {
      if (this.practiceMode === 'edges' && type === 'corner') return '#3a4156'; // muted gray
      if (this.practiceMode === 'corners' && type === 'edge') return '#3a4156';
    }
    const currentPiece = type === 'edge' ? this.engine.edges[this.l(pos)] : this.engine.corners[this.l(pos)];
    return this.colorMap[currentPiece];
  }
  
  private updateFaces() {
    this.faces['U'] = [
      this.getColor('corner', 'A'), this.getColor('edge', 'A'), this.getColor('corner', 'B'),
      this.getColor('edge', 'D'),   '#ffffff',                  this.getColor('edge', 'B'),
      this.getColor('corner', 'D'), this.getColor('edge', 'C'), this.getColor('corner', 'C')
    ];
    this.faces['L'] = [
      this.getColor('corner', 'E'), this.getColor('edge', 'E'), this.getColor('corner', 'F'),
      this.getColor('edge', 'H'),   '#ff9800',                  this.getColor('edge', 'F'),
      this.getColor('corner', 'H'), this.getColor('edge', 'G'), this.getColor('corner', 'G')
    ];
    this.faces['F'] = [
      this.getColor('corner', 'I'), this.getColor('edge', 'I'), this.getColor('corner', 'J'),
      this.getColor('edge', 'L'),   '#4caf50',                  this.getColor('edge', 'J'),
      this.getColor('corner', 'L'), this.getColor('edge', 'K'), this.getColor('corner', 'K')
    ];
    this.faces['R'] = [
      this.getColor('corner', 'M'), this.getColor('edge', 'M'), this.getColor('corner', 'N'),
      this.getColor('edge', 'P'),   '#f44336',                  this.getColor('edge', 'N'),
      this.getColor('corner', 'P'), this.getColor('edge', 'O'), this.getColor('corner', 'O')
    ];
    this.faces['B'] = [
      this.getColor('corner', 'Q'), this.getColor('edge', 'Q'), this.getColor('corner', 'R'),
      this.getColor('edge', 'T'),   '#2196f3',                  this.getColor('edge', 'R'),
      this.getColor('corner', 'T'), this.getColor('edge', 'S'), this.getColor('corner', 'S')
    ];
    this.faces['D'] = [
      this.getColor('corner', 'U'), this.getColor('edge', 'U'), this.getColor('corner', 'V'),
      this.getColor('edge', 'X'),   '#ffeb3b',                  this.getColor('edge', 'V'),
      this.getColor('corner', 'X'), this.getColor('edge', 'W'), this.getColor('corner', 'W')
    ];
  }

  generate() {
    const newScramble = CubeEngine.generateScramble(this.moveSet);
    localStorage.setItem('practiceScramble', newScramble);
    this.userSolution = '';
    this.saveUserSolution();
    this.loadScramble(newScramble);
  }

  retrace() {
    // Save updated buffer choices
    this.memoService.saveState();
    // Reload the current scramble to re-trace solutions
    this.loadScramble(this.scramble);
  }

  loadScramble(scrambleStr: string) {
    this.scramble = scrambleStr;
    
    this.engine = new CubeEngine();
    this.engine.applyScramble(this.scramble);
    
    this.updateFaces();
    
    const tracer = new BldTracer();
    let edges: string[] = [];
    let corners: string[] = [];

    if (this.practiceMode === 'both' || this.practiceMode === 'edges') {
      edges = tracer.traceEdges(this.engine.edges, (this.memoService.edgeBuffer || 'C').toUpperCase());
    }
    
    if (this.practiceMode === 'both' || this.practiceMode === 'corners') {
      corners = tracer.traceCorners(this.engine.corners, (this.memoService.cornerBuffer || 'C').toUpperCase());
    }
    
    this.edgePairs = this.toPairs(edges);
    this.cornerPairs = this.toPairs(corners);
    
    this.edgeGroups = this.group5Style(this.edgePairs, 'edge');
    this.cornerGroups = this.group5Style(this.cornerPairs, 'corner');
    
    this.parity = edges.length % 2 !== 0 && corners.length % 2 !== 0;
  }

  private group5Style(pairs: string[], type: 'edge' | 'corner'): GroupedPair[] {
    const groups: GroupedPair[] = [];
    let i = 0;
    while (i < pairs.length) {
      if (i < pairs.length - 1 && pairs[i].length === 2 && pairs[i+1].length === 2) {
        const combined = (pairs[i] + pairs[i+1]).toUpperCase();
        let alg5: FiveStyleAlgDef | null = null;
        if (type === 'edge') alg5 = this.commutator.get5StyleEdgeAlg(combined);
        if (type === 'corner') alg5 = this.commutator.get5StyleCornerAlg(combined);
        
        if (alg5) {
          groups.push({
            type: '5-style',
            pairs: [pairs[i], pairs[i+1]],
            display: `${pairs[i]} ${pairs[i+1]}`,
            words: [this.getWord(pairs[i]), this.getWord(pairs[i+1])],
            algShort: alg5.short,
            algLong: alg5.algorithm,
            algExpand: alg5.expand
          });
          i += 2;
          continue;
        }
      }
      // Fallback to 3-style
      const p = pairs[i];
      let alg3: any = null;
      if (p.length === 2) {
        alg3 = type === 'edge' ? this.commutator.getEdgeAlg(p) : this.commutator.getCornerAlg(p);
      }
      
      groups.push({
        type: '3-style',
        pairs: [p],
        display: p,
        words: [this.getWord(p)],
        algShort: alg3?.short,
        algLong: alg3?.long
      });
      i++;
    }
    return groups;
  }

  getWord(pair: string): string {
    return this.dictionary.getWord(pair);
  }

  toggleWords() {
    this.showWords = !this.showWords;
  }
  
  toggleCommutators() {
    this.showCommutators = !this.showCommutators;
  }
}
