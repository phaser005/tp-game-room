import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatchValidator } from '../../services/custom-validator.service';
import { AngularNotifierService } from '../../services/angular-notifier.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor(private fb:FormBuilder,
              private auth: AuthService,
              private notification: AngularNotifierService) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.compose([Validators.required, Validators.email])]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPass: ['', passwordMatchValidator]
    });

      //Observable password//
    this.form.controls.password.valueChanges.subscribe(
      x => this.form.controls.confirmPass.updateValueAndValidity()
    )
  
  }


  ngOnInit(): void {
  }

  onSubmit(){
    this.form.markAsTouched();
    if(this.form.valid){
      console.log("ALL OK!");
      console.log(this.form.get('email')?.value, this.form.get('password')?.value);
      
      this.auth.Register(this.form.get('email')?.value,this.form.get('password')?.value, this.form.get('name')?.value);
    }else{
      this.notification.showNotification('error', 'You forgot to complete some fields');
    }
  }
}
