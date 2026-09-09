import { Injectable } from '@angular/core';
import { DEFAULT_EDGES, DEFAULT_CORNERS, DEFAULT_SPECIAL, AlgDef } from './default-algs';

@Injectable({
  providedIn: 'root'
})
export class CommutatorService {
  private edgeCommutators: Record<string, AlgDef> = {};
  private cornerCommutators: Record<string, AlgDef> = {};
  private specialCommutators: Record<string, AlgDef> = {};

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
}
