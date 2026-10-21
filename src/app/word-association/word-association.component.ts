import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DictionaryService } from '../shared/dictionary.service';
import { SPEFFZ_LETTERS } from '../shared/hindi-scheme';

@Component({
  selector: 'app-word-association',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './word-association.component.html',
  styleUrls: ['./word-association.component.css']
})
export class WordAssociationComponent implements OnInit {
  speffzLetters = [...SPEFFZ_LETTERS];
  selectedLetter: string | null = null;
  activePair: string | null = null;
  searchPair: string = '';
  searchError: string = '';
  customInput: string = '';

  constructor(public dictionary: DictionaryService) {}

  ngOnInit() {
    const saved = localStorage.getItem('word-dict-search-state');
    if (saved) {
      try {
        const state = JSON.parse(saved);
        if (state.searchPair && state.searchPair.length === 2 && state.searchPair[0] !== state.searchPair[1]) {
          this.searchPair = state.searchPair;
          this.onSearch();
        } else if (state.selectedLetter) {
          this.selectedLetter = state.selectedLetter;
          this.searchPair = state.selectedLetter;
        }
      } catch (e) {}
    }
  }

  // Get valid second letters (skips same letter: AA, BB, CC, etc.)
  getValidSecondLetters(first: string): string[] {
    return this.speffzLetters.filter(second => second !== first);
  }

  // All 552 valid cube pairs
  getAllValidPairs(): string[] {
    const pairs: string[] = [];
    for (const first of this.speffzLetters) {
      for (const second of this.speffzLetters) {
        if (first !== second) {
          pairs.push(first + second);
        }
      }
    }
    return pairs;
  }

  getPairIndexInfo(): { current: number; total: number } {
    if (!this.activePair) return { current: 0, total: 552 };
    const all = this.getAllValidPairs();
    const idx = all.indexOf(this.activePair);
    return { current: idx >= 0 ? idx + 1 : 0, total: all.length };
  }

  prevPair() {
    if (!this.activePair) return;
    const all = this.getAllValidPairs();
    let idx = all.indexOf(this.activePair);
    if (idx === -1) idx = 0;
    const prevIdx = (idx - 1 + all.length) % all.length;
    this.selectPair(all[prevIdx], false);
  }

  nextPair() {
    if (!this.activePair) return;
    const all = this.getAllValidPairs();
    let idx = all.indexOf(this.activePair);
    if (idx === -1) idx = 0;
    const nextIdx = (idx + 1) % all.length;
    this.selectPair(all[nextIdx], false);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardNav(event: KeyboardEvent) {
    if (!this.activePair) return;
    const target = event.target as HTMLElement;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
      return;
    }
    if (event.key === 'ArrowLeft') {
      this.prevPair();
      event.preventDefault();
    } else if (event.key === 'ArrowRight') {
      this.nextPair();
      event.preventDefault();
    }
  }

  saveState() {
    localStorage.setItem('word-dict-search-state', JSON.stringify({
      searchPair: this.searchPair,
      selectedLetter: this.selectedLetter,
      activePair: this.activePair
    }));
  }

  onSearch() {
    this.searchError = '';
    const raw = this.searchPair.trim();
    if (!raw) {
      this.activePair = null;
      this.saveState();
      return;
    }

    // Convert input from either Hindi (e.g. 'खफ') or English (e.g. 'FR') to Speffz
    const converted = this.dictionary.language.toSpeffzPair(raw);

    if (converted.length === 2 && /^[A-X]{2}$/.test(converted)) {
      const first = converted[0];
      const second = converted[1];
      if (first === second) {
        const displayPair = this.dictionary.language.toDisplayPair(converted);
        this.searchError = `${displayPair} is an impossible cube pair (a sticker cannot pair with itself).`;
        this.activePair = null;
        return;
      }
      this.selectedLetter = first;
      this.selectPair(converted, false);
    } else if (converted.length === 1 && /^[A-X]$/.test(converted)) {
      this.selectedLetter = converted;
      this.activePair = null;
    } else {
      this.activePair = null;
    }
    this.saveState();
  }

  focusCustomInput() {
    if (this.activePair) {
      setTimeout(() => {
        const input = document.querySelector('.custom-section input') as HTMLInputElement;
        if (input) input.focus();
      }, 50);
    }
  }

  selectLetter(letter: string) {
    if (this.selectedLetter === letter && !this.activePair) {
      this.selectedLetter = null;
      this.activePair = null;
      this.searchPair = '';
    } else {
      this.selectedLetter = letter;
      this.activePair = null;
      this.searchPair = this.dictionary.language.toDisplayLetter(letter);
    }
    this.searchError = '';
    this.saveState();
  }

  selectPair(pair: string, shouldScroll: boolean = false) {
    this.activePair = pair;
    this.searchPair = this.dictionary.language.toDisplayPair(pair);
    this.selectedLetter = pair[0];
    this.customInput = this.dictionary.getCustomWord(pair);
    this.searchError = '';
    this.saveState();
    if (shouldScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  closeEditor() {
    this.activePair = null;
    this.searchPair = '';
    this.searchError = '';
    this.saveState();
  }

  saveCustomWord() {
    if (this.activePair) {
      this.dictionary.setCustomWord(this.activePair, this.customInput);
    }
  }
  
  clearCustomWord() {
    if (this.activePair) {
      this.dictionary.setCustomWord(this.activePair, '');
      this.customInput = '';
    }
  }

  useSuggestion(word: string) {
    if (!this.activePair) return;
    this.customInput = word;
    this.saveCustomWord();
  }

  isPriorityWord(word: string): boolean {
    if (!this.activePair) return false;
    const currentPriority = this.dictionary.getWord(this.activePair);
    return currentPriority.trim().toLowerCase() === word.trim().toLowerCase();
  }
}

