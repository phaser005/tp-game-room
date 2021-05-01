import { Component, OnInit } from '@angular/core';
import { MemoTestHighScore } from '../../clases/high-score'
import { HighScoreService } from '../../services/high-score.service'


@Component({
  selector: 'app-memo-test-scores',
  templateUrl: './memo-test-scores.component.html',
  styleUrls: ['./memo-test-scores.component.css']
})
export class MemoTestScoresComponent implements OnInit {

  highscores: MemoTestHighScore[] = [];

  constructor(private highScoreService: HighScoreService) { }

  ngOnInit(): void {
    this.highScoreService.loadMemoTestScores().valueChanges().subscribe(response =>{
      this.highscores = response.sort(function(a,b){
        if(a.moves > b.moves){
          return -1
        }
        if(a.moves < b.moves){
          return 1
        }
        return 0
      })
    })
  }

}
