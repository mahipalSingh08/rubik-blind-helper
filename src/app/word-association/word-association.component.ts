import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DictionaryService } from '../shared/dictionary.service';

@Component({
  selector: 'app-word-association',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './word-association.component.html',
  styleUrls: ['./word-association.component.css']
})
export class WordAssociationComponent implements OnInit {
  letters = 'ABCDEFGHIJKLMNOPQRSTUVWX'.split('');
  selectedLetter: string | null = null;
  activePair: string | null = null;
  searchPair: string = '';
  
  customInput: string = '';

  constructor(public dictionary: DictionaryService) {}

  ngOnInit() {
    const saved = localStorage.getItem('word-dict-search-state');
    if (saved) {
      try {
        const state = JSON.parse(saved);
        if (state.searchPair && state.searchPair.length === 2) {
          this.searchPair = state.searchPair;
          this.onSearch();
        } else if (state.selectedLetter) {
          this.selectedLetter = state.selectedLetter;
          this.searchPair = state.selectedLetter;
        }
      } catch (e) {}
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
    this.searchPair = this.searchPair.toUpperCase().replace(/[^A-X]/g, '');
    if (this.searchPair.length === 2) {
      const first = this.searchPair[0];
      this.selectedLetter = first;
      this.selectPair(this.searchPair, false);
    } else if (this.searchPair.length === 1) {
      this.selectedLetter = this.searchPair;
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
      this.searchPair = letter;
    }
    this.saveState();
  }

  selectPair(pair: string, shouldScroll: boolean = false) {
    this.activePair = pair;
    this.searchPair = pair;
    this.selectedLetter = pair[0];
    this.customInput = this.dictionary.getCustomWord(pair);
    this.saveState();
    if (shouldScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  closeEditor() {
    this.activePair = null;
    this.searchPair = '';
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
    this.customInput = word;
    this.saveCustomWord();
  }
}
