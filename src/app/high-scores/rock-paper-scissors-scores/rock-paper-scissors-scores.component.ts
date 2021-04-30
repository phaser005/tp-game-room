import { Component, OnInit } from '@angular/core';
import { RockPaperScissorsHighScore } from '../../clases/high-score'
import { HighScoreService } from '../../services/high-score.service'

@Component({
  selector: 'app-rock-paper-scissors-scores',
  templateUrl: './rock-paper-scissors-scores.component.html',
  styleUrls: ['./rock-paper-scissors-scores.component.css']
})
export class RockPaperScissorsScoresComponent implements OnInit {

  highscores: RockPaperScissorsHighScore[] = [];

  constructor(private highScoreService: HighScoreService) { }

  ngOnInit(): void {
    this.highScoreService.loadRockPaperScissorsScores().valueChanges().subscribe(response =>{
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
