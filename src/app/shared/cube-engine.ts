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

  M() {
    this.applyMoveCycles(
      [['C', 'K', 'W', 'Q'], ['I', 'U', 'S', 'A']],
      []
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
        case 'M': this.doMove(this.M, suffix); break;
      }
    }
  }

  static generateScramble(moveSet: string = 'standard'): string {
    let moves = ['U', 'D', 'F', 'B', 'L', 'R'];
    
    if (moveSet === 'mu') moves = ['M', 'U'];
    else if (moveSet === 'ru') moves = ['R', 'U'];
    else if (moveSet === 'ruf') moves = ['R', 'U', 'F'];

    const suffixes = ['', "'", '2'];
    let scramble = [];
    let lastMove = '';
    
    let mNetRotation = 0; // track M slice net rotation
    let uNetRotation = 0; // track U face net rotation
    
    for (let i = 0; i < 20; i++) {
      let nextMove = moves[Math.floor(Math.random() * moves.length)];
      while (nextMove === lastMove) {
        nextMove = moves[Math.floor(Math.random() * moves.length)];
      }
      lastMove = nextMove;
      const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
      scramble.push(nextMove + suffix);
      
      if (nextMove === 'M') {
        if (suffix === '') mNetRotation += 1;
        else if (suffix === "'") mNetRotation += 3;
        else if (suffix === '2') mNetRotation += 2;
      }
      if (nextMove === 'U') {
        if (suffix === '') uNetRotation += 1;
        else if (suffix === "'") uNetRotation += 3;
        else if (suffix === '2') uNetRotation += 2;
      }
    }
    
    // Fix M-slice misalignment for <M, U> scrambles
    if (moveSet === 'mu') {
      mNetRotation = mNetRotation % 4;
      if (mNetRotation !== 0) {
        let fixAmount = 4 - mNetRotation;
        let fixSuffix = '';
        if (fixAmount === 1) fixSuffix = '';
        else if (fixAmount === 2) fixSuffix = '2';
        else if (fixAmount === 3) fixSuffix = "'";
        
        const last = scramble[scramble.length - 1];
        if (last.startsWith('M')) {
          let lastAmount = 0;
          if (last.endsWith("'")) lastAmount = 3;
          else if (last.endsWith("2")) lastAmount = 2;
          else lastAmount = 1;
          
          let combinedAmount = (lastAmount + fixAmount) % 4;
          if (combinedAmount === 0) {
             scramble.pop();
          } else {
             let combinedSuffix = '';
             if (combinedAmount === 1) combinedSuffix = '';
             else if (combinedAmount === 2) combinedSuffix = '2';
             else if (combinedAmount === 3) combinedSuffix = "'";
             scramble[scramble.length - 1] = 'M' + combinedSuffix;
          }
        } else {
          scramble.push('M' + fixSuffix);
        }
      }
      
      // Fix U-face misalignment to keep corners perfectly solved
      uNetRotation = uNetRotation % 4;
      if (uNetRotation !== 0) {
        let fixAmount = 4 - uNetRotation;
        let fixSuffix = '';
        if (fixAmount === 1) fixSuffix = '';
        else if (fixAmount === 2) fixSuffix = '2';
        else if (fixAmount === 3) fixSuffix = "'";
        
        const last = scramble[scramble.length - 1];
        if (last && last.startsWith('U')) {
          let lastAmount = 0;
          if (last.endsWith("'")) lastAmount = 3;
          else if (last.endsWith("2")) lastAmount = 2;
          else lastAmount = 1;
          
          let combinedAmount = (lastAmount + fixAmount) % 4;
          if (combinedAmount === 0) {
             scramble.pop();
          } else {
             let combinedSuffix = '';
             if (combinedAmount === 1) combinedSuffix = '';
             else if (combinedAmount === 2) combinedSuffix = '2';
             else if (combinedAmount === 3) combinedSuffix = "'";
             scramble[scramble.length - 1] = 'U' + combinedSuffix;
          }
        } else {
          scramble.push('U' + fixSuffix);
        }
      }
    }
    
    return scramble.join(' ');
  }
}
