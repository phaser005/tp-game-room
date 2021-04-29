import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  public forma!: FormGroup

  constructor(private fb:FormBuilder) {

  }

  ngOnInit(){
    this.forma = this.fb.group({
      'name': ['', [
        Validators.required,
        this.validadorDeEspacio, //Al form hay que pasarle ".errors?.contiene" que es el valor del Json
      ]],
      'lastName': ['', Validators.required],
      'age': ['', [
        Validators.required,
        Validators.min(18),
        Validators.max(99)
      ]],
      'phone': ['', [
        Validators.required, 
        Validators.maxLength(10), 
        Validators.pattern("^[0-9]*")
      ]],
      'favoriteGame': ['',[ 
        Validators.required
      ]],
      'preferences': ['',[ 
        Validators.required
      ]],
      'playHours': ['',[ 
        Validators.required
      ]]
    })
  }//ON INIT

  //Con esto creamos nuestros propios validadores
  private validadorDeEspacio(control:AbstractControl):null | Object{
    const name = <string> control.value;
    const tieneEspacios = name.includes(' '); //Esto returna true si el nombre tiene espacios

    if(tieneEspacios){
      return {contiene:true};
    }else{
      return null;
    }
  }

  enviar(){
    console.info("Objeto Formulario", this.forma);
  }

  

}
