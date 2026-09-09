import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommutatorService } from '../shared/commutator.service';

@Component({
  selector: 'app-algorithms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './algorithms.component.html',
  styleUrl: './algorithms.component.css'
})
export class AlgorithmsComponent {
  searchPair: string = '';
  pieceType: 'edges' | 'corners' | 'special' = 'edges';
  currentAlgShort: string = '';
  currentAlgLong: string = '';
  isEditing: boolean = false;
  editAlgShort: string = '';
  editAlgLong: string = '';

  constructor(private commutatorService: CommutatorService) {}

  get isEdges() {
    return this.pieceType === 'edges';
  }

  get displayPairTitle() {
    if (this.pieceType === 'special') return this.searchPair.replace('_', ' ');
    return this.searchPair;
  }

  onSearch() {
    if (this.pieceType === 'special') {
      const alg = this.commutatorService.getSpecialAlg(this.searchPair);
      if (alg) {
        this.currentAlgShort = alg.short;
        this.currentAlgLong = alg.long;
      } else {
        this.currentAlgShort = '';
        this.currentAlgLong = '';
      }
      this.isEditing = false;
      return;
    }

    if (this.searchPair.length === 2) {
      const alg = this.isEdges
      ? this.commutatorService.getEdgeAlg(this.searchPair)
      : this.commutatorService.getCornerAlg(this.searchPair);
      
      if (alg) {
        this.currentAlgShort = alg.short;
        this.currentAlgLong = alg.long;
      } else {
        this.currentAlgShort = '';
        this.currentAlgLong = '';
      }
      this.isEditing = false;
    } else {
      this.currentAlgShort = '';
      this.currentAlgLong = '';
    }
  }

  selectSpecial(type: string) {
    this.pieceType = 'special';
    this.searchPair = type;
    this.onSearch();
  }

  startEdit() {
    this.isEditing = true;
    this.editAlgShort = this.currentAlgShort;
    this.editAlgLong = this.currentAlgLong;
  }

  saveEdit() {
    if (this.pieceType === 'special') {
      this.commutatorService.setSpecialAlg(this.searchPair, this.editAlgShort, this.editAlgLong);
    } else if (this.isEdges) {
      this.commutatorService.setEdgeAlg(this.searchPair, this.editAlgShort, this.editAlgLong);
    } else {
      this.commutatorService.setCornerAlg(this.searchPair, this.editAlgShort, this.editAlgLong);
    }
    this.currentAlgShort = this.editAlgShort;
    this.currentAlgLong = this.editAlgLong;
    this.isEditing = false;
  }

  cancelEdit() {
    this.isEditing = false;
  }
}
