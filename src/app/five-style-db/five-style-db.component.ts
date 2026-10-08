import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommutatorService } from '../shared/commutator.service';
import { FiveStyleAlgDef } from '../shared/default5-algo';

@Component({
  selector: 'app-five-style-db',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './five-style-db.component.html',
  styleUrl: './five-style-db.component.css'
})
export class FiveStyleDbComponent implements OnInit {
  searchSequence: string = '';
  pieceType: 'edges' | 'corners' = 'corners';
  currentAlg: FiveStyleAlgDef | null = null;
  
  isEditing: boolean = false;
  editAlgShort: string = '';
  editAlgFull: string = '';
  editExpand: string = '';

  letters = 'ABCDEFGHIJKLMNOPQRSTUVWX'.split('');
  selectedLetter: string | null = null;
  filteredSequences: { sequence: string, short: string, expand: string, algorithm: string, htm?: number }[] = [];
  moveFilter: string = 'all';

  constructor(public commutatorService: CommutatorService) {}

  ngOnInit() {
    const savedState = localStorage.getItem('fivestyle-search-state');
    if (savedState) {
      try {
        const state = JSON.parse(savedState);
        this.pieceType = state.pieceType || 'corners';
        this.searchSequence = state.searchSequence || '';
        this.selectedLetter = state.selectedLetter || null;
        this.moveFilter = state.moveFilter || 'all';
        
        if (this.selectedLetter) {
          this.updateFilteredSequences();
        }
        if (this.searchSequence) {
          this.onSearch(false);
        }
      } catch (e) {}
    }
  }

  saveState() {
    localStorage.setItem('fivestyle-search-state', JSON.stringify({
      pieceType: this.pieceType,
      searchSequence: this.searchSequence,
      selectedLetter: this.selectedLetter,
      moveFilter: this.moveFilter
    }));
  }

  get isEdges() {
    return this.pieceType === 'edges';
  }

  get moveFilterOptions() {
    if (this.isEdges) {
      return [
        { label: 'Show only 4 movers', value: '4' },
        { label: 'Show 4 and 5 moves', value: '4,5' },
        { label: 'Show all', value: 'all' }
      ];
    } else {
      return [
        { label: 'Show only 8 movers', value: '8' },
        { label: 'Show 8 and 9 moves', value: '8,9' },
        { label: 'Show all', value: 'all' }
      ];
    }
  }

  onFilterChange() {
    this.selectedLetter = null;
    this.searchSequence = '';
    this.currentAlg = null;
    this.isEditing = false;
    this.filteredSequences = [];
    this.saveState();
  }

  get availableLetters(): string[] {
    if (this.moveFilter === 'all') return this.letters;
    
    let allSequences: string[] = this.isEdges 
      ? this.commutatorService.getAll5StyleEdgePairs()
      : this.commutatorService.getAll5StyleCornerPairs();
      
    const validSequences = allSequences.filter(p => this.isSequenceValid(p));
    return this.letters.filter(letter => validSequences.some(seq => seq.includes(letter)));
  }

  isSequenceValid(seq: string): boolean {
    if (this.moveFilter === 'all') return true;
    
    const alg = this.isEdges 
      ? this.commutatorService.get5StyleEdgeAlg(seq)
      : this.commutatorService.get5StyleCornerAlg(seq);
      
    if (!alg || !alg.htm) return false;
    
    if (this.moveFilter === '4') return alg.htm === 4;
    if (this.moveFilter === '4,5') return alg.htm === 4 || alg.htm === 5;
    if (this.moveFilter === '8') return alg.htm === 8;
    if (this.moveFilter === '8,9') return alg.htm === 8 || alg.htm === 9;
    
    return true;
  }

  onSearch(isManualSearch = true) {
    if (isManualSearch) {
      this.selectedLetter = null;
      this.filteredSequences = [];
    }

    if (this.searchSequence.length === 4) {
      this.currentAlg = this.isEdges
        ? this.commutatorService.get5StyleEdgeAlg(this.searchSequence)
        : this.commutatorService.get5StyleCornerAlg(this.searchSequence);
      
      this.isEditing = false;
    } else {
      this.currentAlg = null;
    }
    this.saveState();
  }

  selectLetter(letter: string) {
    if (this.selectedLetter === letter) {
      this.selectedLetter = null;
      this.filteredSequences = [];
    } else {
      this.selectedLetter = letter;
      this.searchSequence = ''; // Clear manual search
      this.currentAlg = null;
      this.isEditing = false;
      this.updateFilteredSequences();
    }
    this.saveState();
  }

  updateFilteredSequences() {
    if (!this.selectedLetter) {
      this.filteredSequences = [];
      return;
    }
    
    let allSequences: string[] = [];
    if (this.isEdges) {
      allSequences = this.commutatorService.getAll5StyleEdgePairs();
    } else {
      allSequences = this.commutatorService.getAll5StyleCornerPairs();
    }

    this.filteredSequences = allSequences
      .filter(p => p.includes(this.selectedLetter!) && this.isSequenceValid(p))
      .sort()
      .map(p => {
        const alg = this.isEdges ? this.commutatorService.get5StyleEdgeAlg(p) : this.commutatorService.get5StyleCornerAlg(p);
        return { 
          sequence: p, 
          short: alg?.short || '', 
          expand: alg?.expand || '',
          algorithm: alg?.algorithm || '',
          htm: alg?.htm
        };
      });
  }

  selectSequenceFromList(seq: string) {
    this.searchSequence = seq;
    this.onSearch(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  changePieceType(type: 'edges' | 'corners') {
    this.pieceType = type;
    this.searchSequence = '';
    this.currentAlg = null;
    this.isEditing = false;
    this.moveFilter = 'all';
    
    if (this.selectedLetter) {
      if (!this.availableLetters.includes(this.selectedLetter)) {
        this.selectedLetter = null;
        this.filteredSequences = [];
      } else {
        this.updateFilteredSequences();
      }
    }
    
    this.saveState();
  }

  startEdit() {
    this.isEditing = true;
    this.editAlgShort = this.currentAlg?.short || '';
    this.editAlgFull = this.currentAlg?.algorithm || '';
    this.editExpand = this.currentAlg?.expand || '';
  }

  saveEdit() {
    const updatedAlg: FiveStyleAlgDef = {
      short: this.editAlgShort,
      algorithm: this.editAlgFull,
      expand: this.editExpand,
      buffer: this.currentAlg?.buffer || 'C'
    };

    if (this.isEdges) {
      this.commutatorService.set5StyleEdgeAlg(this.searchSequence, updatedAlg);
    } else {
      this.commutatorService.set5StyleCornerAlg(this.searchSequence, updatedAlg);
    }
    this.currentAlg = updatedAlg;
    this.isEditing = false;
  }

  cancelEdit() {
    this.isEditing = false;
  }
}
