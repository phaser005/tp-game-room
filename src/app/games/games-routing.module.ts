import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoryTestComponent } from './memory-test/memory-test.component';
import { RockPaperScissorsComponent } from './rock-paper-scissors/rock-paper-scissors.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { MyGameComponent } from './my-game/my-game.component';
import { HangedComponent } from './hanged/hanged.component';
import { HigherLowerComponent } from './higher-lower/higher-lower.component';
import { TriviaComponent } from './trivia/trivia.component';

const routes: Routes = [
  {path: "tic-tac-toe", component: TicTacToeComponent},
  {path: "rock-paper-scissors", component: RockPaperScissorsComponent},
  {path: "memory-test", component: MemoryTestComponent},
  {path: "my-game", component: MyGameComponent},
  {path: "hangman", component: HangedComponent},
  {path: "higher-lower", component: HigherLowerComponent},
  {path: "trivia", component: TriviaComponent},
  { path: '', redirectTo:'home',  pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
