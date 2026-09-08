import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-word-association',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word-association.component.html',
  styleUrls: ['./word-association.component.css']
})
export class WordAssociationComponent implements AfterViewInit {
  @ViewChild('searchBox') searchBox!: ElementRef<HTMLInputElement>;
  @ViewChild('pairContainer') pairContainer!: ElementRef<HTMLDivElement>;
  
  visibleCount = 576;
  totalCount = 576;
  
  ngAfterViewInit() {
    this.totalCount = this.pairContainer.nativeElement.querySelectorAll('.prow').length;
    this.visibleCount = this.totalCount;
  }

  onSearch(event: Event) {
    const q = (event.target as HTMLInputElement).value.trim().toLowerCase();
    let visible = 0;
    const rows = this.pairContainer.nativeElement.querySelectorAll('.prow');
    rows.forEach((row: Element) => {
      const pair = row.getAttribute('data-pair');
      if (q === '' || (pair && pair.includes(q))) { 
        row.classList.remove('hidden'); 
        visible++; 
      } else { 
        row.classList.add('hidden'); 
      }
    });
    this.visibleCount = visible;
  }
}
