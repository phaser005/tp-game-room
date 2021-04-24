import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html',
  styleUrls: ['./rock-paper-scissors.component.css']
})
export class RockPaperScissorsComponent implements OnInit {

  @Input() gamePath: string = "/chat"

  userWonMatches!: number;
  pcWonMatches!: number;

  constructor() { }

  ngOnInit(): void {
  }

  play(playerMovement:string){
    var pcMovement = this.pcMove();
    var winner = this.checkWinner(playerMovement, pcMovement);
    alert(winner + " wins! //// You played: "+ playerMovement+" and the PC played: "+pcMovement);
    
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

}
