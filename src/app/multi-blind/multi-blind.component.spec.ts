import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiBlindComponent } from './multi-blind.component';

describe('MultiBlindComponent', () => {
  let component: MultiBlindComponent;
  let fixture: ComponentFixture<MultiBlindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiBlindComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MultiBlindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate 20-move scrambles for each cube', () => {
    component.cubeCount = 3;
    component.generate();
    expect(component.cubes.length).toBe(3);
    for (const cube of component.cubes) {
      const moves = cube.scramble.trim().split(/\s+/);
      expect(moves.length).toBe(20);
      expect(cube.scrambleLines.length).toBe(3);
      expect(cube.faces['U'].length).toBe(9);
      expect(cube.faces['F'].length).toBe(9);
    }
  });

  it('should hide solutions by default whenever new scrambles are generated', () => {
    component.showSolutions = true;
    component.generate();
    expect(component.showSolutions).toBeFalse();
  });

  it('should toggle solutions visibility', () => {
    component.showSolutions = false;
    component.toggleSolutions();
    expect(component.showSolutions).toBeTrue();
    component.toggleSolutions();
    expect(component.showSolutions).toBeFalse();
  });

  it('should support up to 100 cubes clamped', () => {
    component.cubeCount = 100;
    component.generate();
    expect(component.cubes.length).toBe(100);

    // If over 100, clamped to 100
    component.cubeCount = 150;
    component.generate();
    expect(component.cubeCount).toBe(100);
    expect(component.cubes.length).toBe(100);
  });
});
