import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor() { 
  } 

}

export function passwordMatchValidator(control: AbstractControl) {
  if(control && (control.value !== null || control.value !== undefined)){
    const confirmPass = control.value;
    const passControl = control.root.get('password'); //This is the magic

    if(passControl){
      const passValue = passControl.value;
      
      if(passValue !== confirmPass || passValue === ''){
        return{
          isError: true
        };
      }
    }
  }
  return null;
}
