import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoryTestComponent } from './memory-test/memory-test.component';
import { RockPaperScissorsComponent } from './rock-paper-scissors/rock-paper-scissors.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { MyGameComponent } from './my-game/my-game.component';

const routes: Routes = [
  {path: "tic-tac-toe", component: TicTacToeComponent},
  {path: "rock-paper-scissors", component: RockPaperScissorsComponent},
  {path: "memory-test", component: MemoryTestComponent},
  {path: "my-game", component: MyGameComponent},
  { path: '', redirectTo:'home',  pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
