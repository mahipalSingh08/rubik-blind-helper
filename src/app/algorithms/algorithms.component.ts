import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommutatorService } from '../shared/commutator.service';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-algorithms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './algorithms.component.html',
  styleUrl: './algorithms.component.css'
})
export class AlgorithmsComponent implements OnInit {
  searchPair: string = '';
  pieceType: 'edges' | 'corners' | 'special' | 'base' = 'edges';
  currentAlgShort: string = '';
  currentAlgLong: string = '';
  isEditing: boolean = false;
  editAlgShort: string = '';
  editAlgLong: string = '';

  letters = 'ABCDEFGHIJKLMNOPQRSTUVWX'.split('');
  selectedLetter: string | null = null;
  filteredPairs: { pair: string, short: string, long: string }[] = [];

  // Base Algos state
  newBaseType: 'edge' | 'corner' = 'corner';
  newBaseName: string = '';
  newBaseAlgText: string = '';

  constructor(
    public commutatorService: CommutatorService,
    public language: LanguageService
  ) {}

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
    const speffz = this.language.toSpeffzPair(this.searchPair);
    if (this.language.isHindi() && speffz.length === 2) {
      return `${this.language.toDisplayPair(speffz)} (${speffz})`;
    }
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

    const pair = this.language.toSpeffzPair(this.searchPair);
    if (pair.length === 2 && /^[A-X]{2}$/.test(pair)) {
      const alg = this.isEdges
      ? this.commutatorService.getEdgeAlg(pair)
      : this.commutatorService.getCornerAlg(pair);
      
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
    this.isEditing = false;
    
    const available = this.getAvailablePairs();
    if (this.searchPair && available.includes(this.searchPair.toUpperCase())) {
      this.searchPair = this.searchPair.toUpperCase();
      this.onSearch();
    } else if (this.searchPair && available.length > 0) {
      this.searchPair = available[0];
      this.onSearch();
    } else {
      this.searchPair = '';
      this.currentAlgShort = '';
      this.currentAlgLong = '';
    }
    
    if (this.selectedLetter) {
      this.updateFilteredPairs();
    }
    
    this.saveState();
  }

  getAvailablePairs(): string[] {
    if (this.isEdges) {
      return this.commutatorService.getAllEdgePairs().sort();
    } else if (this.pieceType === 'corners') {
      return this.commutatorService.getAllCornerPairs().sort();
    } else if (this.pieceType === 'special') {
      return ['PARITY', 'EDGE_FLIPS', 'CORNER_TWISTS'];
    }
    return [];
  }

  getCurrentPairIndex(): number {
    const pairs = this.getAvailablePairs();
    const current = (this.searchPair || '').toUpperCase().trim();
    return pairs.indexOf(current);
  }

  get currentPairNumber(): { current: number, total: number } | null {
    const pairs = this.getAvailablePairs();
    const idx = this.getCurrentPairIndex();
    if (idx === -1 || pairs.length === 0) return null;
    return { current: idx + 1, total: pairs.length };
  }

  get prevPairName(): string {
    const pairs = this.getAvailablePairs();
    if (pairs.length === 0) return '';
    const idx = this.getCurrentPairIndex();
    if (idx === -1) {
      const current = (this.searchPair || '').toUpperCase().trim();
      const foundIdx = pairs.findIndex(p => p >= current);
      return foundIdx > 0 ? pairs[foundIdx - 1] : pairs[pairs.length - 1];
    }
    return pairs[(idx - 1 + pairs.length) % pairs.length];
  }

  get nextPairName(): string {
    const pairs = this.getAvailablePairs();
    if (pairs.length === 0) return '';
    const idx = this.getCurrentPairIndex();
    if (idx === -1) {
      const current = (this.searchPair || '').toUpperCase().trim();
      const foundIdx = pairs.findIndex(p => p > current);
      return foundIdx !== -1 ? pairs[foundIdx] : pairs[0];
    }
    return pairs[(idx + 1) % pairs.length];
  }

  goToPrevPair() {
    const target = this.prevPairName;
    if (target) {
      this.selectPair(target);
    }
  }

  goToNextPair() {
    const target = this.nextPairName;
    if (target) {
      this.selectPair(target);
    }
  }

  selectPair(pair: string) {
    this.searchPair = pair.toUpperCase();
    if (this.selectedLetter && !pair.toUpperCase().includes(this.selectedLetter)) {
      this.selectedLetter = null;
      this.filteredPairs = [];
    }
    this.onSearch();
  }

  startPractice() {
    const pairs = this.getAvailablePairs();
    if (pairs.length > 0) {
      this.selectPair(pairs[0]);
    }
  }

  blurInput(event: Event) {
    const target = event.target as HTMLElement | null;
    target?.blur();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardNavigation(event: KeyboardEvent) {
    if (this.isEditing) return;
    const activeEl = document.activeElement;
    const activeTag = (activeEl?.tagName || '').toLowerCase();
    if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') {
      return;
    }
    if (this.pieceType !== 'edges' && this.pieceType !== 'corners' && this.pieceType !== 'special') {
      return;
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.goToPrevPair();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.goToNextPair();
    }
  }

  selectSpecialCategory() {
    this.pieceType = 'special';
    this.searchPair = '';
    this.currentAlgShort = '';
    this.currentAlgLong = '';
    this.isEditing = false;
    this.saveState();
  }

  selectBaseCategory() {
    this.pieceType = 'base';
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

  // --- Base Algos methods ---
  get baseCornerAlgs() {
    return this.commutatorService.getBaseAlgs().filter(a => a.type === 'corner');
  }

  get baseEdgeAlgs() {
    return this.commutatorService.getBaseAlgs().filter(a => a.type === 'edge');
  }

  submitBaseAlg() {
    if (!this.newBaseName.trim() || !this.newBaseAlgText.trim()) return;
    this.commutatorService.addBaseAlg(this.newBaseType, this.newBaseName.trim(), this.newBaseAlgText.trim());
    this.newBaseName = '';
    this.newBaseAlgText = '';
  }

  deleteBaseAlg(id: string) {
    this.commutatorService.removeBaseAlg(id);
  }
}
