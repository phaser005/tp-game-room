import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorService, passwordMatchValidator } from '../../services/custom-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  errorMessage = "" ; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; //Firebase error handling
  
  form: FormGroup;
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: '',
      password: '',
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
    console.log(this.form.value);
  }
}
