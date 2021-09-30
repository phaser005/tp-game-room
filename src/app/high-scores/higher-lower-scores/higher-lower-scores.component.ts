import { Component, OnInit } from '@angular/core';
import { HigherLowerScore } from '../../clases/high-score'
import { HighScoreService } from '../../services/high-score.service'

@Component({
  selector: 'app-higher-lower-scores',
  templateUrl: './higher-lower-scores.component.html',
  styleUrls: ['./higher-lower-scores.component.css']
})
export class HigherLowerScoresComponent implements OnInit {

  highscores: HigherLowerScore[] = [];

  constructor(private highScoreService: HighScoreService) { }

  ngOnInit(): void {
    this.highScoreService.loadHigherLowerScores().valueChanges().subscribe(response =>{
      this.highscores = response.sort(function(a,b){
        if(a.score > b.score){
          return -1
        }
        if(a.score < b.score){
          return 1
        }
        return 0
      })
    })
  }

}
