import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-memo-helper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memo-helper.component.html',
  styleUrls: ['./memo-helper.component.css']
})
export class MemoHelperComponent implements OnInit {
  flashcardFlipped = false;
  currentLetter = 'A';
  currentPosition = '';
  mode: 'corners' | 'edges' = 'corners';
  
  private letters = 'ABCDEFGHIJKLMNOPQRSTUVWX'.split('');
  
  private cornerPositions = [
    'UBL', 'UBR', 'UFR', 'UFL',
    'LUB', 'LUF', 'LDF', 'LDB',
    'FUL', 'FUR', 'FDR', 'FDL',
    'RUF', 'RUB', 'RDB', 'RDF',
    'BUR', 'BUL', 'BDL', 'BDR',
    'DFL', 'DFR', 'DBR', 'DBL'
  ];

  private edgePositions = [
    'UB', 'UR', 'UF', 'UL',
    'LU', 'LF', 'LD', 'LB',
    'FU', 'FR', 'FD', 'FL',
    'RU', 'RB', 'RD', 'RF',
    'BU', 'BL', 'BD', 'BR',
    'DF', 'DR', 'DB', 'DL'
  ];

  ngOnInit() {
    this.nextCard();
  }

  setMode(newMode: 'corners' | 'edges') {
    this.mode = newMode;
    this.nextCard();
  }

  nextCard() {
    this.flashcardFlipped = false;
    const idx = Math.floor(Math.random() * this.letters.length);
    this.currentLetter = this.letters[idx];
    this.currentPosition = this.mode === 'corners' ? this.cornerPositions[idx] : this.edgePositions[idx];
  }

  flipCard() {
    this.flashcardFlipped = !this.flashcardFlipped;
  }
}
