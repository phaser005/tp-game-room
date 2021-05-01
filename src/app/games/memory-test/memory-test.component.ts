import { Component, OnInit } from '@angular/core';
import { MemoryTestApiService } from '../../services/memory-test-api.service'
import { Card } from '../../clases/card'
import { MemoTestHighScore } from '../../clases/high-score'
import { HighScoreService } from '../../services/high-score.service'

@Component({
  selector: 'app-memory-test',
  templateUrl: './memory-test.component.html',
  styleUrls: ['./memory-test.component.css']
})
export class MemoryTestComponent implements OnInit {

  //SERVICE VARIABLES
  public highScore:MemoTestHighScore

  //DECK CONSTRUCTION VARIABLES
  cards!:Card;
  deckCards:string[] = [];

  //GAME VARIABLES
  flippedCards:boolean[] = [false, false, false, false, false, false, false, false,
    false, false , false, false, false, false, false, false]

  selectedCardsPosition:number[] = [-1,-1]

  selectedCardsValue:string[] = ["",""]

  allOk:boolean = false;

  moves:number = 0;
  

  constructor(public memoApi:MemoryTestApiService,
              private highScoreService:HighScoreService) {
    this.deckCards = [];
    this.highScore = new MemoTestHighScore();
  }

  ngOnInit(): void {
    this.loadCards();
    (<HTMLInputElement> document.getElementById("save")).disabled = true;
  }

  loadCards(){
    this.memoApi.getFiveCards().subscribe(cards => {
      this.cards = <Card>cards;
      this.deckCards[0] = this.cards.cards[0].image
      this.deckCards[1] = this.cards.cards[0].image
      this.deckCards[2] = this.cards.cards[1].image
      this.deckCards[3] = this.cards.cards[1].image
      this.deckCards[4] = this.cards.cards[2].image
      this.deckCards[5] = this.cards.cards[2].image
      this.deckCards[6] = this.cards.cards[3].image
      this.deckCards[7] = this.cards.cards[3].image
      this.deckCards[8] = this.cards.cards[4].image
      this.deckCards[9] = this.cards.cards[4].image
      this.deckCards[10] = this.cards.cards[5].image
      this.deckCards[11] = this.cards.cards[5].image
      this.deckCards[12] = this.cards.cards[6].image
      this.deckCards[13] = this.cards.cards[6].image
      this.deckCards[14] = this.cards.cards[7].image
      this.deckCards[15] = this.cards.cards[7].image
      this.shuffle(this.deckCards);
      //console.log(this.deckCards);
    });
  }

  shuffle(array:string[]) {
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

  flipCard(position:number){
    
    if(!this.flippedCards[position]){
      this.flippedCards[position] = true;
    }else{
      this.flippedCards[position] = false;
    }

    this.asignCardsToCheck(position)
    if(this.selectedCardsPosition[0] != -1 && this.selectedCardsPosition[1] != -1)
    {
      var areTheSame = this.checkPair();

      setTimeout(() => {
        if(areTheSame === "areTheSame"){
          this.lock(this.selectedCardsPosition[0])
          this.lock(this.selectedCardsPosition[1])
        }
      }, 750);
      
      setTimeout(() => {
        if(areTheSame === "areNotTheSame"){
        this.afterCheckFlip();
        }
      }, 750);

      setTimeout(() => {
        this.clearCheckings();
      }, 750);
      
      this.moves++;
      if(this.checkIfCompleted()){
        alert("ALL DONE! and in "+this.moves+" movements!");
        (<HTMLInputElement> document.getElementById("save")).disabled = false;
      }

    }

  }

  asignCardsToCheck(position:number){
    if(this.selectedCardsValue[0] === "" && this.selectedCardsValue[1] === ""){

      this.selectedCardsValue[0] = this.checkCardValue(position);
      this.selectedCardsPosition[0] = position;

    }else if(this.selectedCardsValue[0] != "" && this.selectedCardsValue[1] === ""){

      this.selectedCardsValue[1] = this.checkCardValue(position);
      this.selectedCardsPosition[1] = position;
    }  
    else if(this.selectedCardsValue[0] === "" && this.selectedCardsValue[1] != ""){

      this.selectedCardsValue[0] = this.checkCardValue(position);
      this.selectedCardsPosition[0] = position;
    }
  }

  checkIfCompleted():boolean{
    var result = false;
    for (let index = 0; index < 16; index++) {
      if(this.flippedCards[index]){
        result = true
      }else{
        result = false
      }
    }
    return result;
  }

  clearCheckings(){
    this.selectedCardsValue[0] = ""
    this.selectedCardsValue[1] = ""
    this.selectedCardsPosition[0] = -1
    this.selectedCardsPosition[1] = -1
  }

  checkPair():string{
    if(this.selectedCardsValue[0] === this.selectedCardsValue[1]){
      console.log("ARE THE SAME")
      return "areTheSame"
    }else{
      console.log("AREN'T THE SAME")
      return "areNotTheSame"
    }
  }

  afterCheckFlip(){

    this.flippedCards[this.selectedCardsPosition[0]] = false;
    this.flippedCards[this.selectedCardsPosition[1]] = false;

  }

  checkCardValue(position:number):string{
    return (<HTMLImageElement> document.getElementById("card"+position)).alt
  }

  lock(position:number){
    (<HTMLInputElement> document.getElementById("button"+(position))).disabled = true;
  }
  
  unlock(position:number){
    (<HTMLInputElement> document.getElementById("button"+(position))).disabled = false;
  }

  lockAll(){
    for (let index = 0; index < 16; index++) {
      (<HTMLInputElement> document.getElementById("button"+(index))).disabled = true;
      
    }
  }

  check(){
    console.log("Date: "+(new Date()).toString());
    console.log(this.selectedCardsValue);
    console.log("Selected Cards Positions:" + this.selectedCardsPosition);
  }

  saveScore(){
    this.highScore.moves = this.moves;
    this.highScore.date = (new Date()).toString();
    this.highScoreService.saveMemoTestScore(this.highScore);
    alert("SCORE SAVED");
    (<HTMLInputElement> document.getElementById("save")).disabled = true;
  }

}
