import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = "" ;
  password = "" ;
  errorMessage = "" ; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; //Firebase error handling
  
  constructor() { }

  ngOnInit(): void {
  }

  register(){
    alert("Register works!");
  }
}
