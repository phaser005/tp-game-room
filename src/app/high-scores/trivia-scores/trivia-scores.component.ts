import { Component, OnInit } from '@angular/core';
import { HighScoreService } from '../../services/high-score.service'
import { TriviaScore } from '../../clases/high-score'

@Component({
  selector: 'app-trivia-scores',
  templateUrl: './trivia-scores.component.html',
  styleUrls: ['./trivia-scores.component.css']
})
export class TriviaScoresComponent implements OnInit {

  highscores: TriviaScore[] = [];

  constructor(private highScoreService: HighScoreService) { }

  ngOnInit(): void {
    this.highScoreService.loadTriviaScores().valueChanges().subscribe(response =>{
      this.highscores = response.sort(function(a,b){
        if(a.correct > b.correct){
          return -1
        }
        if(a.correct < b.correct){
          return 1
        }
        return 0
      })
    })
  }

}
