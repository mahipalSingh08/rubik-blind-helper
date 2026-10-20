import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmsComponent } from './algorithms.component';

describe('AlgorithmsComponent', () => {
  let component: AlgorithmsComponent;
  let fixture: ComponentFixture<AlgorithmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgorithmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgorithmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate through corner pairs in alphabetical order', () => {
    component.changePieceType('corners');
    component.selectPair('AB');
    expect(component.searchPair).toBe('AB');
    expect(component.nextPairName).toBe('AD');
    
    component.goToNextPair();
    expect(component.searchPair).toBe('AD');
    
    component.selectPair('AX');
    expect(component.nextPairName).toBe('BA');
    component.goToNextPair();
    expect(component.searchPair).toBe('BA');
    expect(component.nextPairName).toBe('BD');
  });

  it('should navigate backwards through pairs', () => {
    component.changePieceType('corners');
    component.selectPair('BA');
    expect(component.prevPairName).toBe('AX');
    component.goToPrevPair();
    expect(component.searchPair).toBe('AX');
  });

  it('should navigate through edge pairs in alphabetical order', () => {
    component.changePieceType('edges');
    component.selectPair('AB');
    expect(component.searchPair).toBe('AB');
    expect(component.nextPairName).toBe('AD');
    
    component.goToNextPair();
    expect(component.searchPair).toBe('AD');
    
    component.selectPair('AX');
    expect(component.nextPairName).toBe('BA');
    component.goToNextPair();
    expect(component.searchPair).toBe('BA');
    expect(component.nextPairName).toBe('BD');
  });
});
