import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MemoService } from './memo.service';
import { DictionaryService } from '../shared/dictionary.service';
import { CommutatorService } from '../shared/commutator.service';

@Component({
  selector: 'app-memo-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './memo-generator.component.html',
  styleUrls: ['./memo-generator.component.css']
})
export class MemoGeneratorComponent implements OnInit {
  showWords = true;
  showCommutators = false;

  constructor(
    public memoService: MemoService, 
    public dictionary: DictionaryService,
    public commutator: CommutatorService
  ) {}

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
    return this.dictionary.getWord(pair);
  }

  toggleWords() {
    this.showWords = !this.showWords;
  }
  
  toggleCommutators() {
    this.showCommutators = !this.showCommutators;
  }
}
