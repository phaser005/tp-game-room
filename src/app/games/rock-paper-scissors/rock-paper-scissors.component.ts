import { Component, OnInit, Input } from '@angular/core';
import { RockPaperScissorsHighScore } from '../../clases/high-score'
import { HighScoreService } from '../../services/high-score.service'

@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html',
  styleUrls: ['./rock-paper-scissors.component.css']
})
export class RockPaperScissorsComponent implements OnInit {

  @Input() gamePath: string = "/chat"

  userWonMatches: number = 0;
  pcWonMatches: number = 0;
  drawMatches: number = 0;
  timesPlayed: number = 0;

  winRatio: number = 0;
  loseRatio: number = 0;
  drawRatio: number = 0;

  highScore: RockPaperScissorsHighScore;

  public winModalOpen : boolean = false;
  public loseModalOpen : boolean = false;
  public drawModalOpen : boolean = false;


  constructor(private highScoreService: HighScoreService) {
    this.highScore = new RockPaperScissorsHighScore();
  }

  ngOnInit(): void {
  }

  play(playerMovement:string){
    this.timesPlayed++;
    var pcMovement = this.pcMove();
    var winner = this.checkWinner(playerMovement, pcMovement);
    if(winner === 'Draw'){
      this.drawModal(true);
      this.drawMatches ++;
    }else if(winner === 'Player'){
      this.winModal(true);
      this.userWonMatches++
    }else if(winner === 'Computer'){
      this.loseModal(true);
      this.pcWonMatches++
    }
    this.calculateRatios();
  }

  pcMove():string{
    var movement:string = '';
    var choice = Math.random();

    if(choice >= 0 && choice <= 0.33){
      movement = 'Rock';
    }else if(choice > 0.33 && choice <= 0.667){
      movement = 'Paper'
    }else if(choice > 0.667 && choice <= 1){
      movement = 'Scissors'
    }
    return movement
  }

  checkWinner(player:string, computer:string){
    var winner = '';
    if (player === computer){
      return 'Draw';
    }

    if (player === 'Rock'){
        if(computer === 'Paper'){
          winner = 'Computer';
        } else {
          winner = 'Player';
        }
    }

    if(player === 'Paper'){
      if(computer === 'Scissors'){
        winner = 'Computer';
      }else{
        winner = 'Player';
      }
    }

    if(player === 'Scissors'){
      if(computer === 'Rock'){
        winner = 'Computer';
      }else{
        winner = 'Player';
      }
    }
    return winner
  }



  public winModal(open : boolean) : void {
    this.winModalOpen = open;
  }
  public loseModal(open : boolean) : void {
    this.loseModalOpen = open;
  }
  public drawModal(open : boolean) : void {
    this.drawModalOpen = open;
  }

  calculateRatios(){
    this.winRatio = this.round(((this.userWonMatches / this.timesPlayed) * 100), 2);
    this.loseRatio = this.round(((this.pcWonMatches / this.timesPlayed) * 100), 2);
    this.drawRatio = this.round(((this.drawMatches / this.timesPlayed) * 100), 2);
  }

  round(number: number, precision: number) {
    if (precision < 0) {
      let factor = Math.pow(10, precision);
      return Math.round(number * factor) / factor;
    }
    else
      return +(Math.round(Number(number + "e+" + precision)) +
        "e-" + precision);
  }

  saveScore(){

    this.highScore.timesPlayed = this.timesPlayed;
    this.highScore.winRatio = this.winRatio;
    this.highScore.drawRatio = this.drawRatio;
    this.highScore.loseRatio = this.loseRatio;

    this.highScoreService.saveRockPaperScissorsScore(this.highScore);
  }

}
