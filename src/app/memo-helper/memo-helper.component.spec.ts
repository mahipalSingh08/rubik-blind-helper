import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoHelperComponent } from './memo-helper.component';

describe('MemoHelperComponent', () => {
  let component: MemoHelperComponent;
  let fixture: ComponentFixture<MemoHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoHelperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
