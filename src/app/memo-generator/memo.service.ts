import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoService {
  pairCount: number = 6;
  cornerBuffer: string = 'A';
  edgeBuffer: string = 'A';

  cornerPairs: string[] = [];
  edgePairs: string[] = [];
  
  hasGenerated: boolean = false;

  readonly ALL_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWX".split("");

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
    const cornerBuffer = this.cornerBuffer || "A";
    const edgeBuffer = this.edgeBuffer || "A";

    this.cornerPairs = this.makePairs(cornerBuffer, count);
    this.edgePairs = this.makePairs(edgeBuffer, count);
    this.hasGenerated = true;
  }
}
