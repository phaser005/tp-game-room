import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-game',
  templateUrl: './my-game.component.html',
  styleUrls: ['./my-game.component.css']
})
export class MyGameComponent implements OnInit {

  
  public tiles:string[];
  public moves:number = 0;
  
  constructor() {
    this.tiles = [];
   }

  ngOnInit(): void {
    this.getTiles();
  }

  getTiles(){
    for (let index = 0; index < 9; index++) {
      this.tiles[index] = (<HTMLElement> document.getElementById("tile"+(index+1))).innerText
    }
  }

  
  play(tileNumber:number){

    this.changeTile(tileNumber);

    if(this.checkTiles()){
      alert("You have turned all tiles to O in "+this.moves+" movements. congratulations!")
    }

  }

  checkTiles():boolean{
    var allOk=true;
    var tileValue = "";

    for (let index = 0; index < 9; index++) {
      tileValue = (<HTMLElement> document.getElementById("tile"+(index+1))).innerText
      if(tileValue === "X"){
        allOk = false;
      }
    }

    return allOk;
  }

  shuffle(){
    this.moves = 0;
    for (let index = 0; index < 9; index++) {
      if(this.getRandomInt() === 0){
        (<HTMLElement> document.getElementById("tile"+(index+1))).innerHTML = "O";
      }else{
        (<HTMLElement> document.getElementById("tile"+(index+1))).innerHTML = "X";
      }
    }

  }

  getRandomInt() {
    return Math.floor(Math.random() * (2 - 0) + 0);
  }

  switchTileValue(tileNumber:number){
    var tileValue = (<HTMLElement> document.getElementById("tile"+(tileNumber))).innerHTML;
    var newTileValue = "O";

    if(tileValue === "O"){
      newTileValue = "X";
    }

    (<HTMLElement> document.getElementById("tile"+(tileNumber))).innerHTML = newTileValue;
  }
  

  changeTile(tileNumber:number){

    this.moves++;

    switch (tileNumber) {
      case 1:
        this.switchTileValue(tileNumber);
        this.switchTileValue(2);
        this.switchTileValue(4);
        break;
      case 2:
        this.switchTileValue(tileNumber);
        this.switchTileValue(1);
        this.switchTileValue(3);
        this.switchTileValue(5);
          break;
      case 3:
        this.switchTileValue(tileNumber);
        this.switchTileValue(2);
        this.switchTileValue(6);        
        break;
      case 4:
        this.switchTileValue(tileNumber);
        this.switchTileValue(1);
        this.switchTileValue(5);
        this.switchTileValue(7);
        break;
      case 5:
        this.switchTileValue(tileNumber);
        this.switchTileValue(2);
        this.switchTileValue(4);
        this.switchTileValue(6);
        this.switchTileValue(8);
        break;
      case 6:
        this.switchTileValue(tileNumber);
        this.switchTileValue(3);
        this.switchTileValue(5);
        this.switchTileValue(9);
        break;
      case 7:
        this.switchTileValue(tileNumber);
        this.switchTileValue(4);
        this.switchTileValue(8);
        break;
      case 8:
        this.switchTileValue(tileNumber);
        this.switchTileValue(5);
        this.switchTileValue(7);
        this.switchTileValue(9);
        break;
      case 9:
        this.switchTileValue(tileNumber);
        this.switchTileValue(8);
        this.switchTileValue(6);
        break;
    }
  }

  level(lvNumber:number){
    switch (lvNumber) {
      case 1:
        for (let index = 0; index < 9; index++) {
            (<HTMLElement> document.getElementById("tile"+(index+1))).innerHTML = "O";
          }
          (<HTMLElement> document.getElementById("tile"+(1))).innerHTML = "X";
        
        break;
      case 2:
        for (let index = 0; index < 9; index++) {
          (<HTMLElement> document.getElementById("tile"+(index+1))).innerHTML = "O";
        }
        (<HTMLElement> document.getElementById("tile"+(1))).innerHTML = "X";
        (<HTMLElement> document.getElementById("tile"+(9))).innerHTML = "X";
        break;
      case 3:
        for (let index = 0; index < 9; index++) {
          (<HTMLElement> document.getElementById("tile"+(index+1))).innerHTML = "O";
        }
        (<HTMLElement> document.getElementById("tile"+(1))).innerHTML = "X";
        (<HTMLElement> document.getElementById("tile"+(3))).innerHTML = "X";
        (<HTMLElement> document.getElementById("tile"+(5))).innerHTML = "X";
        (<HTMLElement> document.getElementById("tile"+(7))).innerHTML = "X";
        (<HTMLElement> document.getElementById("tile"+(9))).innerHTML = "X";
        break;
    
      default:
        break;
    }
  }


}
