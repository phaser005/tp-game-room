import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) {
    this.auth.LogOut();
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
