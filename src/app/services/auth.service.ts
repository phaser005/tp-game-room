import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; //For redirecting users
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserData } from '../clases/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  collectionRoute = '/users';
  collectionReference: AngularFirestoreCollection<UserData>;

  constructor(private db:AngularFirestore) {
    this.collectionReference = db.collection(this.collectionRoute);
   }
}
