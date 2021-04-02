import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserData } from '../clases/user-data';
import { Router } from '@angular/router'; //For redirecting users


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  collectionRoute = '/users';
  collectionReference: AngularFirestoreCollection<UserData>;

  constructor(private db:AngularFirestore, 
              private ngFireAuth:AngularFireAuth,
              private router: Router) {
    this.collectionReference = db.collection(this.collectionRoute);
   }

   async LogMeIn(email: string, password: string) {
    //code for logging in the app goes here!
    if(email == "" && password == "")
    {
      alert('Email and password are empty');
    }else if(password == ""){
        alert('Password field is empty');
      }else if(email == "")
      {
        alert('Email Field is empty');
      }else{
        try {
          const user = await this.ngFireAuth.signInWithEmailAndPassword(email, password);
    
          if(email){
            this.router.navigate(['/home']);
          } else {
            throw new Error;
          }
        }catch (e) {
          alert(e.message);
        }
      }
    

  }

  async Register(email:string, password:string){
    try{
      const user = await this.ngFireAuth.createUserWithEmailAndPassword(email, password);

      if(email){
        alert('Registration Successful!')
        this.router.navigate(['/home']);
      } else {
        throw new Error;
      }
    } catch (e) {
      alert(e.message);
    }



  }  
}
