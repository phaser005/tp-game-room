import { Component, OnInit } from '@angular/core';
import { TicTacToeHighScore } from '../../clases/high-score'
import { HighScoreService } from '../../services/high-score.service'

@Component({
  selector: 'app-tic-tac-toe-scores',
  templateUrl: './tic-tac-toe-scores.component.html',
  styleUrls: ['./tic-tac-toe-scores.component.css']
})
export class TicTacToeScoresComponent implements OnInit {

  highscores: TicTacToeHighScore[] = [];

  constructor(private highScoreService: HighScoreService) { }

  ngOnInit(): void {
    this.highScoreService.loadTicTacToeScores().valueChanges().subscribe(response =>{
      this.highscores = response.sort(function(a,b){
        if(a.winRatio < b.winRatio && a.timesPlayed < b.timesPlayed){
          return -1
        }
        if(a.winRatio > b.winRatio && a.timesPlayed > b.timesPlayed){
          return 1
        }
        return 0
      })
    })
  }

}
