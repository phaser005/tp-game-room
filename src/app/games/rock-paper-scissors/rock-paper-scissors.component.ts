import { Component, OnInit, Input } from '@angular/core';

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

  public winModalOpen : boolean = false;
  public loseModalOpen : boolean = false;
  public drawModalOpen : boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  play(playerMovement:string){
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

}
