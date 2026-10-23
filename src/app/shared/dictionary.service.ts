import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WIKI_DICTIONARY } from './wiki-dictionary';
import { HINDI_WORDS_DICTIONARY, HindiPairWord } from './hindi-words-dictionary';

export type DictionaryMode = 'hindi' | 'english';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private customWords: Record<string, string> = {};
  private mode: DictionaryMode = 'hindi';
  private modeSubject = new BehaviorSubject<DictionaryMode>('hindi');
  public mode$: Observable<DictionaryMode> = this.modeSubject.asObservable();

  constructor() {
    this.loadCustomWords();
    this.loadMode();
  }

  private loadMode() {
    const saved = localStorage.getItem('bld_dictionary_mode') as DictionaryMode;
    if (saved === 'english' || saved === 'hindi') {
      this.mode = saved;
    } else {
      this.mode = 'hindi'; // Default to Hindi on hinglish-test branch
    }
    this.modeSubject.next(this.mode);
  }

  public getMode(): DictionaryMode {
    return this.mode;
  }

  public isHindiMode(): boolean {
    return this.mode === 'hindi';
  }

  public setMode(mode: DictionaryMode) {
    this.mode = mode;
    localStorage.setItem('bld_dictionary_mode', mode);
    this.modeSubject.next(this.mode);
  }

  public toggleMode() {
    this.setMode(this.mode === 'hindi' ? 'english' : 'hindi');
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

  // Get Hindi dictionary entry (word, devanagari, meaning)
  getHindiEntry(pair: string): HindiPairWord | undefined {
    return HINDI_WORDS_DICTIONARY[pair.toUpperCase()];
  }

  // Get all suggestions for this pair
  getSuggestions(pair: string): string[] {
    pair = pair.toUpperCase();
    const wiki = WIKI_DICTIONARY[pair] || [];
    if (this.mode === 'hindi') {
      const hindi = HINDI_WORDS_DICTIONARY[pair];
      if (hindi && !wiki.includes(hindi.word)) {
        return [hindi.word, ...wiki];
      }
    }
    return [...wiki];
  }

  // Get the single priority word for this pair (custom word if set, otherwise mode-specific default)
  getWord(pair: string): string {
    pair = pair.toUpperCase();
    const custom = this.customWords[pair];
    if (custom && custom.trim() !== '') {
      return custom.trim();
    }
    if (this.mode === 'hindi') {
      const hindi = HINDI_WORDS_DICTIONARY[pair];
      if (hindi && hindi.word) {
        return hindi.word;
      }
    }
    const wiki = WIKI_DICTIONARY[pair];
    if (wiki && wiki.length > 0) {
      return wiki[0];
    }
    return '';
  }

  // Get full display format (e.g. "morpankh (मोरपंख)" in Hindi mode if available)
  getDisplayWord(pair: string): string {
    pair = pair.toUpperCase();
    const word = this.getWord(pair);
    if (!word) return '';
    if (this.mode === 'hindi') {
      const hindi = HINDI_WORDS_DICTIONARY[pair];
      if (hindi && (!this.hasCustomWord(pair) || this.customWords[pair].toLowerCase() === hindi.word.toLowerCase())) {
        return `${hindi.word} (${hindi.devanagari})`;
      }
    }
    return word;
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

