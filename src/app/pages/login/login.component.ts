import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AngularNotifierService } from '../../services/angular-notifier.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb:FormBuilder,
              private auth: AuthService,
              private notification: AngularNotifierService){
    this.form = this.fb.group({
      email: '',
      password: ''
    }); 

  }

  ngOnInit(): void {
  }

  async LogMeIn() {
    if(this.form.valid && (this.form.get('email')?.value !== '' && this.form.get('password')?.value !== '')){
      
      this.auth.LogMeIn(this.form.get('email')?.value,  this.form.get('password')?.value);

    }else if(this.form.get('email')?.value !== '' && this.form.get('password')?.value === ''){
      
      this.notification.showNotification('error', 'You entered no password');

    }else if(this.form.get('email')?.value === '' && this.form.get('password')?.value !== ''){
      
      this.notification.showNotification('error', 'You entered no email');

    }else if(this.form.get('email')?.value === '' && this.form.get('password')?.value === ''){
      
      this.notification.showNotification('error', 'You entered nothing at all!');
    }else{

      this.notification.showNotification('error', 'Email is badly formatted');
    }
  }

  AutoCompleteValidUser(){
    this.form.get('email')?.setValue('reimu@gmail.com');
    this.form.get('password')?.setValue('123123');
    this.LogMeIn();
  }
}
