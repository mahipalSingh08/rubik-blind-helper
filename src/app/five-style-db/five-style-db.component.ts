import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FiveStyleService, PairItem, BackendHealth } from '../shared/five-style.service';
import { FiveStyleAlgItem } from '../shared/default5-algo';

@Component({
  selector: 'app-five-style-db',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './five-style-db.component.html',
  styleUrl: './five-style-db.component.css'
})
export class FiveStyleDbComponent implements OnInit {
  pieceType: 'edges' | 'corners' = 'corners';
  availableLetters: string[] = [];
  selectedLetter: string | null = null;
  selectedPair: string | null = null;
  
  // Data lists
  pairs: PairItem[] = [];
  algorithmsForPair: FiveStyleAlgItem[] = [];
  selectedAlgorithm: FiveStyleAlgItem | null = null;
  
  // Search & Filter
  searchSequence: string = '';
  moveFilter: string = 'all';

  // State flags
  loadingPairs: boolean = false;
  loadingAlgos: boolean = false;
  loadingSingle: boolean = false;
  backendOnline: boolean | null = null;
  backendStats: BackendHealth | null = null;
  copySuccess: boolean = false;
  errorMessage: string | null = null;

  // Editing state
  isEditing: boolean = false;
  editCommutator: string = '';
  editAlgorithm: string = '';
  editSetupmove: string = '';
  editMoves: number = 0;
  savingEdit: boolean = false;

  constructor(public fiveStyleService: FiveStyleService) {}

  ngOnInit() {
    this.checkBackendHealth();
    this.loadLetters();

    const savedState = localStorage.getItem('fivestyle-search-state');
    if (savedState) {
      try {
        const state = JSON.parse(savedState);
        this.pieceType = state.pieceType || 'corners';
        this.selectedLetter = state.selectedLetter || null;
        this.selectedPair = state.selectedPair || null;
        this.searchSequence = state.searchSequence || '';
        this.moveFilter = state.moveFilter || 'all';

        if (this.selectedLetter) {
          this.fetchPairs(this.selectedLetter, this.selectedPair);
        } else if (this.searchSequence && this.searchSequence.length === 4) {
          this.onSearch();
        }
      } catch (e) {}
    }
  }

  checkBackendHealth() {
    this.fiveStyleService.checkHealth().subscribe({
      next: health => {
        if (health && health.status === 'healthy') {
          this.backendOnline = true;
          this.backendStats = health;
          this.errorMessage = null;
        } else {
          this.backendOnline = false;
        }
      },
      error: () => {
        this.backendOnline = false;
      }
    });
  }

  loadLetters() {
    this.fiveStyleService.getLetters(this.pieceType).subscribe({
      next: res => {
        this.availableLetters = res.letters || [];
      },
      error: () => {
        // Fallback default letters
        this.availableLetters = 'ABCDEFGHIJKLMNOPQRSTUVWX'.split('');
      }
    });
  }

  saveState() {
    localStorage.setItem('fivestyle-search-state', JSON.stringify({
      pieceType: this.pieceType,
      selectedLetter: this.selectedLetter,
      selectedPair: this.selectedPair,
      searchSequence: this.searchSequence,
      moveFilter: this.moveFilter
    }));
  }

  get isEdges() {
    return this.pieceType === 'edges';
  }

  get moveFilterOptions() {
    if (this.isEdges) {
      return [
        { label: 'All Move Counts', value: 'all' },
        { label: 'Show only 4 movers', value: '4' },
        { label: 'Show 4 and 5 moves', value: '4,5' }
      ];
    } else {
      return [
        { label: 'All Move Counts', value: 'all' },
        { label: 'Show only 8 movers', value: '8' },
        { label: 'Show 8 and 9 moves', value: '8,9' }
      ];
    }
  }

  changePieceType(type: 'edges' | 'corners') {
    if (this.pieceType === type) return;
    this.pieceType = type;
    this.selectedLetter = null;
    this.selectedPair = null;
    this.selectedAlgorithm = null;
    this.pairs = [];
    this.algorithmsForPair = [];
    this.searchSequence = '';
    this.moveFilter = 'all';
    this.isEditing = false;
    this.loadLetters();
    this.saveState();
  }

  onFilterChange() {
    this.saveState();
    if (this.selectedLetter) {
      this.fetchPairs(this.selectedLetter, this.selectedPair);
    }
  }

  /**
   * User clicks a single letter (e.g. 'A')
   * Shows letter pairs of that single letter
   */
  selectLetter(letter: string) {
    if (this.selectedLetter === letter) {
      this.selectedLetter = null;
      this.selectedPair = null;
      this.pairs = [];
      this.algorithmsForPair = [];
      this.saveState();
      return;
    }

    this.selectedLetter = letter;
    this.selectedPair = null;
    this.algorithmsForPair = [];
    this.saveState();
    this.fetchPairs(letter);
  }

