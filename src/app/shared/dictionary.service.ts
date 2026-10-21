import { Injectable } from '@angular/core';
import { WIKI_DICTIONARY } from './wiki-dictionary';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private customWordsEn: Record<string, string> = {};
  private customWordsHi: Record<string, string> = {};

  constructor(public language: LanguageService) {
    this.loadCustomWords();
  }

  private loadCustomWords() {
    const savedEn = localStorage.getItem('customWords_en') || localStorage.getItem('customWords');
    if (savedEn) {
      try {
        this.customWordsEn = JSON.parse(savedEn);
      } catch (e) {}
    }
    const savedHi = localStorage.getItem('customWords_hi');
    if (savedHi) {
      try {
        this.customWordsHi = JSON.parse(savedHi);
      } catch (e) {}
    }
  }

  private saveCustomWords() {
    localStorage.setItem('customWords_en', JSON.stringify(this.customWordsEn));
    localStorage.setItem('customWords_hi', JSON.stringify(this.customWordsHi));
  }

  // Get all suggestions (Hindi dictionary or English wiki)
  getSuggestions(pair: string): string[] {
    pair = pair.toUpperCase();
    if (this.language.isHindi()) {
      const data = this.language.getHindiPairData(pair);
      return data ? [data.word] : [];
    }
    const wiki = WIKI_DICTIONARY[pair] || [];
    return [...wiki];
  }

  // Get meaning / description (especially helpful for Hindi word memory)
  getMeaning(pair: string): string {
    if (this.language.isHindi()) {
      const data = this.language.getHindiPairData(pair);
      return data ? data.meaning : '';
    }
    return '';
  }

  // Get the single priority word for this pair
  getWord(pair: string): string {
    pair = pair.toUpperCase();
    if (this.language.isHindi()) {
      const custom = this.customWordsHi[pair];
      if (custom && custom.trim() !== '') return custom.trim();
      const data = this.language.getHindiPairData(pair);
      return data ? data.word : '';
    } else {
      const custom = this.customWordsEn[pair];
      if (custom && custom.trim() !== '') return custom.trim();
      const wiki = WIKI_DICTIONARY[pair];
      return (wiki && wiki.length > 0) ? wiki[0] : '';
    }
  }

  getCustomWord(pair: string): string {
    pair = pair.toUpperCase();
    return this.language.isHindi() 
      ? (this.customWordsHi[pair] || '') 
      : (this.customWordsEn[pair] || '');
  }

  setCustomWord(pair: string, word: string) {
    pair = pair.toUpperCase();
    const targetMap = this.language.isHindi() ? this.customWordsHi : this.customWordsEn;
    if (word && word.trim() !== '') {
      targetMap[pair] = word.trim();
    } else {
      delete targetMap[pair];
    }
    this.saveCustomWords();
  }

  hasCustomWord(pair: string): boolean {
    pair = pair.toUpperCase();
    return this.language.isHindi() 
      ? !!this.customWordsHi[pair] 
      : !!this.customWordsEn[pair];
  }
}

