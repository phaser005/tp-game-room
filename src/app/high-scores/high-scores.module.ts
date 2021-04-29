import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighScoresRoutingModule } from './high-scores-routing.module';
import { HighScoresComponent } from './high-scores.component';
import { TicTacToeScoresComponent } from './tic-tac-toe-scores/tic-tac-toe-scores.component';
import { RockPaperScissorsScoresComponent } from './rock-paper-scissors-scores/rock-paper-scissors-scores.component';
import { MemoTestScoresComponent } from './memo-test-scores/memo-test-scores.component';
import { TilesScoresComponent } from './tiles-scores/tiles-scores.component';


@NgModule({
  declarations: [HighScoresComponent, TicTacToeScoresComponent, RockPaperScissorsScoresComponent, MemoTestScoresComponent, TilesScoresComponent],
  imports: [
    CommonModule,
    HighScoresRoutingModule
  ]
})
export class HighScoresModule { }
