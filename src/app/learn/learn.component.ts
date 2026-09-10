import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LearnService, LearnedAlg } from './learn.service';
import { CommutatorService } from '../shared/commutator.service';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  searchType: 'edges' | 'corners' = 'edges';
  searchPair: string = '';
  
  filterType: 'all' | 'edges' | 'corners' = 'all';

  private cornerPositions = [
    'UBL', 'UBR', 'UFR', 'UFL',
    'LUB', 'LUF', 'LDF', 'LDB',
    'FUL', 'FUR', 'FDR', 'FDL',
    'RUF', 'RUB', 'RDB', 'RDF',
    'BUR', 'BUL', 'BDL', 'BDR',
    'DFL', 'DFR', 'DBR', 'DBL'
  ];

  private edgePositions = [
    'UB', 'UR', 'UF', 'UL',
    'LU', 'LF', 'LD', 'LB',
    'FU', 'FR', 'FD', 'FL',
    'RU', 'RB', 'RD', 'RF',
    'BU', 'BL', 'BD', 'BR',
    'DF', 'DR', 'DB', 'DL'
  ];

  constructor(
    public learnService: LearnService,
    private commutatorService: CommutatorService
  ) {}

  ngOnInit() {}

  get currentSearchResult() {
    if (this.searchPair.length !== 2) return null;
    const pair = this.searchPair.toUpperCase();
    
    let algText = '';
    let algLongText = '';
    if (this.searchType === 'edges') {
      const alg = this.commutatorService.getEdgeAlg(pair);
      algText = alg?.short || '';
      algLongText = alg?.long || '';
    } else {
      const alg = this.commutatorService.getCornerAlg(pair);
      algText = alg?.short || '';
      algLongText = alg?.long || '';
    }

    if (!algText) return null;

    return {
      pair,
      cycle: this.getCycleString(this.searchType, pair),
      algorithm: algText,
      longAlgorithm: algLongText
    };
  }

  getCycleString(type: 'edges' | 'corners', pair: string): string {
    const l1 = pair.charCodeAt(0) - 65;
    const l2 = pair.charCodeAt(1) - 65;
    if (l1 < 0 || l1 > 23 || l2 < 0 || l2 > 23) return '';
    
    if (type === 'edges') {
      const p1 = this.edgePositions[l1];
      const p2 = this.edgePositions[l2];
      return `UF -> ${p1} -> ${p2}`;
    } else {
      const p1 = this.cornerPositions[l1];
      const p2 = this.cornerPositions[l2];
      return `UFR -> ${p1} -> ${p2}`;
    }
  }

  addAlg() {
    const res = this.currentSearchResult;
    if (res) {
      this.learnService.addAlg(this.searchType, res.pair, res.cycle, res.algorithm, res.longAlgorithm);
      this.searchPair = '';
    }
  }

  get augmentedFilteredAlgs() {
    const algs = this.learnService.getAlgs();
    const filtered = this.filterType === 'all' ? algs : algs.filter(a => a.type === this.filterType);

    return filtered.map(alg => {
      const oppositePair = alg.pair.length === 2 ? alg.pair[1] + alg.pair[0] : '';
      const oppositeCycle = oppositePair ? this.getCycleString(alg.type, oppositePair) : '';
      let oppositeShort = '';
      let oppositeLong = '';

      if (oppositePair) {
        const a = alg.type === 'edges' 
          ? this.commutatorService.getEdgeAlg(oppositePair) 
          : this.commutatorService.getCornerAlg(oppositePair);
        
        if (a) {
          oppositeShort = a.short;
          oppositeLong = a.long;
        }
      }

      return {
        ...alg,
        oppositePair,
        oppositeCycle,
        oppositeShort,
        oppositeLong
      };
    });
  }

  removeAlg(id: string) {
    this.learnService.removeAlg(id);
  }
}
