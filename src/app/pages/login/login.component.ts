import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterComponent } from '../register/register.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb:FormBuilder,
              private auth: AuthService){
    this.form = this.fb.group({
      email: '',
      password: ''
    }); 

  }

  ngOnInit(): void {
  }

  async LogMeIn() {
    if(this.form.valid){
      this.auth.LogMeIn(this.form.get('email')?.value,  this.form.get('password')?.value);
    }else{
      alert("THERE'S SOME ERRORS!");
    }
  }
}
