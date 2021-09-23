import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  LogInVerification(cookie:string):boolean{
    //return this.auth.SearchLogInCookie(cookie);
    return this.auth.SearchLogInStorage("isLoggedIn");
  }

}
