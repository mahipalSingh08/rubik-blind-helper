import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeStyleGroupComponent } from './three-style-group.component';

describe('ThreeStyleGroupComponent', () => {
  let component: ThreeStyleGroupComponent;
  let fixture: ComponentFixture<ThreeStyleGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeStyleGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeStyleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
