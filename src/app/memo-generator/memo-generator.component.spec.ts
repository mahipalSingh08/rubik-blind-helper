import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoGeneratorComponent } from './memo-generator.component';

describe('MemoGeneratorComponent', () => {
  let component: MemoGeneratorComponent;
  let fixture: ComponentFixture<MemoGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
