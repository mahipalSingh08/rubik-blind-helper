import { Injectable } from '@angular/core';

export interface LearnedAlg {
  id: string;
  type: 'edges' | 'corners';
  pair: string;
  cycle: string;
  algorithm: string;
  longAlgorithm?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LearnService {
  private STORAGE_KEY = 'bld-learned-algs';
  private algs: LearnedAlg[] = [];

  constructor() {
    this.loadAlgs();
  }

  private loadAlgs() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try {
        this.algs = JSON.parse(saved);
      } catch (e) {
        this.algs = [];
      }
    }
  }

  private saveAlgs() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.algs));
  }

  getAlgs(): LearnedAlg[] {
    return this.algs;
  }

  addAlg(type: 'edges' | 'corners', pair: string, cycle: string, algorithm: string, longAlgorithm: string) {
    const newAlg: LearnedAlg = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      type,
      pair,
      cycle,
      algorithm,
      longAlgorithm
    };
    // Don't add duplicate pairs of the same type
    const existingIndex = this.algs.findIndex(a => a.type === type && a.pair === pair);
    if (existingIndex >= 0) {
      this.algs[existingIndex] = newAlg; // Update existing
    } else {
      this.algs.push(newAlg); // Add new
    }
    this.saveAlgs();
  }

  removeAlg(id: string) {
    this.algs = this.algs.filter(a => a.id !== id);
    this.saveAlgs();
  }
}
