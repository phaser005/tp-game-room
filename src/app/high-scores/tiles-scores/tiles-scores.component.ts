import { Component, OnInit } from '@angular/core';
import { TilesHighScore } from '../../clases/high-score'
import { HighScoreService } from '../../services/high-score.service'

@Component({
  selector: 'app-tiles-scores',
  templateUrl: './tiles-scores.component.html',
  styleUrls: ['./tiles-scores.component.css']
})
export class TilesScoresComponent implements OnInit {

  highscores: TilesHighScore[] = [];

  constructor(private highScoreService: HighScoreService) {
   }

  ngOnInit(): void {
    this.highScoreService.loadTilesScores().valueChanges().subscribe(response =>{
      this.highscores = response.sort(function(a,b){
        if(a.lv1Moves < b.lv1Moves){
          return -1
        }
        if(a.lv1Moves > b.lv1Moves){
          return 1
        }
        return 0
      })
    })
  }



}