  fetchPairs(letter: string, preservePair: string | null = null) {
    this.loadingPairs = true;
    this.errorMessage = null;

    this.fiveStyleService.getPairsForLetter(this.pieceType, letter, this.moveFilter).subscribe({
      next: res => {
        this.pairs = res.pairs || [];
        this.loadingPairs = false;

        if (preservePair && this.pairs.some(p => p.pair === preservePair)) {
          this.selectPair(preservePair, false);
        }
      },
      error: err => {
        this.loadingPairs = false;
        this.errorMessage = 'Could not load pairs from FastAPI backend. Please check server connection.';
        this.backendOnline = false;
      }
    });
  }

  /**
   * User clicks on a letter pair (e.g. 'AB')
   * Fetches the 5-style algorithms for that pair
   */
  selectPair(pair: string, autoScroll = true) {
    this.selectedPair = pair;
    this.loadingAlgos = true;
    this.saveState();

    this.fiveStyleService.getAlgorithmsByPair(this.pieceType, pair, this.moveFilter, 1, 150).subscribe({
      next: res => {
        this.algorithmsForPair = res.items || [];
        this.loadingAlgos = false;

        // Auto-select the first (shortest move) algorithm if available
        if (this.algorithmsForPair.length > 0 && (!this.selectedAlgorithm || !this.selectedAlgorithm.sequence.startsWith(pair))) {
          this.selectAlgorithm(this.algorithmsForPair[0], false);
        }

        if (autoScroll) {
          const el = document.getElementById('pair-algs-view');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      },
      error: err => {
        this.loadingAlgos = false;
        this.errorMessage = 'Could not load algorithms for pair ' + pair;
      }
    });
  }

  /**
   * User selects a specific 5-style algorithm
   */
  selectAlgorithm(item: FiveStyleAlgItem, scrollToTop = true) {
    this.selectedAlgorithm = item;
    this.searchSequence = item.sequence;
    this.isEditing = false;
    this.saveState();

    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /**
   * Manual search handler
   */
  onSearch() {
    const raw = this.searchSequence.trim().toUpperCase();
    if (!raw) {
      this.selectedAlgorithm = null;
      return;
    }

    if (raw.length === 4) {
      this.loadingSingle = true;
      this.errorMessage = null;

      this.fiveStyleService.getAlgorithm(this.pieceType, raw).subscribe({
        next: doc => {
          this.loadingSingle = false;
          this.selectedAlgorithm = doc;
          this.isEditing = false;
          this.saveState();

          // Sync letter and pair selections
          const let1 = raw[0];
          const pair1 = raw.substring(0, 2);
          if (this.selectedLetter !== let1) {
            this.selectedLetter = let1;
            this.fetchPairs(let1, pair1);
          } else if (this.selectedPair !== pair1) {
            this.selectPair(pair1, false);
          }
        },
        error: () => {
          this.loadingSingle = false;
          this.selectedAlgorithm = null;
          this.errorMessage = `No algorithm found for 4-letter sequence '${raw}' in ${this.pieceType}.`;
        }
      });
    } else if (raw.length === 2) {
      const let1 = raw[0];
      this.selectLetter(let1);
      setTimeout(() => {
        this.selectPair(raw);
      }, 300);
    }
  }

  clearSearch() {
    this.searchSequence = '';
    this.selectedAlgorithm = null;
    this.errorMessage = null;
    this.saveState();
  }

  copyAlgorithm(algText: string) {
    if (!algText) return;
    navigator.clipboard.writeText(algText).then(() => {
      this.copySuccess = true;
      setTimeout(() => {
        this.copySuccess = false;
      }, 2000);
    });
  }

  startEdit() {
    if (!this.selectedAlgorithm) return;
    this.isEditing = true;
    this.editCommutator = this.selectedAlgorithm.commutator || '';
    this.editAlgorithm = this.selectedAlgorithm.algorithm || '';
    this.editSetupmove = this.selectedAlgorithm.setupmove || '';
    this.editMoves = this.selectedAlgorithm.moves || 0;
  }

  cancelEdit() {
    this.isEditing = false;
  }

  saveEdit() {
    if (!this.selectedAlgorithm) return;
    this.savingEdit = true;

    const updatedData = {
      commutator: this.editCommutator.trim(),
      algorithm: this.editAlgorithm.trim(),
      setupmove: this.editSetupmove.trim(),
      moves: Number(this.editMoves) || this.selectedAlgorithm.moves
    };

    this.fiveStyleService.updateAlgorithm(this.pieceType, this.selectedAlgorithm.sequence, updatedData).subscribe({
      next: () => {
        this.savingEdit = false;
        this.selectedAlgorithm = {
          ...this.selectedAlgorithm!,
          ...updatedData
        };

        // Update in list if present
        const idx = this.algorithmsForPair.findIndex(a => a.sequence === this.selectedAlgorithm?.sequence);
        if (idx !== -1) {
          this.algorithmsForPair[idx] = { ...this.selectedAlgorithm };
        }

        this.isEditing = false;
      },
      error: err => {
        this.savingEdit = false;
        this.errorMessage = 'Failed to save algorithm update to backend.';
      }
    });
  }
}
