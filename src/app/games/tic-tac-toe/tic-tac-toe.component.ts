import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TicTacToeHighScore } from '../../clases/high-score'
import { HighScoreService } from '../../services/high-score.service'

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

    @Input() gamePath: string = "/chat"
    public highScore: TicTacToeHighScore;
    userWonMatches: number = 0;
    pcWonMatches: number = 0;
    drawMatches: number = 0;
    timesPlayed: number = 0;

    winRatio: number = 0;
    loseRatio: number = 0;
    drawRatio: number = 0;

    table: string[] = ["","","","","","","","","",];
    
    playerNumber:string = "1";
    player:string = "X";
    winner:string = "none";

    constructor(private highScoreService: HighScoreService) {
        this.highScore = new TicTacToeHighScore();
    }

  ngOnInit(): void {
  }

  play(cell:string){
      (<HTMLElement>document.getElementById(cell)).innerHTML = this.player;
      this.readValues();
      this.checkWinner(this.playerNumber);
      if(this.checkDraw()){
        alert("It's a Draw!")
        this.drawMatches ++
        this.finish()
      }
      if(this.winner === "none"){
        this.changePlayer();
      }else if(this.winner === "Player 1" || this.winner === "Player 2"){
          this.finish()
      }
      
  }

  finish(){
    this.timesPlayed++;
    this.assignScore();
    this.reset();
  }

  checkWinner(playerNumber:string){
    if(
            (this.table[0] === this.table[1] && this.table[1] === this.table[2]) 
            && ( 
                    (this.table[0] === "X" && this.table[1] === "X" && this.table[2] === "X") || 
                    (this.table[0] === "O" && this.table[1] === "O" && this.table[2] === "O")
                )
        ){
            if(playerNumber === "1"){
                alert("Player " +playerNumber + " wins!")
                this.winner = "Player " + playerNumber;
            }else{
                alert("Player " +playerNumber + " wins!")
                this.winner = "Player " + playerNumber;
            }
    }else if(
        (this.table[3] === this.table[4] && this.table[4] === this.table[5]) 
        && ( 
                (this.table[3] === "X" && this.table[4] === "X" && this.table[5] === "X") || 
                (this.table[3] === "O" && this.table[4] === "O" && this.table[5] === "O")
            )
        ){
            if(playerNumber === "1"){
                alert("Player " +playerNumber + " wins!")
                this.winner = "Player " + playerNumber;
            }else{
                alert("Player " +playerNumber + " wins!")
                this.winner = "Player " + playerNumber;
            }
    }else if(
        (this.table[6] === this.table[7] && this.table[7] === this.table[8]) 
        && ( 
                (this.table[6] === "X" && this.table[7] === "X" && this.table[8] === "X") || 
                (this.table[6] === "O" && this.table[7] === "O" && this.table[8] === "O")
            )
        ){
            if(playerNumber === "1"){
                alert("Player " +playerNumber + " wins!")
                this.winner = "Player " + playerNumber;
            }else{
                alert("Player " +playerNumber + " wins!")
                this.winner = "Player " + playerNumber;
            }
    }else if(
        (this.table[0] === this.table[3] && this.table[3] === this.table[6]) 
        && ( 
                (this.table[0] === "X" && this.table[3] === "X" && this.table[6] === "X") || 
                (this.table[0] === "O" && this.table[3] === "O" && this.table[6] === "O")
            )
        ){
            if(playerNumber === "1"){
                alert("Player " +playerNumber + " wins!")
                this.winner = "Player " + playerNumber;
            }else{
                alert("Player " +playerNumber + " wins!")
                this.winner = "Player " + playerNumber;
            }
    }else if(
        (this.table[1] === this.table[4] && this.table[4] === this.table[7]) 
        && ( 
                (this.table[1] === "X" && this.table[4] === "X" && this.table[7] === "X") || 
                (this.table[1] === "O" && this.table[4] === "O" && this.table[7] === "O")
            )
        ){
            if(playerNumber === "1"){
                alert("Player " +playerNumber + " wins!")
                this.winner = "Player " + playerNumber;
            }else{
                alert("Player " +playerNumber + " wins!")
                this.winner = "Player " + playerNumber;
            }
    }else if(
        (this.table[2] === this.table[5] && this.table[5] === this.table[8]) 
        && ( 
                (this.table[2] === "X" && this.table[5] === "X" && this.table[8] === "X") || 
                (this.table[2] === "O" && this.table[5] === "O" && this.table[8] === "O")
            )
        ){
            if(playerNumber === "1"){
                alert("Player " +playerNumber + " wins!")
                this.winner = "Player " + playerNumber;
            }else{
                alert("Player " +playerNumber + " wins!")
                this.winner = "Player " + playerNumber;
            }
    }else if(
        (this.table[0] === this.table[4] && this.table[4] === this.table[8]) 
        && ( 
                (this.table[0] === "X" && this.table[4] === "X" && this.table[8] === "X") || 
                (this.table[0] === "O" && this.table[4] === "O" && this.table[8] === "O")
            )
        ){
            if(playerNumber === "1"){
                alert("Player " +playerNumber + " wins!")
                this.winner = "Player " + playerNumber;
            }else{
                alert("Player " +playerNumber + " wins!")
                this.winner = "Player " + playerNumber;
            }
    }else if(
        (this.table[2] === this.table[4] && this.table[4] === this.table[6]) 
        && ( 
                (this.table[2] === "X" && this.table[4] === "X" && this.table[6] === "X") || 
                (this.table[2] === "O" && this.table[4] === "O" && this.table[6] === "O")
            )
        ){
            if(playerNumber === "1"){
                alert("Player " +playerNumber + " wins!")
                this.winner = "Player " + playerNumber;
            }else{
                alert("Player " +playerNumber + " wins!")
                this.winner = "Player " + playerNumber;
            }
    }
  }

  readValues(){
      for (let index = 0; index < 9; index++) {
          this.table[index] = (<HTMLElement>document.getElementById((index+1).toString())).innerHTML;
      }
      console.log(this.table);
  }

  assignScore(){
      if(this.winner === "Player 1"){
          this.userWonMatches ++
      }else if(this.winner === "Player 2"){
          this.pcWonMatches ++;
      }else if(this.winner === "Draw"){
          this.drawMatches ++
      }
      this.calculateRatios();
  }

  checkDraw():boolean{
    var draw = false;
    if( this.table[0] != "" && 
        this.table[1] != "" &&
        this.table[2] != "" && 
        this.table[3] != "" && 
        this.table[4] != "" && 
        this.table[5] != "" && 
        this.table[6] != "" && 
        this.table[7] != "" && 
        this.table[8] != ""){
        draw = true;
    }
    return draw;
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

  reset(){
    for (let index = 0; index < 9; index++) {
        (<HTMLElement>document.getElementById((index+1).toString())).innerHTML = "";
        this.table[index] = ""
    }
    this.player = "X";
    this.playerNumber = "1";
    this.winner = "none";
  }

  changePlayer(){
      if(this.player === "X")
      {
          this.player = "O"
          this.playerNumber = "2"
      }else if(this.player === "O"){
          this.player = "X"
          this.playerNumber = "1"
      }
  }

  saveHighScore(){
    this.highScore.timesPlayed = this.timesPlayed;
    this.highScore.winRatio = this.winRatio;
    this.highScore.drawRatio = this.drawRatio;
    this.highScore.loseRatio = this.loseRatio;
    this.highScore.date = (new Date()).toString();

    this.highScoreService.saveTicTacToeScore(this.highScore);
    
  }

}

