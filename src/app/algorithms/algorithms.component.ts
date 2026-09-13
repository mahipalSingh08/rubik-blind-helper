import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommutatorService } from '../shared/commutator.service';

@Component({
  selector: 'app-algorithms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './algorithms.component.html',
  styleUrl: './algorithms.component.css'
})
export class AlgorithmsComponent implements OnInit {
  searchPair: string = '';
  pieceType: 'edges' | 'corners' | 'special' = 'edges';
  currentAlgShort: string = '';
  currentAlgLong: string = '';
  isEditing: boolean = false;
  editAlgShort: string = '';
  editAlgLong: string = '';

  letters = 'ABCDEFGHIJKLMNOPQRSTUVWX'.split('');
  selectedLetter: string | null = null;
  filteredPairs: { pair: string, short: string, long: string }[] = [];

  constructor(private commutatorService: CommutatorService) {}

  ngOnInit() {
    const savedState = localStorage.getItem('alg-search-state');
    if (savedState) {
      try {
        const state = JSON.parse(savedState);
        this.pieceType = state.pieceType || 'edges';
        this.searchPair = state.searchPair || '';
        this.selectedLetter = state.selectedLetter || null;
        
        if (this.selectedLetter) {
          this.updateFilteredPairs();
        }
        if (this.searchPair) {
          this.onSearch();
        }
      } catch (e) {}
    }
  }

  saveState() {
    localStorage.setItem('alg-search-state', JSON.stringify({
      pieceType: this.pieceType,
      searchPair: this.searchPair,
      selectedLetter: this.selectedLetter
    }));
  }

  get isEdges() {
    return this.pieceType === 'edges';
  }

  get displayPairTitle() {
    if (this.pieceType === 'special') return this.searchPair.replace('_', ' ');
    return this.searchPair;
  }

  onSearch(isManualSearch = false) {
    if (isManualSearch) {
      this.selectedLetter = null; // Clear letter selection when manually searching
      this.filteredPairs = [];
    }
    
    if (this.pieceType === 'special') {
      const alg = this.commutatorService.getSpecialAlg(this.searchPair);
      if (alg) {
        this.currentAlgShort = alg.short;
        this.currentAlgLong = alg.long;
      } else {
        this.currentAlgShort = '';
        this.currentAlgLong = '';
      }
      this.isEditing = false;
      this.saveState();
      return;
    }

    if (this.searchPair.length === 2) {
      const alg = this.isEdges
      ? this.commutatorService.getEdgeAlg(this.searchPair)
      : this.commutatorService.getCornerAlg(this.searchPair);
      
      if (alg) {
        this.currentAlgShort = alg.short;
        this.currentAlgLong = alg.long;
      } else {
        this.currentAlgShort = '';
        this.currentAlgLong = '';
      }
      this.isEditing = false;
    } else {
      this.currentAlgShort = '';
      this.currentAlgLong = '';
    }
    this.saveState();
  }

  selectLetter(letter: string) {
    if (this.selectedLetter === letter) {
      this.selectedLetter = null;
      this.filteredPairs = [];
    } else {
      this.selectedLetter = letter;
      this.searchPair = ''; // Clear manual search
      this.currentAlgShort = '';
      this.currentAlgLong = '';
      this.isEditing = false;
      this.updateFilteredPairs();
    }
    this.saveState();
  }

  updateFilteredPairs() {
    if (!this.selectedLetter || this.pieceType === 'special') {
      this.filteredPairs = [];
      return;
    }
    
    let allPairs: string[] = [];
    if (this.isEdges) {
      allPairs = this.commutatorService.getAllEdgePairs();
    } else {
      allPairs = this.commutatorService.getAllCornerPairs();
    }

    this.filteredPairs = allPairs
      .filter(p => p.includes(this.selectedLetter!))
      .sort()
      .map(p => {
        const alg = this.isEdges ? this.commutatorService.getEdgeAlg(p) : this.commutatorService.getCornerAlg(p);
        return { pair: p, short: alg?.short || '', long: alg?.long || '' };
      });
  }

  selectPairFromList(pair: string) {
    this.searchPair = pair;
    this.onSearch();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  changePieceType(type: 'edges' | 'corners') {
    this.pieceType = type;
    this.searchPair = '';
    this.currentAlgShort = '';
    this.currentAlgLong = '';
    this.isEditing = false;
    
    if (this.selectedLetter) {
      this.updateFilteredPairs();
    }
    
    this.saveState();
  }

  selectSpecialCategory() {
    this.pieceType = 'special';
    this.searchPair = '';
    this.currentAlgShort = '';
    this.currentAlgLong = '';
    this.isEditing = false;
    this.saveState();
  }

  selectSpecial(type: string) {
    this.pieceType = 'special';
    this.searchPair = type;
    this.onSearch();
  }

  startEdit() {
    this.isEditing = true;
    this.editAlgShort = this.currentAlgShort;
    this.editAlgLong = this.currentAlgLong;
  }

  saveEdit() {
    if (this.pieceType === 'special') {
      this.commutatorService.setSpecialAlg(this.searchPair, this.editAlgShort, this.editAlgLong);
    } else if (this.isEdges) {
      this.commutatorService.setEdgeAlg(this.searchPair, this.editAlgShort, this.editAlgLong);
    } else {
      this.commutatorService.setCornerAlg(this.searchPair, this.editAlgShort, this.editAlgLong);
    }
    this.currentAlgShort = this.editAlgShort;
    this.currentAlgLong = this.editAlgLong;
    this.isEditing = false;
  }

  cancelEdit() {
    this.isEditing = false;
  }
}
