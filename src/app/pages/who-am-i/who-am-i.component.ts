import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.css']
})
export class WhoAmIComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  UserInfo(){
    this.auth.GetCurrentUserName(this.auth.GetUserId()).then((res:any)=>{
      console.log(res)
    })
  }

}
