import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cube-visualizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cube-visualizer.component.html',
  styleUrls: ['./cube-visualizer.component.css']
})
export class CubeVisualizerComponent {
  is3D: boolean = false;
  
  isDragging: boolean = false;
  previousMousePosition: { x: number, y: number } = { x: 0, y: 0 };
  rotateX: number = -30;
  rotateY: number = -45;

  onMouseDown(event: MouseEvent | TouchEvent) {
    if (!this.is3D) return;
    this.isDragging = true;
    if (event instanceof MouseEvent) {
      this.previousMousePosition = { x: event.clientX, y: event.clientY };
    } else {
      this.previousMousePosition = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }
  }

  @HostListener('window:mousemove', ['$event'])
  @HostListener('window:touchmove', ['$event'])
  onMouseMove(event: MouseEvent | TouchEvent) {
    if (!this.isDragging || !this.is3D) return;
    event.preventDefault(); // Prevent scrolling while dragging cube
    
    let currentX, currentY;
    if (event instanceof MouseEvent) {
      currentX = event.clientX; 
      currentY = event.clientY;
    } else {
      currentX = event.touches[0].clientX; 
      currentY = event.touches[0].clientY;
    }
    
    const deltaX = currentX - this.previousMousePosition.x;
    const deltaY = currentY - this.previousMousePosition.y;
    
    this.rotateY += deltaX * 0.5;
    this.rotateX -= deltaY * 0.5;
    
    this.previousMousePosition = { x: currentX, y: currentY };
  }

  @HostListener('window:mouseup')
  @HostListener('window:touchend')
  onMouseUp() {
    this.isDragging = false;
  }
}
