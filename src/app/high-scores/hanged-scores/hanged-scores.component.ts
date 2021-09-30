import { Component, OnInit } from '@angular/core';
import { HangmanScore } from '../../clases/high-score'
import { HighScoreService } from '../../services/high-score.service'

@Component({
  selector: 'app-hanged-scores',
  templateUrl: './hanged-scores.component.html',
  styleUrls: ['./hanged-scores.component.css']
})
export class HangedScoresComponent implements OnInit {

  highscores: HangmanScore[] = [];

  constructor(private highScoreService: HighScoreService) { }

  ngOnInit(): void {
    this.highScoreService.loadHangmanScores().valueChanges().subscribe(response =>{
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
