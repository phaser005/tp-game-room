import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherLowerScoresComponent } from './higher-lower-scores.component';

describe('HigherLowerScoresComponent', () => {
  let component: HigherLowerScoresComponent;
  let fixture: ComponentFixture<HigherLowerScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HigherLowerScoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherLowerScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
