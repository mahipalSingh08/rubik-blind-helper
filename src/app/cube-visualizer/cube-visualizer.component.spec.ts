import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeVisualizerComponent } from './cube-visualizer.component';

describe('CubeVisualizerComponent', () => {
  let component: CubeVisualizerComponent;
  let fixture: ComponentFixture<CubeVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CubeVisualizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubeVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
