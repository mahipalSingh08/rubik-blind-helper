import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MemoService } from './memo.service';
import { WORD_DICTIONARY } from '../shared/word-dictionary';

@Component({
  selector: 'app-memo-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './memo-generator.component.html',
  styleUrls: ['./memo-generator.component.css']
})
export class MemoGeneratorComponent implements OnInit {
  showWords = true;

  constructor(public memoService: MemoService) {}

  ngOnInit() {
    if (!this.memoService.hasGenerated) {
      this.memoService.generate();
    }
  }

  generate() {
    this.showWords = true;
    this.memoService.generate();
  }

  getWord(pair: string): string {
    return WORD_DICTIONARY[pair.toUpperCase()] || '???';
  }

  toggleWords() {
    this.showWords = !this.showWords;
  }
}
