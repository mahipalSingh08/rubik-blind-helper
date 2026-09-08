import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiBlindComponent } from './multi-blind.component';

describe('MultiBlindComponent', () => {
  let component: MultiBlindComponent;
  let fixture: ComponentFixture<MultiBlindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiBlindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiBlindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
