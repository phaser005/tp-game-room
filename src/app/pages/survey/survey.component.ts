import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Survey } from '../../clases/survey'
import { AuthService } from '../../services/auth.service'
import { SurveyService } from '../../services/survey.service'

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  public forma!: FormGroup
  public survey!: Survey;

  constructor(private fb:FormBuilder,
              private auth: AuthService,
              private surveyService: SurveyService) {
  
    this.survey = new Survey();

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
    this.auth.GetCurrentUserName(this.auth.GetUserId()).then((res:any)=>{
      this.survey.age = this.forma.value["age"];
      this.survey.favoriteGame = this.forma.value["favoriteGame"];
      this.survey.lastName = this.forma.value["lastName"]
      this.survey.name = this.forma.value["name"]
      this.survey.phone = this.forma.value["phone"]
      this.survey.playHours = this.forma.value["playHours"]
      this.survey.preferences = this.forma.value["preferences"]
      this.survey.uid = this.auth.GetUserId();
      this.survey.registeredName = res

      this.surveyService.addNewSurvey(this.survey).then(()=>{
        console.log("New survey log added");
      });
      
    })
  }

  

}
