import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Survey } from '../clases/survey'

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  collectionRoute= "/surveys";
  collectionReference: AngularFirestoreCollection<Survey>;
  newSurvey: Survey;

  constructor(private db:AngularFirestore) {
    this.collectionReference = db.collection(this.collectionRoute);
    this.newSurvey = new Survey();
   }

   
   addNewSurvey(survey:Survey){

    return this.collectionReference.add({...survey});

   }


}
