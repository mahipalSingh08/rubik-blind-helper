import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueCasesComponent } from './unique-cases.component';

describe('UniqueCasesComponent', () => {
  let component: UniqueCasesComponent;
  let fixture: ComponentFixture<UniqueCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniqueCasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniqueCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
