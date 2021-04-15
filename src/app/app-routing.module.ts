import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
////CUSTOM COMPONENTS IMPORTS////
import { HomeComponent } from './pages/home/home.component';
import { WhoAmIComponent } from './pages/who-am-i/who-am-i.component';
import { TicTacToeComponent } from './games/tic-tac-toe/tic-tac-toe.component'

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: "home", component: HomeComponent},
  {path: "who-am-i", component: WhoAmIComponent},
  {path: "games/tic-tac-toe", component: TicTacToeComponent},
  {path: 'entry', loadChildren:() => import ('./entry/entry.module').then(m => m.EntryModule)},
  {path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
