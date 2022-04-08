//DEFAULT IMPORTS//
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//FIREBASE IMPORTS//
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

//FORM IMPORTS//
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//SERVICES
import { MemoryTestApiService } from './services/memory-test-api.service';
import { HttpClientModule } from '@angular/common/http';

//NOTIFICATIONS//
import { NotifierModule, NotifierOptions } from 'angular-notifier';

//CORE COMPONENTS
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { WhoAmIComponent } from './pages/who-am-i/who-am-i.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { TicTacToeComponent } from './games/tic-tac-toe/tic-tac-toe.component';
import { RockPaperScissorsComponent } from './games/rock-paper-scissors/rock-paper-scissors.component';
import { MemoryTestComponent } from './games/memory-test/memory-test.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatLogsComponent } from './components/chat-logs/chat-logs.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { MyGameComponent } from './games/my-game/my-game.component';
import { HangedComponent } from './games/hanged/hanged.component';
import { HigherLowerComponent } from './games/higher-lower/higher-lower.component';
import { TriviaComponent } from './games/trivia/trivia.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { SurveyResultsComponent } from './pages/survey-results/survey-results.component';


const config = {
  apiKey: "AIzaSyC9zXi3pcaonrm5bqDFLoyMilfrv0Gsups",
  authDomain: "tp-game-room-app.firebaseapp.com",
  projectId: "tp-game-room-app",
  storageBucket: "tp-game-room-app.appspot.com",
  messagingSenderId: "981476937795",
  appId: "1:981476937795:web:34ae5e135bd220e31944f6"
}

const notifierDefaultOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'left',
      distance: 12,
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10,
    },
  },
  theme: 'material',
  behaviour: {
    autoHide: 3000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4,
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease',
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50,
    },
    shift: {
      speed: 300,
      easing: 'ease',
    },
    overlap: 150,
  },
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    WhoAmIComponent,
    UserProfileComponent,
    TicTacToeComponent,
    RockPaperScissorsComponent,
    MemoryTestComponent,
    MyGameComponent,
    HangedComponent,
    HigherLowerComponent,
    TriviaComponent,
    ChatComponent,
    ChatLogsComponent,
    SurveyComponent,
    LogOutComponent,
    SurveyResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, //FIRESTORE
    AngularFireStorageModule, //STORAGE
    AngularFireAuthModule, //AUTH
    NotifierModule.withConfig(notifierDefaultOptions),
    HttpClientModule
  ],
  providers: [MemoryTestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
