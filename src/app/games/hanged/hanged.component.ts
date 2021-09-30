import { Component, OnInit } from '@angular/core';
import { HangmanScore } from '../../clases/high-score'
import { HighScoreService } from '../../services/high-score.service'


@Component({
  selector: 'app-hanged',
  templateUrl: './hanged.component.html',
  styleUrls: ['./hanged.component.css']
})
export class HangedComponent implements OnInit {

  objects!:string[];
  countries!:string[];
  animals!:string[];

  letters:string[] = ["q","w","e","r","t","y","u","i","o","p",
                      "a","s","d","f","g","h","j","k","l","ñ",
                          "z","x","c","v","b","n","m"];

  category:boolean = false;
  selectedCategory!:string;

  errorCount!:number;

  currentWordLetters!:number;
  currentWord!:string;
  correctWord!:string;
  displayCorrectWord:string = "";

  currentCategory:string = "Categoria: ";

  public winModalOpen : boolean = false;
  public loseModalOpen : boolean = false;

  public highScore:HangmanScore
  wordsGuessedRight:number = 0;
  wordsGuessedWrong:number = 0;
  timesPlayed:number = 0;
  winRatio:number = 0;
  loseRatio:number = 0;

  constructor(private highScoreService:HighScoreService) {
    this.highScore = new HangmanScore();
    this.objects = ["computadora", "automovil", "cuchillo", "lapiz", "lapicera", "teclado", "silla", "botella", "teatro", "plaza"];
    this.countries = ["japon", "argentina", "canada", "españa", "rusia", "nueva zelanda", "francia", "italia", "afghanistan", "madagascar"];
    this.animals = ["perro", "gato", "cocodrilo", "tiburon", "ballena", "jirafa", "rata", "carpincho", "aguila", "pulpo"]
    this.currentWord = "";
    this.correctWord = "";
    this.errorCount = 0;
  }

  ngOnInit(): void {
    this.disableAllLetters();
  }

  gameStart(category:string){
    this.enableAllLetters();
    this.currentCategory = category;
    this.timesPlayed = this.timesPlayed +1;
    if(category === "objects"){
      this.correctWord = this.objects[this.chooseWord()];
      this.assignLines(this.correctWord);
      this.disableCategories();
    }else if(category === "animals"){
      this.correctWord = this.animals[this.chooseWord()];
      this.assignLines(this.correctWord);
      this.disableCategories();
    }else if(category === "countries"){
      this.correctWord = this.countries[this.chooseWord()];
      this.assignLines(this.correctWord);
      this.disableCategories();
    }

    this.displayCorrectWord = this.correctWord;
  }

  chooseWord():number{
    var result:number;
    result = Math.floor(Math.random() * (9 - 0 + 1) + 0);
    return result;
  }

  raiseErrorCount(){
    if(this.errorCount === 0 || this.errorCount < 6){
      this.errorCount = this.errorCount + 1;
    }else{
      this.errorCount = 0;
    }
  }

  countWordLetters(word:string){
    var result;
    result = word.length;
  }

  assignLines(word:string){
    this.currentWord = "";
    for (let index = 0; index < word.length; index++) {
      this.currentWord = this.currentWord.concat("_");
      
    }
  }

  disableAllLetters(){
    for (let index = 0; index < this.letters.length; index++) {
      (<HTMLInputElement> document.getElementById(this.letters[index])).disabled = true;
    }
  }

  disableOne(letter:string){
    (<HTMLInputElement> document.getElementById(letter)).disabled = true;
  }

  enableAllLetters(){
    for (let index = 0; index < this.letters.length; index++) {
      (<HTMLInputElement> document.getElementById(this.letters[index])).disabled = false;
    }
  }

  disableCategories(){
    (<HTMLInputElement> document.getElementById("categoryObject")).disabled = true;
    (<HTMLInputElement> document.getElementById("categoryCountries")).disabled = true;
    (<HTMLInputElement> document.getElementById("categoryAnimals")).disabled = true;
    (<HTMLInputElement> document.getElementById("resetScore")).disabled = true;
  }

  enableCategories(){
    (<HTMLInputElement> document.getElementById("categoryObject")).disabled = false;
    (<HTMLInputElement> document.getElementById("categoryCountries")).disabled = false;
    (<HTMLInputElement> document.getElementById("categoryAnimals")).disabled = false;
    (<HTMLInputElement> document.getElementById("resetScore")).disabled = false;
  }

  selectedLetter(letter:string){
    var contains:boolean;
    contains = this.searchLetterInWord(letter);
    if(contains){
      this.disableOne(letter);
      this.replaceLetter(letter);
    }else{
      this.disableOne(letter);
      this.raiseErrorCount();
    }

    this.checkGameOver();
  }

  searchLetterInWord(letter:string):boolean{
    var correctWord = this.correctWord;
    if (correctWord.search(letter) === -1){
      return false;
    }else{
      return true;
    }
  }

  replaceLetter(letter:string){
    var correct;
    var current;
    correct = this.correctWord.split("");
    current = this.currentWord.split("");

    for (let index = 0; index < correct.length; index++) {
      if(correct[index] === letter){
        current[index] = letter;
      }
    }

    this.currentWord = "";

    for (let index = 0; index < correct.length; index++) {
      if(current[index] != "_"){
        this.currentWord = this.currentWord.concat(current[index])
      }else if(current[index] === "_"){
        this.currentWord = this.currentWord.concat(current[index])
      }
    }
  }

  checkGameOver(){
    var result;
    if (this.currentWord.search("_") === -1){
      result = false;
    }else{
      result = true;
    }

    if(this.errorCount === 6){
      //console.log("Game Over - Too many errors");
      this.wordsGuessedWrong = this.wordsGuessedWrong +1;
      this.loseModal(true);
      this.reset();
    }else if(this.errorCount >= 0 && this.errorCount<6){
      if(result){
        //console.log("Word not completed");
      }else{
        console.log("Word completed");
        this.wordsGuessedRight = this.wordsGuessedRight +1;
        this.winModal(true);
        this.reset();
      }
    }

    this.calculateRatios();
    this.enableCategories();
  }

  reset(){
    this.currentWord = "";
    this.correctWord = "";
    this.errorCount = 0;
    this.disableAllLetters();
  }

  resetScore(){
    this.wordsGuessedRight = 0;
    this.wordsGuessedWrong= 0;
    this.timesPlayed = 0;
    this.loseRatio = 0;
    this.winRatio = 0;
  }

  public winModal(open : boolean) : void {
    this.winModalOpen = open;
  }
  public loseModal(open : boolean) : void {
    this.loseModalOpen = open;
  }

  calculateRatios(){
    this.winRatio = this.round(((this.wordsGuessedRight / this.timesPlayed) * 100), 2);
    this.loseRatio = this.round(((this.wordsGuessedWrong / this.timesPlayed) * 100), 2);
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

  saveScore(){
    this.highScore.wordsGuessedRight = this.wordsGuessedRight;
    this.highScore.wordsGuessedWrong = this.wordsGuessedWrong;
    this.highScore.timesPlayed = this.timesPlayed;
    this.highScore.winRatio = this.winRatio;
    this.highScore.loseRatio = this.loseRatio;
    this.highScore.date = (new Date()).toString();
    this.highScoreService.saveHangmanScore(this.highScore);
    alert("SCORE SAVED");
  }

}
