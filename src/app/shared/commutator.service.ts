import { Injectable } from '@angular/core';
import { DEFAULT_EDGES, DEFAULT_CORNERS, DEFAULT_SPECIAL, AlgDef } from './default-algs';

export interface BaseAlg {
  id: string;
  type: 'edge' | 'corner';
  name: string;
  alg: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommutatorService {
  private edgeCommutators: Record<string, AlgDef> = {};
  private cornerCommutators: Record<string, AlgDef> = {};
  private specialCommutators: Record<string, AlgDef> = {};
  private baseAlgs: BaseAlg[] = [];

  constructor() {
    this.loadData();
  }

  private loadData() {
    // Start with default DB
    this.edgeCommutators = { ...DEFAULT_EDGES };
    this.cornerCommutators = { ...DEFAULT_CORNERS };
    this.specialCommutators = { ...DEFAULT_SPECIAL };

    // Override with any user-saved ones
    const edges = localStorage.getItem('edgeCommutators');
    if (edges) {
      try { 
        const parsed = JSON.parse(edges); 
        for (const key of Object.keys(parsed)) {
          const val = parsed[key];
          if (typeof val === 'string') {
            this.edgeCommutators[key] = { short: val, long: '' };
          } else {
            this.edgeCommutators[key] = val;
          }
        }
      } catch (e) {}
    }
    
    const corners = localStorage.getItem('cornerCommutators');
    if (corners) {
      try { 
        const parsed = JSON.parse(corners); 
        for (const key of Object.keys(parsed)) {
          const val = parsed[key];
          if (typeof val === 'string') {
            this.cornerCommutators[key] = { short: val, long: '' };
          } else {
            this.cornerCommutators[key] = val;
          }
        }
      } catch (e) {}
    }

    const specials = localStorage.getItem('specialCommutators');
    if (specials) {
      try { 
        const parsed = JSON.parse(specials); 
        for (const key of Object.keys(parsed)) {
          const val = parsed[key];
          if (typeof val === 'string') {
            this.specialCommutators[key] = { short: val, long: '' };
          } else {
            this.specialCommutators[key] = val;
          }
        }
      } catch (e) {}
    }

    const baseSaved = localStorage.getItem('baseAlgs');
    if (baseSaved) {
      try {
        this.baseAlgs = JSON.parse(baseSaved);
        // Inject any missing defaults
        const newDefaults = [
          { id: 'def1', type: 'corner' as const, name: 'AB (anti clock)', alg: "R2 B2 R F R' B2 R F' R" },
          { id: 'def2', type: 'corner' as const, name: 'AA (clock)', alg: "R' F R' B2 R F' R' B2 R2" },
          { id: 'def3', type: 'corner' as const, name: 'AP', alg: "R' D' R U2 R' D R U2" },
          { id: 'def4', type: 'corner' as const, name: 'AG', alg: "R' D R U2 R' D' R U2" },
          { id: 'def5', type: 'edge' as const, name: 'UA', alg: "M2 U M U2 M' U M2" },
          { id: 'def6', type: 'edge' as const, name: 'UB', alg: "M2 U' M U2 M' U' M2" },
          { id: 'def7', type: 'edge' as const, name: 'WU', alg: "M u2 M u2" },
          { id: 'def8', type: 'edge' as const, name: 'UW', alg: "u2 M u2 M" },
          { id: 'def9', type: 'edge' as const, name: 'QM', alg: "r U R' U' M U R U' R'" },
          { id: 'def10', type: 'edge' as const, name: 'MQ', alg: "R U R' U' M' U R U' r'" },
          { id: 'def11', type: 'corner' as const, name: 'PA', alg: "U2 R' D' R U2 R' D R" },
          { id: 'def12', type: 'corner' as const, name: 'GA', alg: "U2 R' D R U2 R' D' R" }
        ];
        let changed = false;
        for (const def of newDefaults) {
          const existing = this.baseAlgs.find(b => b.name === def.name);
          if (!existing) {
            this.baseAlgs.push(def);
            changed = true;
          } else if (existing.alg !== def.alg) {
            existing.alg = def.alg;
            changed = true;
          }
        }
        if (changed) this.saveBaseAlgs();
      } catch (e) {
        this.baseAlgs = [];
      }
    }
    
    if (!baseSaved || this.baseAlgs.length === 0) {
      // Default Base Algos
      this.baseAlgs = [
        { id: 'def1', type: 'corner', name: 'AB (anti clock)', alg: "R2 B2 R F R' B2 R F' R" },
        { id: 'def2', type: 'corner', name: 'AA (clock)', alg: "R' F R' B2 R F' R' B2 R2" },
        { id: 'def3', type: 'corner', name: 'AP', alg: "R' D' R U2 R' D R U2" },
        { id: 'def4', type: 'corner', name: 'AG', alg: "R' D R U2 R' D' R U2" },
        { id: 'def5', type: 'edge', name: 'UA', alg: "M2 U M U2 M' U M2" },
        { id: 'def6', type: 'edge', name: 'UB', alg: "M2 U' M U2 M' U' M2" },
        { id: 'def7', type: 'edge', name: 'WU', alg: "M u2 M u2" },
        { id: 'def8', type: 'edge', name: 'UW', alg: "u2 M u2 M" },
        { id: 'def9', type: 'edge', name: 'QM', alg: "r U R' U' M U R U' R'" },
        { id: 'def10', type: 'edge', name: 'MQ', alg: "R U R' U' M' U R U' r'" },
        { id: 'def11', type: 'corner', name: 'PA', alg: "U2 R' D' R U2 R' D R" },
        { id: 'def12', type: 'corner', name: 'GA', alg: "U2 R' D R U2 R' D' R" }
      ];
      this.saveBaseAlgs();
    }
  }

  saveData() {
    localStorage.setItem('edgeCommutators', JSON.stringify(this.edgeCommutators));
    localStorage.setItem('cornerCommutators', JSON.stringify(this.cornerCommutators));
    localStorage.setItem('specialCommutators', JSON.stringify(this.specialCommutators));
  }

  getEdgeAlg(pair: string): AlgDef | null {
    return this.edgeCommutators[pair.toUpperCase()] || null;
  }

  getCornerAlg(pair: string): AlgDef | null {
    return this.cornerCommutators[pair.toUpperCase()] || null;
  }

  setEdgeAlg(pair: string, shortAlg: string, longAlg: string = '') {
    this.edgeCommutators[pair.toUpperCase()] = { short: shortAlg, long: longAlg };
    this.saveData();
  }

  setCornerAlg(pair: string, shortAlg: string, longAlg: string = '') {
    this.cornerCommutators[pair.toUpperCase()] = { short: shortAlg, long: longAlg };
    this.saveData();
  }

  getSpecialAlg(pair: string): AlgDef | null {
    return this.specialCommutators[pair.toUpperCase()] || null;
  }

  setSpecialAlg(pair: string, shortAlg: string, longAlg: string = '') {
    this.specialCommutators[pair.toUpperCase()] = { short: shortAlg, long: longAlg };
    this.saveData();
  }

  getAllEdgePairs(): string[] {
    return Object.keys(this.edgeCommutators);
  }

  getAllCornerPairs(): string[] {
    return Object.keys(this.cornerCommutators);
  }

  // --- Base Algos ---
  getBaseAlgs(): BaseAlg[] {
    return this.baseAlgs;
  }

  addBaseAlg(type: 'edge' | 'corner', name: string, alg: string) {
    const newBase: BaseAlg = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      type,
      name,
      alg
    };
    this.baseAlgs.push(newBase);
    this.saveBaseAlgs();
  }

  removeBaseAlg(id: string) {
    this.baseAlgs = this.baseAlgs.filter(b => b.id !== id);
    this.saveBaseAlgs();
  }

  private saveBaseAlgs() {
    localStorage.setItem('baseAlgs', JSON.stringify(this.baseAlgs));
  }
}
