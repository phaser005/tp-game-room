import { Component, OnInit } from '@angular/core';
import { HigherLowerScore } from '../../clases/high-score'
import { HighScoreService } from '../../services/high-score.service'

@Component({
  selector: 'app-higher-lower',
  templateUrl: './higher-lower.component.html',
  styleUrls: ['./higher-lower.component.css']
})
export class HigherLowerComponent implements OnInit {

  cardValues:number[] = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,
    1,2,3,4,5,6,7,8,9,10,11,12,13,
    1,2,3,4,5,6,7,8,9,10,11,12,13,
    1,2,3,4,5,6,7,8,9,10,11,12,13]

  cards:string[] = [];

  defaultCard:string ="../../../assets/Cards/default.png";
  index:number = 0;
  lose:boolean = false;
  score:number = 0;
  public highScore:HigherLowerScore

  constructor(private highScoreService:HighScoreService) {
    this.highScore = new HigherLowerScore();
    this.start()
  }

  ngOnInit(): void {
  }

  shuffle(array:any[]) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  check(option:string){
    var result:number = -1;

    if(!this.lose){
      switch (option) {
        case "+":
          result = this.checkHigher();
          break;
        case "-":
          result = this.checkLower();
          break;
        case "=":
          result = this.checkEqual();
          break;
      }

      if(result === 1){
        this.index = this.index + 1;
        (<HTMLImageElement> document.getElementById("leftCard")).src = this.cards[this.index];
        (<HTMLImageElement> document.getElementById("rightCard")).src = this.defaultCard;
        this.score = this.score +1;
      }else if( result === 0){
        alert("Game Over!");
        (<HTMLInputElement> document.getElementById("+")).disabled = true;
        (<HTMLInputElement> document.getElementById("=")).disabled = true;
        (<HTMLInputElement> document.getElementById("-")).disabled = true;
        this.saveScore();
      }

    }

  }

  checkHigher():any{
    if(this.index < 51){
      (<HTMLImageElement> document.getElementById("rightCard")).src = this.cards[this.index +1];
      if(this.cardValues[this.index + 1] > this.cardValues[this.index]){
        alert("Was higher!");
        return 1
      }else if(this.cardValues[this.index + 1] < this.cardValues[this.index]){
        alert("Was not higher!");
        return 0
      }else if(this.cardValues[this.index + 1] = this.cardValues[this.index]){
        alert("Was not higher, was equal!");
        return 0
      }
    }
  }

  checkLower():any{
    if(this.index < 51){
      (<HTMLImageElement> document.getElementById("rightCard")).src = this.cards[this.index +1];
      if(this.cardValues[this.index + 1] > this.cardValues[this.index]){
        alert("Was not lower!");
        return 0
      }else if(this.cardValues[this.index + 1] < this.cardValues[this.index]){
        alert("Was lower!");
        return 1
      }else if(this.cardValues[this.index + 1] = this.cardValues[this.index]){
        alert("Was not lower, was equal!");
        return 0
      }
    }
  }

  checkEqual():any{
    if(this.index < 51){
      (<HTMLImageElement> document.getElementById("rightCard")).src = this.cards[this.index +1];
      if(this.cardValues[this.index + 1] > this.cardValues[this.index]){
        alert("Was not equal, but higher!");
        return 0
      }else if(this.cardValues[this.index + 1] < this.cardValues[this.index]){
        alert("Was not equal, but lower!");
        return 0
      }else if(this.cardValues[this.index + 1] = this.cardValues[this.index]){
        alert("Was equal!");
        return 1
      }
    }
  }

  start(){
    this.cardValues = this.shuffle(this.cardValues);
    this.cards = [
      "../../../assets/Cards/"+this.cardValues[0]+"p.png",
      "../../../assets/Cards/"+this.cardValues[1]+"p.png",
      "../../../assets/Cards/"+this.cardValues[2]+"p.png",
      "../../../assets/Cards/"+this.cardValues[3]+"p.png",
      "../../../assets/Cards/"+this.cardValues[4]+"p.png",
      "../../../assets/Cards/"+this.cardValues[5]+"p.png",
      "../../../assets/Cards/"+this.cardValues[6]+"p.png",
      "../../../assets/Cards/"+this.cardValues[7]+"p.png",
      "../../../assets/Cards/"+this.cardValues[8]+"p.png",
      "../../../assets/Cards/"+this.cardValues[9]+"p.png",
      "../../../assets/Cards/"+this.cardValues[10]+"p.png",
      "../../../assets/Cards/"+this.cardValues[11]+"p.png",
      "../../../assets/Cards/"+this.cardValues[12]+"p.png",
  
      "../../../assets/Cards/"+this.cardValues[13]+"c.png",
      "../../../assets/Cards/"+this.cardValues[14]+"c.png",
      "../../../assets/Cards/"+this.cardValues[15]+"c.png",
      "../../../assets/Cards/"+this.cardValues[16]+"c.png",
      "../../../assets/Cards/"+this.cardValues[17]+"c.png",
      "../../../assets/Cards/"+this.cardValues[18]+"c.png",
      "../../../assets/Cards/"+this.cardValues[19]+"c.png",
      "../../../assets/Cards/"+this.cardValues[20]+"c.png",
      "../../../assets/Cards/"+this.cardValues[21]+"c.png",
      "../../../assets/Cards/"+this.cardValues[22]+"c.png",
      "../../../assets/Cards/"+this.cardValues[23]+"c.png",
      "../../../assets/Cards/"+this.cardValues[24]+"c.png",
      "../../../assets/Cards/"+this.cardValues[25]+"c.png",
  
      "../../../assets/Cards/"+this.cardValues[26]+"d.png",
      "../../../assets/Cards/"+this.cardValues[27]+"d.png",
      "../../../assets/Cards/"+this.cardValues[28]+"d.png",
      "../../../assets/Cards/"+this.cardValues[29]+"d.png",
      "../../../assets/Cards/"+this.cardValues[30]+"d.png",
      "../../../assets/Cards/"+this.cardValues[31]+"d.png",
      "../../../assets/Cards/"+this.cardValues[32]+"d.png",
      "../../../assets/Cards/"+this.cardValues[33]+"d.png",
      "../../../assets/Cards/"+this.cardValues[34]+"d.png",
      "../../../assets/Cards/"+this.cardValues[35]+"d.png",
      "../../../assets/Cards/"+this.cardValues[36]+"d.png",
      "../../../assets/Cards/"+this.cardValues[37]+"d.png",
      "../../../assets/Cards/"+this.cardValues[38]+"d.png",
  
      "../../../assets/Cards/"+this.cardValues[39]+"t.png",
      "../../../assets/Cards/"+this.cardValues[40]+"t.png",
      "../../../assets/Cards/"+this.cardValues[41]+"t.png",
      "../../../assets/Cards/"+this.cardValues[42]+"t.png",
      "../../../assets/Cards/"+this.cardValues[43]+"t.png",
      "../../../assets/Cards/"+this.cardValues[44]+"t.png",
      "../../../assets/Cards/"+this.cardValues[45]+"t.png",
      "../../../assets/Cards/"+this.cardValues[46]+"t.png",
      "../../../assets/Cards/"+this.cardValues[47]+"t.png",
      "../../../assets/Cards/"+this.cardValues[48]+"t.png",
      "../../../assets/Cards/"+this.cardValues[49]+"t.png",
      "../../../assets/Cards/"+this.cardValues[50]+"t.png",
      "../../../assets/Cards/"+this.cardValues[51]+"t.png",
    ];
    console.log(this.cardValues);
  }

  reset(){
    this.start();
    (<HTMLImageElement> document.getElementById("rightCard")).src = this.defaultCard;

    this.score = 0;
    this.index = 0;
    console.log(this.cards);
    (<HTMLInputElement> document.getElementById("+")).disabled = false;
    (<HTMLInputElement> document.getElementById("=")).disabled = false;
    (<HTMLInputElement> document.getElementById("-")).disabled = false;

  }

  saveScore(){
    this.highScore.score = this.score;
    this.highScore.date = (new Date()).toString();
    this.highScoreService.saveHigherLowerScore(this.highScore);
    alert("SCORE SAVED");
  }

}
