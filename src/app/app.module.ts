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
import { FormsModule } from '@angular/forms';

//CUSTOM COMPONENTS IMPORTS//
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { WhoAmIComponent } from './pages/who-am-i/who-am-i.component';

const config = {
  apiKey: "AIzaSyC9zXi3pcaonrm5bqDFLoyMilfrv0Gsups",
  authDomain: "tp-game-room-app.firebaseapp.com",
  projectId: "tp-game-room-app",
  storageBucket: "tp-game-room-app.appspot.com",
  messagingSenderId: "981476937795",
  appId: "1:981476937795:web:34ae5e135bd220e31944f6"
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    WhoAmIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, //FIRESTORE
    AngularFireStorageModule, //STORAGE
    AngularFireAuthModule //AUTH
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
