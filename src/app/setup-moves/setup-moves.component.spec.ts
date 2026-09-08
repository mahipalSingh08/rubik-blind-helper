import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupMovesComponent } from './setup-moves.component';

describe('SetupMovesComponent', () => {
  let component: SetupMovesComponent;
  let fixture: ComponentFixture<SetupMovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupMovesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
