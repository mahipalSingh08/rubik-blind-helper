import { Injectable } from '@angular/core';
import { WIKI_DICTIONARY } from './wiki-dictionary';
import { WORD_DICTIONARY as OLD_DICTIONARY } from './word-dictionary';

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

  // Get all suggestions (Old dictionary word first, then wiki)
  getSuggestions(pair: string): string[] {
    pair = pair.toUpperCase();
    const suggestions: string[] = [];
    const lowerWords = new Set<string>();
    
    const addWord = (w: string) => {
      if (!w) return;
      const lower = w.toLowerCase().trim();
      if (!lowerWords.has(lower)) {
        suggestions.push(w);
        lowerWords.add(lower);
      }
    };
    
    addWord(OLD_DICTIONARY[pair]);
    
    const wiki = WIKI_DICTIONARY[pair] || [];
    for (const word of wiki) {
      addWord(word);
    }
    
    return suggestions;
  }

  // Get the display string for Memo / Practice tabs (returns multiple words)
  getWord(pair: string): string {
    pair = pair.toUpperCase();
    
    const words: string[] = [];
    const lowerWords = new Set<string>();
    
    const addWord = (w: string) => {
      if (!w) return false;
      const lower = w.toLowerCase().trim();
      if (!lowerWords.has(lower)) {
        words.push(w);
        lowerWords.add(lower);
        return true;
      }
      return false;
    };
    
    addWord(this.customWords[pair]);
    addWord(OLD_DICTIONARY[pair]);
    
    const wiki = WIKI_DICTIONARY[pair] || [];
    for (const word of wiki) {
      if (addWord(word)) {
        if (words.length >= 3) break; // limit to 3 options
      }
    }
    
    return words.length > 0 ? words.join(', ') : '???';
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
