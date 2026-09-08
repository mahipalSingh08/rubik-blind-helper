import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodReferenceComponent } from './method-reference.component';

describe('MethodReferenceComponent', () => {
  let component: MethodReferenceComponent;
  let fixture: ComponentFixture<MethodReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MethodReferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MethodReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
