import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemoryTestApiService {

  //COUNTRIES - https://restcountries.eu/rest/v2/all
  constructor(private httpClient: HttpClient) {

  }

  public getFiveCards(){
    return this.httpClient.get("https://deckofcardsapi.com/api/deck/new/draw/?count=8");
  }
  
}
