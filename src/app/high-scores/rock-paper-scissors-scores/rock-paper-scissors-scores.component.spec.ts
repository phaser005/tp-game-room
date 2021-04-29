import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockPaperScissorsScoresComponent } from './rock-paper-scissors-scores.component';

describe('RockPaperScissorsScoresComponent', () => {
  let component: RockPaperScissorsScoresComponent;
  let fixture: ComponentFixture<RockPaperScissorsScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockPaperScissorsScoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RockPaperScissorsScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
