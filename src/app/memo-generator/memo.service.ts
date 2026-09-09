import { Injectable } from '@angular/core';

export interface CubePairs {
  cornerPairs: string[];
  edgePairs: string[];
}

@Injectable({
  providedIn: 'root'
})
export class MemoService {
  pairCount: number = 6;
  cornerBuffer: string = 'C';
  edgeBuffer: string = 'C';

  cornerPairs: string[] = [];
  edgePairs: string[] = [];
  
  hasGenerated: boolean = false;

  // Multi-Blind state
  multiCubeCount: number = 2;
  multiPairsEach: number = 6;
  multiCubes: CubePairs[] = [];
  hasGeneratedMulti: boolean = false;

  readonly ALL_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWX".split("");

  constructor() {
    this.loadState();
  }

  private loadState() {
    const saved = localStorage.getItem('bld-memo-state');
    if (saved) {
      try {
        const state = JSON.parse(saved);
        this.pairCount = state.pairCount || 6;
        this.cornerBuffer = (state.cornerBuffer || 'C').toUpperCase().trim() || 'C';
        this.edgeBuffer = (state.edgeBuffer || 'C').toUpperCase().trim() || 'C';
        this.cornerPairs = state.cornerPairs || [];
        this.edgePairs = state.edgePairs || [];
        this.hasGenerated = state.hasGenerated || false;
        
        this.multiCubeCount = state.multiCubeCount || 2;
        this.multiPairsEach = state.multiPairsEach || 6;
        this.multiCubes = state.multiCubes || [];
        this.hasGeneratedMulti = state.hasGeneratedMulti || false;
      } catch (e) {
        console.error('Failed to parse memo state from local storage', e);
      }
    }
  }

  saveState() {
    const state = {
      pairCount: this.pairCount,
      cornerBuffer: this.cornerBuffer,
      edgeBuffer: this.edgeBuffer,
      cornerPairs: this.cornerPairs,
      edgePairs: this.edgePairs,
      hasGenerated: this.hasGenerated,
      multiCubeCount: this.multiCubeCount,
      multiPairsEach: this.multiPairsEach,
      multiCubes: this.multiCubes,
      hasGeneratedMulti: this.hasGeneratedMulti
    };
    localStorage.setItem('bld-memo-state', JSON.stringify(state));
  }

  shuffle(arr: string[]): string[] {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  makePairs(bufferLetter: string, count: number): string[] {
    const buffer = (bufferLetter || "").toUpperCase();
    let pool = this.ALL_LETTERS.filter(l => l !== buffer);
    pool = this.shuffle(pool);

    const pairs: string[] = [];
    let i = 0;
    while (pairs.length < count && i + 1 < pool.length) {
      let a = pool[i];
      let b = pool[i + 1];
      if (a === b && i + 2 < pool.length) {
        b = pool[i + 2];
        pool[i + 2] = pool[i + 1];
      }
      pairs.push(a + b);
      i += 2;
    }
    return pairs;
  }

  generate() {
    const count = Math.min(11, Math.max(1, this.pairCount || 6));
    const cornerBuffer = this.cornerBuffer || "C";
    const edgeBuffer = this.edgeBuffer || "C";

    this.cornerPairs = this.makePairs(cornerBuffer, count);
    this.edgePairs = this.makePairs(edgeBuffer, count);
    this.hasGenerated = true;
    
    // Save to local storage after generating
    this.saveState();
  }

  generateMulti() {
    const count = Math.min(11, Math.max(1, this.multiPairsEach || 6));
    const cubes = Math.min(20, Math.max(2, this.multiCubeCount || 2));
    const cornerBuffer = this.cornerBuffer || "C";
    const edgeBuffer = this.edgeBuffer || "C";

    this.multiCubes = [];
    for (let i = 0; i < cubes; i++) {
      this.multiCubes.push({
        cornerPairs: this.makePairs(cornerBuffer, count),
        edgePairs: this.makePairs(edgeBuffer, count)
      });
    }
    this.hasGeneratedMulti = true;
    this.saveState();
  }
}
