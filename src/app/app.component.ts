import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tpGameRoom';
  userName?:string;

  constructor(private auth: AuthService){
  }

  LogInVerification(cookie:string):boolean{
    this.userName = this.auth.getCookieValue("isLoggedInName");
    return this.auth.SearchLogInCookie(cookie);
  }

  LogOut(){
    this.auth.LogOut();
  }
}
