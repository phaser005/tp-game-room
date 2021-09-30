import { Component, OnInit } from '@angular/core';
import { MemoryTestApiService } from '../../services/memory-test-api.service'
import { TriviaScore } from '../../clases/high-score'
import { AnimeInfo } from '../../clases/card'
import { HighScoreService } from '../../services/high-score.service'


@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  questionImages:number[] = [
    4780470, 
    4587024, 
    3875308, 
    4532030, 
    4201241,
    3783647,
    4288494,
    3835696,
    3768352,
    3598873
  ];

  /*questionAnswers:string[] = [
    "sora_ginko", 
    "kaname_madoka", 
    "jahy", 
    "ayanami_rei", 
    "minase nagisa",
    "ikamusume",
    "shimura_akihiko",
    "onosaka_koharu",
    "yotsuya_miko",
    "nagatoro_hayase"
  ];*/

  randomAnswers:string[] = [
    "yakumo_yukari",
    "shameimaru_aya",
    "reisen_udongein_inaba",
    "komeiji_koishi",
    "hong_meiling",
    "saigyouji_yuyuko",
    "komeiji_satori",
    "inubashiri momiji",
    "yakumo_ran",
    "rumia",
    "kazami_yuuka",
    "moriya_suwako",
    "chen",
    "reiuji_utsuho",
    "kamishirasawa_keine",
    "hinanawi_tenshi",
    "kawashiro_nitori",
    "kaenbyou_rin",
    "houraisan_kaguya",
    "koakuma",
    "ibuki_suika",
    "inaba_tewi",
    "hijiri_byakuren",
    "mystia_lorelei",
    "yasaka_kanako",
    "yagokoro_eirin",
    "izumi_konata",
    "mizuhashi_parsee",
    "morichika_rinnosuke",
    "hoshiguma_yuugi",
    "kagiyama_hina",
    "wriggle_nightbug",
    "shanghai_doll",
    "daiyousei",
    "onozuka_komachi",
    "shikieiki_yamaxanadu",
    "usami_renko",
    "himekaidou_hatate", 
    "maribel_hearn",
    "nagae_iku",
    "kumoi_ichirin", 
    "kurodani_yamame",
    "aki_minoriko", 
    "shanghai",
    "hieda_no_akyuu", 
    "aki_shizuha", 
    "letty_whiterock",
    "kisume", 
    "lily_white", 
    "medicine_melancholy",
    "lunasa_prismriver", 
    "star_sapphire",
    "luna_child", 
    "sunny_milk", 
    "merlin_prismriver", 
    "lyrica_prismriver", 
    "yuugiri", 
    "mima", 
    "takoluka", 
    "kusakabe_misao", 
    "okazaki_yumemi", 
    "lily_black",
    "kitashirakawa_chiyuri",
    "elly", 
    "mugetsu", 
    "ellen",
    "kawashiro_mitori", 
    "meira", 
    "ohmu", 
    "achi_cirno", 
    "cho_marisa", 
    "joseph_stalin",
  ]

  questionAnswers:string[] = []
  questionOptions:string[] = ["X","X","X","X"];
  questionDisplayImage:string[] = [];

  info:AnimeInfo;
  gameStarted:boolean = false;
  index:number = 0;
  correct:number = 0;
  incorrect:number = 0;
  public highScore:TriviaScore;

  constructor(public memoApi:MemoryTestApiService,
    private highScoreService:HighScoreService) {
    this.info = new AnimeInfo();
    this.highScore = new TriviaScore();
  }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(){
    this.questionImages.forEach(element => {
      this.memoApi.getImage(element).subscribe(data =>{
        this.info = <AnimeInfo>data
        this.questionDisplayImage.push(this.info.file_url);
        this.questionAnswers.push(this.info.tag_string_character);
      });
    
    });
  }

  start(){
    //console.log(this.questionAnswers)
    this.gameStarted = true;
    this.assignAnswer();
  }

  answer(answer:string){

    if(this.index >=0 && this.index < 10){
      if(answer === this.questionAnswers[this.index]){
        alert("CORRECT!")
        this.correct = this.correct + 1;
        this.index = this.index +1;
        this.triggerGameOver();
      }else{
        alert("INCORRECT!");
        this.incorrect = this.incorrect +1;
        this.index = this.index +1;
        this.triggerGameOver();
      }
    }

  }

  triggerGameOver(){
    if(this.index === 10){
      alert("Game Over. Your Score: " +this.correct+" Correct - "+this.incorrect+" Incorrect");
      this.saveScore();
      this.gameStarted = false;
      this.reset();
    } else{
      this.continue();
    }

  }

  continue(){
    this.clearAnswers();
    this.assignAnswer();
  }

  clearAnswers(){
    this.questionOptions = ["X","X","X","X"];
  }

  assignAnswer(){
    var correct = this.chooseCorrectPosition();
    var incorrect;
    
    console.log("Index: " +this.index+" - Next Correct: " + this.questionAnswers[this.index])
    this.questionOptions[correct] = this.questionAnswers[this.index]
    while (this.checkFull()) {
      for (let index = 0; index < this.questionOptions.length; index++) {
        if(this.questionOptions[index] === "X"){
          incorrect = this.chooseIncorrectPosition();
          this.questionOptions[index] = this.randomAnswers[incorrect];
        }
        
      }
    }

  }

  chooseCorrectPosition(){
    var result:number;
    result = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    return result;
  }

  chooseIncorrectPosition(){
    var result:number;
    result = Math.floor(Math.random() * (71 - 0 + 1) + 0);
    return result;
  }

  checkFull(){
    var isFull:boolean = false;
    for (let index = 0; index < this.questionOptions.length; index++) {
      if(this.questionOptions[index] === "X"){
        isFull = true;
      }
    }

    return isFull;
  }

  reset(){
    this.index = 0;
    this.correct = 0;
    this.incorrect = 0;
  }

  saveScore(){
    this.highScore.correct = this.correct;
    this.highScore.incorrect = this.incorrect;
    this.highScore.date = (new Date()).toString();
    this.highScoreService.saveTriviaScore(this.highScore);
    alert("SCORE SAVED");
  }
}
