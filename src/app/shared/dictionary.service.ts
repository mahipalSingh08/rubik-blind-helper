import { Injectable } from '@angular/core';
import { WIKI_DICTIONARY } from './wiki-dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private customWords: Record<string, string> = {};

  constructor() {
    this.loadCustomWords();
  }

  private loadCustomWords() {
    const saved = localStorage.getItem('customWords');
    if (saved) {
      try {
        this.customWords = JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse custom words from localStorage", e);
      }
    }
  }

  private saveCustomWords() {
    localStorage.setItem('customWords', JSON.stringify(this.customWords));
  }

  // Get all suggestions from wiki-dictionary
  getSuggestions(pair: string): string[] {
    pair = pair.toUpperCase();
    const wiki = WIKI_DICTIONARY[pair] || [];
    return [...wiki];
  }

  // Get the single priority word for this pair (custom word if set, otherwise 1st wiki word)
  getWord(pair: string): string {
    pair = pair.toUpperCase();
    const custom = this.customWords[pair];
    if (custom && custom.trim() !== '') {
      return custom.trim();
    }
    const wiki = WIKI_DICTIONARY[pair];
    if (wiki && wiki.length > 0) {
      return wiki[0];
    }
    return '';
  }

  getCustomWord(pair: string): string {
    return this.customWords[pair.toUpperCase()] || '';
  }

  setCustomWord(pair: string, word: string) {
    pair = pair.toUpperCase();
    if (word && word.trim() !== '') {
      this.customWords[pair] = word.trim();
    } else {
      delete this.customWords[pair];
    }
    this.saveCustomWords();
  }

  hasCustomWord(pair: string): boolean {
    return !!this.customWords[pair.toUpperCase()];
  }
}
