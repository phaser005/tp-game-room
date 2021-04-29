import { Component, OnInit } from '@angular/core';
import { MemoryTestApiService } from '../../services/memory-test-api.service'
import { Card } from '../../clases/card'

@Component({
  selector: 'app-memory-test',
  templateUrl: './memory-test.component.html',
  styleUrls: ['./memory-test.component.css']
})
export class MemoryTestComponent implements OnInit {

  public cards!:Card;

  public deckCards:string[] = [];
  
  constructor(public memoApi:MemoryTestApiService) {
    this.deckCards = [];
  }

  ngOnInit(): void {
    this.loadCards();
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
      //console.log(this.deckCards);
    });
  }

}
