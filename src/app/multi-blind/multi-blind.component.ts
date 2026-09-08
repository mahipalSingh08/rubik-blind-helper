import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MemoService } from '../memo-generator/memo.service';

@Component({
  selector: 'app-multi-blind',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './multi-blind.component.html',
  styleUrls: ['./multi-blind.component.css']
})
export class MultiBlindComponent implements OnInit {

  constructor(public memoService: MemoService) {}

  ngOnInit() {
    if (!this.memoService.hasGeneratedMulti) {
      this.memoService.generateMulti();
    }
  }

  generate() {
    this.memoService.generateMulti();
  }
}
