import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoTestScoresComponent } from './memo-test-scores.component';

describe('MemoTestScoresComponent', () => {
  let component: MemoTestScoresComponent;
  let fixture: ComponentFixture<MemoTestScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoTestScoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoTestScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
