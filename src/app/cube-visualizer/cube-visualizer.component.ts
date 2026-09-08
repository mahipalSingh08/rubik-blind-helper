import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cube-visualizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cube-visualizer.component.html',
  styleUrls: ['./cube-visualizer.component.css']
})
export class CubeVisualizerComponent {
  // Letters A-X for the 6 faces.
  // Standard Speffz order: U, L, F, R, B, D
  // U = A B C D (Top, Right, Bottom, Left edges/corners)
  
  faces = [
    { name: 'U', class: 'face-u', letters: ['A','B','C','D'], color: '#ffffff' },
    { name: 'L', class: 'face-l', letters: ['E','F','G','H'], color: '#ff9800' },
    { name: 'F', class: 'face-f', letters: ['I','J','K','L'], color: '#4caf50' },
    { name: 'R', class: 'face-r', letters: ['M','N','O','P'], color: '#f44336' },
    { name: 'B', class: 'face-b', letters: ['Q','R','S','T'], color: '#2196f3' },
    { name: 'D', class: 'face-d', letters: ['U','V','W','X'], color: '#ffeb3b' }
  ];
}
