import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { 
  SPEFFZ_LETTERS, 
  HINDI_LETTERS, 
  SPEFFZ_TO_HINDI, 
  HINDI_TO_SPEFFZ, 
  HINDI_PAIRS_DATA 
} from './hindi-scheme';

export type AppLanguage = 'en' | 'hi';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY = 'bld-app-language';
  private langSubject: BehaviorSubject<AppLanguage>;
  public currentLang$: Observable<AppLanguage>;

  constructor() {
    const saved = localStorage.getItem(this.STORAGE_KEY) as AppLanguage;
    const initial: AppLanguage = (saved === 'hi' || saved === 'en') ? saved : 'en';
    this.langSubject = new BehaviorSubject<AppLanguage>(initial);
    this.currentLang$ = this.langSubject.asObservable();
  }

  get currentLang(): AppLanguage {
    return this.langSubject.value;
  }

  isHindi(): boolean {
    return this.langSubject.value === 'hi';
  }

  setLanguage(lang: AppLanguage): void {
    if (this.langSubject.value !== lang) {
      this.langSubject.next(lang);
      localStorage.setItem(this.STORAGE_KEY, lang);
    }
  }

  toggleLanguage(): void {
    const next = this.isHindi() ? 'en' : 'hi';
    this.setLanguage(next);
  }

  getLetters(): string[] {
    return this.isHindi() ? [...HINDI_LETTERS] : [...SPEFFZ_LETTERS];
  }

  toDisplayLetter(speffzLetter: string): string {
    if (!speffzLetter) return '';
    const upper = speffzLetter.toUpperCase();
    if (this.isHindi()) {
      return SPEFFZ_TO_HINDI[upper] || upper;
    }
    return upper;
  }

  toSpeffzLetter(letter: string): string {
    if (!letter) return '';
    if (HINDI_TO_SPEFFZ[letter]) {
      return HINDI_TO_SPEFFZ[letter];
    }
    return letter.toUpperCase();
  }

  toDisplayPair(speffzPair: string): string {
    if (!speffzPair) return '';
    if (this.isHindi()) {
      const chars = speffzPair.toUpperCase().split('');
      return chars.map(c => SPEFFZ_TO_HINDI[c] || c).join('');
    }
    return speffzPair.toUpperCase();
  }

  // Converts any input (either Hindi like 'खफ' or Speffz like 'FR') to Speffz pair 'FR'
  toSpeffzPair(inputPair: string): string {
    if (!inputPair) return '';
    const trimmed = inputPair.trim();
    // Check if input is Hindi
    const chars = Array.from(trimmed);
    if (chars.length === 2 && (HINDI_TO_SPEFFZ[chars[0]] || HINDI_TO_SPEFFZ[chars[1]])) {
      const first = HINDI_TO_SPEFFZ[chars[0]] || chars[0].toUpperCase();
      const second = HINDI_TO_SPEFFZ[chars[1]] || chars[1].toUpperCase();
      return first + second;
    }
    return trimmed.toUpperCase();
  }

  // Get native Hindi word info for a Speffz pair
  getHindiPairData(speffzPair: string): { word: string; meaning: string } | null {
    if (!speffzPair || speffzPair.length !== 2) return null;
    const hindiPair = this.toHindiPair(speffzPair);
    const data = HINDI_PAIRS_DATA[hindiPair];
    if (data) {
      return { word: data[0], meaning: data[1] };
    }
    return null;
  }

  toHindiPair(speffzPair: string): string {
    if (!speffzPair) return '';
    const chars = speffzPair.toUpperCase().split('');
    return chars.map(c => SPEFFZ_TO_HINDI[c] || c).join('');
  }
}
