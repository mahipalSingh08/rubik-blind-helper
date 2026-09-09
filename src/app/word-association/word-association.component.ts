import { Component } from '@angular/core';
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
export class WordAssociationComponent {
  letters = 'ABCDEFGHIJKLMNOPQRSTUVWX'.split('');
  selectedLetter: string | null = null;
  activePair: string | null = null;
  
  customInput: string = '';

  constructor(public dictionary: DictionaryService) {}

  selectLetter(letter: string) {
    if (this.selectedLetter === letter) {
      this.selectedLetter = null;
      this.activePair = null;
    } else {
      this.selectedLetter = letter;
      this.activePair = null;
    }
  }

  selectPair(pair: string) {
    this.activePair = pair;
    this.customInput = this.dictionary.getCustomWord(pair);
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
