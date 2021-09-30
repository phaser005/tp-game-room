import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { TilesHighScore, TicTacToeHighScore, MemoTestHighScore, RockPaperScissorsHighScore, HangmanScore, HigherLowerScore, TriviaScore } from '../clases/high-score'
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

  //Hangman
  hangmanRoute = "/hangmanHighScore"
  hangmanCollectionReference: AngularFirestoreCollection<HangmanScore>;
  newHangmanScore: HangmanScore;

  //HigherLower
  higherLowerRoute = "/higherLowerHighScore"
  higherLowerCollectionReference: AngularFirestoreCollection<HigherLowerScore>;
  newhigherLowerScore: HigherLowerScore;

  //Trivia
  triviaRoute = "/triviaHighScore"
  triviaCollectionReference: AngularFirestoreCollection<TriviaScore>;
  newTriviaScore: TriviaScore;

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

    //NEW GAMES 

    this.hangmanCollectionReference = db.collection(this.hangmanRoute);
    this.newHangmanScore = new HangmanScore();

    this.higherLowerCollectionReference = db.collection(this.higherLowerRoute);
    this.newhigherLowerScore = new HigherLowerScore();

    this.triviaCollectionReference = db.collection(this.triviaRoute);
    this.newTriviaScore = new TriviaScore();

  }

  //TIC TAC TOE FUNCTIONS
  saveTicTacToeScore(score:TicTacToeHighScore){
    this.auth.GetCurrentUserName(this.auth.GetUserId()).then((res:any)=>{
      score.userName = res;
      score.userId = this.auth.GetUserId();
      return this.titTacToeCollectionReference.add({...score})
    })
  }

  loadTicTacToeScores(){
    return this.titTacToeCollectionReference
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
    this.auth.GetCurrentUserName(this.auth.GetUserId()).then((res:any)=>{
      score.userName = res;
      score.userId = this.auth.GetUserId();
      return this.memoTestCollectionReference.add({...score})
    })
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

  //Hangman Functions
  saveHangmanScore(score:HangmanScore){
    this.auth.GetCurrentUserName(this.auth.GetUserId()).then((res:any)=>{
      score.userName = res;
      score.userId = this.auth.GetUserId();
      return this.hangmanCollectionReference.add({...score})
    })

  }

  loadHangmanScores():AngularFirestoreCollection<HangmanScore>{
    return this.hangmanCollectionReference
  }

  //HigherLower Functions
  saveHigherLowerScore(score:HigherLowerScore){
    this.auth.GetCurrentUserName(this.auth.GetUserId()).then((res:any)=>{
      score.userName = res;
      score.userId = this.auth.GetUserId();
      return this.higherLowerCollectionReference.add({...score})
    })

  }

  loadHigherLowerScores():AngularFirestoreCollection<HigherLowerScore>{
    return this.higherLowerCollectionReference;
  }

  //Trivia Functions
  saveTriviaScore(score:TriviaScore){
    this.auth.GetCurrentUserName(this.auth.GetUserId()).then((res:any)=>{
      score.userName = res;
      score.userId = this.auth.GetUserId();
      return this.triviaCollectionReference.add({...score})
    })

  }

  loadTriviaScores():AngularFirestoreCollection<TriviaScore>{
    return this.triviaCollectionReference;
  }
}
