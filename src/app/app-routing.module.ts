import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
////CUSTOM COMPONENTS IMPORTS////
import { HomeComponent } from './pages/home/home.component';
import { WhoAmIComponent } from './pages/who-am-i/who-am-i.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { LogOutComponent } from './components/log-out/log-out.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: "home", component: HomeComponent},
  {path: "who-am-i", component: WhoAmIComponent},
  {path: "survey", component: SurveyComponent},
  {path: "log-out", component: LogOutComponent},
  {path: 'entry', loadChildren:() => import ('./entry/entry.module').then(m => m.EntryModule)},
  {path: 'games', loadChildren: () => import('./games/games.module').then(m => m.GamesModule)},
  { path: 'highScores', loadChildren: () => import('./high-scores/high-scores.module').then(m => m.HighScoresModule) },
  {path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
