import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { TilesHighScore, TicTacToeHighScore, MemoTestHighScore, RockPaperScissorsHighScore } from '../clases/high-score'
import { AuthService } from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class HighScoreService {

  //Tic Tac Toe
  ticTacToeRoute= "/ticTacToeHighScores";
  titTacToeCollectionReference: AngularFirestoreCollection<TicTacToeHighScore>;
  newTicTacToeScore: TicTacToeHighScore;

  //Rock Paper Scissors
  rockPaperScissorsRoute = "/rockPaperScissorsHighScores"
  rockPaperScissorsCollectionReference: AngularFirestoreCollection<RockPaperScissorsHighScore>;
  newRockpaperScissorsScore: RockPaperScissorsHighScore;

  //Memo Test
  memoTestRoute = "/memoTestHighScores"
  memoTestCollectionReference: AngularFirestoreCollection<MemoTestHighScore>;
  newMemoTestScore: MemoTestHighScore;

  //Tiles
  tilesRoute = "/tilesHighScore"
  tilesCollectionReference: AngularFirestoreCollection<TilesHighScore>;
  newTilesScore: TilesHighScore;

  constructor(private db:AngularFirestore, 
              private auth:AuthService) {
  
    this.titTacToeCollectionReference = db.collection(this.ticTacToeRoute);
    this.newTicTacToeScore = new TicTacToeHighScore();

    this.rockPaperScissorsCollectionReference = db.collection(this.rockPaperScissorsRoute);
    this.newRockpaperScissorsScore = new RockPaperScissorsHighScore();

    this.memoTestCollectionReference = db.collection(this.memoTestRoute);
    this.newMemoTestScore = new MemoTestHighScore();

    this.tilesCollectionReference = db.collection(this.tilesRoute);
    this.newTilesScore = new TilesHighScore();

  }

  //TIC TAC TOE FUNCTIONS
  saveTicTacToeScore(score:TicTacToeHighScore){
    return this.titTacToeCollectionReference.add({...score})
  }

  loadTicTacToeScores(){

  }

  //ROCK PAPER SCISSORS FUNCTIONS
  saveRockPaperScissorsScore(score:RockPaperScissorsHighScore){
    this.auth.GetCurrentUserName(this.auth.GetUserId()).then((res:any)=>{
      score.userName = res;
      score.userId = this.auth.GetUserId();
      return this.rockPaperScissorsCollectionReference.add({...score})
    })
  }

  loadRockPaperScissorsScores():AngularFirestoreCollection<RockPaperScissorsHighScore>{
    return this.rockPaperScissorsCollectionReference
  }

  //MEMO TEST FUNCTIONS
  saveMemoTestScore(score:MemoTestHighScore){
    return this.memoTestCollectionReference.add({...score})
  }

  loadMemoTestScores():AngularFirestoreCollection<MemoTestHighScore>{
    return this.memoTestCollectionReference
  }

  //TILES FUNCTIONS
  saveTilesScore(score:TilesHighScore){
    this.auth.GetCurrentUserName(this.auth.GetUserId()).then((res:any)=>{
      score.userName = res;
      score.userId = this.auth.GetUserId();
      return this.tilesCollectionReference.add({...score})
    })

  }

  loadTilesScores():AngularFirestoreCollection<TilesHighScore>{
    return this.tilesCollectionReference
  }

}
