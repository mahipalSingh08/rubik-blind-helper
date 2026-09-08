export class CubeEngine {
  // The state of the cube is simply two arrays of 24 characters representing the 24 edge stickers and 24 corner stickers.
  // Initially, A is at A, B is at B, etc.
  edges: string[];
  corners: string[];

  constructor() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWX".split("");
    this.edges = [...letters];
    this.corners = [...letters];
  }

  // Helper to apply a single 4-cycle to an array.
  // indices: [pos1, pos2, pos3, pos4]
  // Moves value at pos1 -> pos2 -> pos3 -> pos4 -> pos1
  private applyCycle(arr: string[], cycle: number[]) {
    const temp = arr[cycle[3]];
    arr[cycle[3]] = arr[cycle[2]];
    arr[cycle[2]] = arr[cycle[1]];
    arr[cycle[1]] = arr[cycle[0]];
    arr[cycle[0]] = temp;
  }

  // Convert letter 'A' to index 0, 'B' to 1, etc.
  private l(letter: string): number {
    return letter.charCodeAt(0) - 65;
  }

  private applyMoveCycles(edgeCycles: string[][], cornerCycles: string[][]) {
    for (const cycle of edgeCycles) {
      this.applyCycle(this.edges, cycle.map(c => this.l(c)));
    }
    for (const cycle of cornerCycles) {
      this.applyCycle(this.corners, cycle.map(c => this.l(c)));
    }
  }

  U() {
    this.applyMoveCycles(
      [['A', 'B', 'C', 'D'], ['Q', 'M', 'I', 'E']],
      [['A', 'B', 'C', 'D'], ['R', 'N', 'J', 'F'], ['E', 'Q', 'M', 'I']]
    );
  }

  D() {
    this.applyMoveCycles(
      [['U', 'V', 'W', 'X'], ['K', 'O', 'S', 'G']],
      [['U', 'V', 'W', 'X'], ['L', 'P', 'T', 'H'], ['G', 'K', 'O', 'S']]
    );
  }

  F() {
    this.applyMoveCycles(
      [['I', 'J', 'K', 'L'], ['C', 'P', 'U', 'F']],
      [['I', 'J', 'K', 'L'], ['D', 'M', 'V', 'G'], ['F', 'C', 'P', 'U']]
    );
  }

  B() {
    this.applyMoveCycles(
      [['Q', 'R', 'S', 'T'], ['A', 'H', 'W', 'N']],
      [['Q', 'R', 'S', 'T'], ['B', 'E', 'X', 'O'], ['N', 'A', 'H', 'W']]
    );
  }

  L() {
    this.applyMoveCycles(
      [['E', 'F', 'G', 'H'], ['D', 'L', 'X', 'R']],
      [['E', 'F', 'G', 'H'], ['A', 'I', 'U', 'S'], ['R', 'D', 'L', 'X']]
    );
  }

  R() {
    this.applyMoveCycles(
      [['M', 'N', 'O', 'P'], ['B', 'T', 'V', 'J']],
      [['M', 'N', 'O', 'P'], ['C', 'Q', 'W', 'K'], ['J', 'B', 'T', 'V']]
    );
  }

  // Apply move multiple times (e.g., U2, U')
  private doMove(moveFn: () => void, suffix: string) {
    if (suffix === "'") {
      moveFn.call(this);
      moveFn.call(this);
      moveFn.call(this);
    } else if (suffix === "2") {
      moveFn.call(this);
      moveFn.call(this);
    } else {
      moveFn.call(this);
    }
  }

  applyScramble(scramble: string) {
    const moves = scramble.trim().split(/\s+/);
    for (const move of moves) {
      if (!move) continue;
      const base = move[0];
      const suffix = move.substring(1);
      switch (base) {
        case 'U': this.doMove(this.U, suffix); break;
        case 'D': this.doMove(this.D, suffix); break;
        case 'F': this.doMove(this.F, suffix); break;
        case 'B': this.doMove(this.B, suffix); break;
        case 'L': this.doMove(this.L, suffix); break;
        case 'R': this.doMove(this.R, suffix); break;
      }
    }
  }

  static generateScramble(): string {
    const moves = ['U', 'D', 'F', 'B', 'L', 'R'];
    const suffixes = ['', "'", '2'];
    let scramble = [];
    let lastMove = '';
    
    for (let i = 0; i < 20; i++) {
      let nextMove = moves[Math.floor(Math.random() * moves.length)];
      while (nextMove === lastMove) {
        nextMove = moves[Math.floor(Math.random() * moves.length)];
      }
      lastMove = nextMove;
      const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
      scramble.push(nextMove + suffix);
    }
    return scramble.join(' ');
  }
}
