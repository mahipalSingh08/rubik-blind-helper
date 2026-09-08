export class BldTracer {
  private edgePieces = [
    ['A','Q'], ['B','M'], ['C','I'], ['D','E'], 
    ['R','H'], ['T','N'], ['J','P'], ['L','F'], 
    ['W','S'], ['V','O'], ['U','K'], ['X','G']
  ];

  private cornerPieces = [
    ['A','R','E'], ['B','Q','N'], ['C','M','J'], ['D','I','F'], 
    ['X','S','H'], ['W','T','O'], ['V','P','K'], ['U','L','G']
  ];

  private l(letter: string) { return letter.charCodeAt(0) - 65; }

  // Returns true if piece1 and piece2 belong to the same physical piece
  private isSamePiece(a: string, b: string, pieces: string[][]): boolean {
    for (const p of pieces) {
      if (p.includes(a) && p.includes(b)) return true;
    }
    return false;
  }

  private getPiece(sticker: string, pieces: string[][]): string[] {
    return pieces.find(p => p.includes(sticker)) || [];
  }

  traceEdges(edgesState: string[], buffer: string): string[] {
    const solution: string[] = [];
    const state = [...edgesState]; // copy
    const bufferPiece = this.getPiece(buffer, this.edgePieces);
    
    // Track solved pieces (pieces that are in their correct position, even if flipped)
    // Actually, it's easier to just track visited stickers to avoid infinite loops, 
    // and correctly simulate the swap.
    const visited = new Set<string>();

    while (true) {
      let currentSticker = state[this.l(buffer)];
      
      // If the buffer piece is at the buffer position (either solved or flipped)
      if (bufferPiece.includes(currentSticker)) {
        // Find an unsolved piece to break into
        let breakTarget = '';
        for (const p of this.edgePieces) {
          if (p === bufferPiece) continue;
          
          // Check if this piece is solved
          const sticker1 = p[0];
          const sticker2 = p[1];
          // It is solved if the physical piece sitting at sticker1 belongs to p
          const sittingAt1 = state[this.l(sticker1)];
          
          if (!p.includes(sittingAt1)) {
            // Unsolved and not visited as a break-in
            if (!visited.has(sticker1)) {
              breakTarget = sticker1;
              break;
            }
          } else if (sittingAt1 !== sticker1) {
            // It's the right piece but flipped!
            if (!visited.has(sticker1)) {
              breakTarget = sticker1;
              break;
            }
          }
        }

        if (!breakTarget) break; // All edges solved!

        // Break into breakTarget
        solution.push(breakTarget);
        visited.add(breakTarget);
        
        // Swap buffer with breakTarget
        const t1 = buffer;
        const t2 = breakTarget;
        const opp1 = bufferPiece.find(s => s !== t1)!;
        const opp2 = this.getPiece(t2, this.edgePieces).find(s => s !== t2)!;
        
        let temp = state[this.l(t1)]; state[this.l(t1)] = state[this.l(t2)]; state[this.l(t2)] = temp;
        temp = state[this.l(opp1)]; state[this.l(opp1)] = state[this.l(opp2)]; state[this.l(opp2)] = temp;
        
      } else {
        // Normal trace
        const target = currentSticker;
        solution.push(target);
        
        // Swap
        const t1 = buffer;
        const t2 = target;
        const opp1 = bufferPiece.find(s => s !== t1)!;
        const opp2 = this.getPiece(t2, this.edgePieces).find(s => s !== t2)!;
        
        let temp = state[this.l(t1)]; state[this.l(t1)] = state[this.l(t2)]; state[this.l(t2)] = temp;
        temp = state[this.l(opp1)]; state[this.l(opp1)] = state[this.l(opp2)]; state[this.l(opp2)] = temp;
      }
    }

    return solution;
  }

  traceCorners(cornersState: string[], buffer: string): string[] {
    const solution: string[] = [];
    const state = [...cornersState];
    const bufferPiece = this.getPiece(buffer, this.cornerPieces);
    const visited = new Set<string>();

    while (true) {
      let currentSticker = state[this.l(buffer)];
      
      if (bufferPiece.includes(currentSticker)) {
        let breakTarget = '';
        for (const p of this.cornerPieces) {
          if (p === bufferPiece) continue;
          
          const s1 = p[0];
          const sitting = state[this.l(s1)];
          
          if (!p.includes(sitting)) {
            if (!visited.has(s1)) { breakTarget = s1; break; }
          } else if (sitting !== s1) {
            // Twisted
            if (!visited.has(s1)) { breakTarget = s1; break; }
          }
        }

        if (!breakTarget) break; 

        solution.push(breakTarget);
        visited.add(breakTarget);
        this.swapCorners(state, buffer, breakTarget);
      } else {
        const target = currentSticker;
        solution.push(target);
        this.swapCorners(state, buffer, target);
      }
    }

    return solution;
  }

  private swapCorners(state: string[], b: string, t: string) {
    const bp = this.getPiece(b, this.cornerPieces);
    const tp = this.getPiece(t, this.cornerPieces);
    
    // We must map the exact sticker swaps based on orientation.
    // A pure Y-perm / J-perm swaps the U/D stickers, and preserves relative order.
    // It's easier: b swaps with t.
    // The other two stickers swap sequentially:
    // b -> b_next -> b_prev
    // t -> t_next -> t_prev
    // If b swaps with t, then b_next swaps with t_next, b_prev swaps with t_prev.
    
    const bIdx = bp.indexOf(b);
    const tIdx = tp.indexOf(t);
    
    const b1 = b;
    const b2 = bp[(bIdx + 1) % 3];
    const b3 = bp[(bIdx + 2) % 3];
    
    const t1 = t;
    const t2 = tp[(tIdx + 1) % 3];
    const t3 = tp[(tIdx + 2) % 3];
    
    let temp = state[this.l(b1)]; state[this.l(b1)] = state[this.l(t1)]; state[this.l(t1)] = temp;
    temp = state[this.l(b2)]; state[this.l(b2)] = state[this.l(t2)]; state[this.l(t2)] = temp;
    temp = state[this.l(b3)]; state[this.l(b3)] = state[this.l(t3)]; state[this.l(t3)] = temp;
  }
}
