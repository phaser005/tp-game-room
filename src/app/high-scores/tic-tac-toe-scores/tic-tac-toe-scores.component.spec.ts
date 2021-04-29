import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToeScoresComponent } from './tic-tac-toe-scores.component';

describe('TicTacToeScoresComponent', () => {
  let component: TicTacToeScoresComponent;
  let fixture: ComponentFixture<TicTacToeScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicTacToeScoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacToeScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
