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
  sortBy: 'alphabetical' | 'moves' = 'alphabetical';
  private searchDebounceTimer: any = null;

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
        this.sortBy = state.sortBy || 'alphabetical';

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
      moveFilter: this.moveFilter,
      sortBy: this.sortBy
    }));
  }

  setSortBy(sort: 'alphabetical' | 'moves') {
    if (this.sortBy === sort) return;
    this.sortBy = sort;
    this.applySorting();
    this.saveState();
  }

  applySorting() {
    if (!this.algorithmsForPair || this.algorithmsForPair.length === 0) return;
    if (this.sortBy === 'alphabetical') {
      this.algorithmsForPair.sort((a, b) => a.sequence.localeCompare(b.sequence));
    } else {
      this.algorithmsForPair.sort((a, b) => (a.moves - b.moves) || a.sequence.localeCompare(b.sequence));
    }
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

  fetchPairs(letter: string, preservePair: string | null = null, autoScroll = false) {
    this.loadingPairs = true;
    this.errorMessage = null;

    this.fiveStyleService.getPairsForLetter(this.pieceType, letter, this.moveFilter).subscribe({
      next: res => {
        this.loadingPairs = false;
        if (this.selectedLetter === letter) {
          this.pairs = res.pairs || [];
          if (preservePair && this.pairs.some(p => p.pair === preservePair)) {
            this.selectPair(preservePair, autoScroll, false);
          }
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
  selectPair(pair: string, autoScroll = true, autoSelectFirst = false) {
    this.selectedPair = pair;
    this.loadingAlgos = true;
    this.saveState();

    this.fiveStyleService.getAlgorithmsByPair(this.pieceType, pair, this.moveFilter, 1, 500).subscribe({
      next: res => {
        this.loadingAlgos = false;
        if (this.selectedPair === pair) {
          this.algorithmsForPair = res.items || [];
          this.applySorting();

          // Auto-select the first algorithm ONLY if explicitly requested
          if (autoSelectFirst && this.algorithmsForPair.length > 0 && (!this.selectedAlgorithm || !this.selectedAlgorithm.sequence.startsWith(pair))) {
            this.selectAlgorithm(this.algorithmsForPair[0], false, false);
          }

          if (autoScroll) {
            const el = document.getElementById('pair-algs-view');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
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
  selectAlgorithm(item: FiveStyleAlgItem, scrollToTop = true, updateSearchBox = true) {
    this.selectedAlgorithm = item;
    if (updateSearchBox) {
      this.searchSequence = item.sequence;
    }
    this.isEditing = false;
    this.saveState();

    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /**
   * Jump directly to another algorithm (e.g. inverse or base algorithm)
   */
  goToAlgorithm(sequence?: string) {
    if (!sequence) return;
    const cleanSeq = sequence.trim().toUpperCase();
    if (cleanSeq.length !== 4 && cleanSeq.length !== 2) return;

    // If already viewing this algorithm, scroll to top smoothly
    if (this.selectedAlgorithm && this.selectedAlgorithm.sequence === cleanSeq) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Reset move filter to 'all' so the target algorithm and its pair are never filtered out
    if (this.moveFilter !== 'all') {
      this.moveFilter = 'all';
    }

    if (this.searchDebounceTimer) {
      clearTimeout(this.searchDebounceTimer);
      this.searchDebounceTimer = null;
    }

    this.searchSequence = cleanSeq;
    this.execute4LetterSearch(cleanSeq, true);
  }

  /**
   * Manual search handler triggered on input
   */
  onSearch(scrollToTop = false) {
    if (this.searchDebounceTimer) {
      clearTimeout(this.searchDebounceTimer);
      this.searchDebounceTimer = null;
    }

    const raw = this.searchSequence ? this.searchSequence.trim().toUpperCase() : '';
    if (!raw) {
      this.selectedAlgorithm = null;
      this.errorMessage = null;
      return;
    }

    if (raw.length === 4) {
      // 4-letter sequence: search immediately for the exact algorithm
      this.execute4LetterSearch(raw, scrollToTop);
    } else if (raw.length === 2) {
      // 2-letter pair: debounce by 500ms so typing a 4-letter sequence is never interrupted
      this.searchDebounceTimer = setTimeout(() => {
        this.execute2LetterSearch(raw);
      }, 500);
    } else {
      // 1 or 3 letters: User is in the middle of typing, clear error and wait
      this.errorMessage = null;
    }
  }

  /**
   * Immediate search trigger when user hits Enter
   */
  onSearchEnter() {
    if (this.searchDebounceTimer) {
      clearTimeout(this.searchDebounceTimer);
      this.searchDebounceTimer = null;
    }

    const raw = this.searchSequence ? this.searchSequence.trim().toUpperCase() : '';
    if (raw.length === 4) {
      this.execute4LetterSearch(raw, true);
    } else if (raw.length === 2) {
      this.execute2LetterSearch(raw);
    }
  }

  execute4LetterSearch(raw: string, scrollToTop = false) {
    this.loadingSingle = true;
    this.errorMessage = null;

    this.fiveStyleService.getAlgorithm(this.pieceType, raw).subscribe({
      next: doc => {
        // Discard if user modified the search in the meantime
        if (this.searchSequence.trim().toUpperCase() !== raw) {
          this.loadingSingle = false;
          return;
        }

        this.loadingSingle = false;
        this.selectedAlgorithm = doc;
        this.isEditing = false;
        this.saveState();

        if (scrollToTop) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Sync letter and pair selections without overriding the search box or auto-selecting other algs
        const let1 = raw[0];
        const pair1 = raw.substring(0, 2);
        if (this.selectedLetter !== let1 || !this.pairs.length) {
          this.selectedLetter = let1;
          this.fetchPairs(let1, pair1, false);
        } else if (this.selectedPair !== pair1 || !this.algorithmsForPair.length) {
          this.selectPair(pair1, false, false);
        }
      },
      error: () => {
        if (this.searchSequence.trim().toUpperCase() !== raw) {
          this.loadingSingle = false;
          return;
        }
        this.loadingSingle = false;
        this.selectedAlgorithm = null;
        this.errorMessage = `No algorithm found for 4-letter sequence '${raw}' in ${this.pieceType}.`;
      }
    });
  }

  execute2LetterSearch(pair: string) {
    const let1 = pair[0];
    this.errorMessage = null;

    if (this.selectedLetter !== let1 || !this.pairs.length) {
      this.selectedLetter = let1;
      this.fetchPairs(let1, pair, true);
    } else if (this.selectedPair !== pair || !this.algorithmsForPair.length) {
      this.selectPair(pair, true, false);
    }
  }

  clearSearch() {
    if (this.searchDebounceTimer) {
      clearTimeout(this.searchDebounceTimer);
      this.searchDebounceTimer = null;
    }
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
          this.applySorting();
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
