import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighScoresComponent } from './high-scores.component';

const routes: Routes = [{ path: '', component: HighScoresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighScoresRoutingModule { }
