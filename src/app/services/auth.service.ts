import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserData } from '../clases/user-data';
import { AngularNotifierService } from '../services/angular-notifier.service';
import { Router } from '@angular/router'; //For redirecting users


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  collectionRoute= "/users";
  collectionReference: AngularFirestoreCollection<UserData>;
  newUser: UserData;

  constructor(private db:AngularFirestore, 
              private auth:AngularFireAuth,
              private notification: AngularNotifierService,
              private router: Router) {
    this.collectionReference = db.collection(this.collectionRoute);
    this.newUser = new UserData();

   }

   async LogMeIn(email: string, password: string) {
    //code for logging in the app goes here!
    if(email == "" && password == "")
    {
      this.notification.showNotification('error','Email and password are empty');
    }else if(password == ""){
      this.notification.showNotification('error','Password field is empty');
      }else if(email == "")
      {
        this.notification.showNotification('error','Email Field is empty');
      }else{
        try {
          const user = await this.auth.signInWithEmailAndPassword(email, password);
    
          if(email){
            this.router.navigate(['/home']);
          } else {
            throw new Error;
          }
        }catch (e) {
          this.notification.showNotification('error', e.message);
        }
      }
    

  }

  async Register(email:string, password:string, name:string){
    try{
      const user = await this.auth.createUserWithEmailAndPassword(email, password);
      if(email){
        if(user.user?.uid){

          this.newUser.uid = user.user.uid;
          this.newUser.email = email;
          this.newUser.displayName = name;
          this.newUser.loginDate = this.GetCurrentDate();
          
          this.addUserToFireStoreDatabase(this.newUser).then(()=>[
            console.log("User Registered")
          ]);
          this.notification.showNotification('success','Registration Successful!');
        }
        
        this.router.navigate(['/home']);
      } else {
        throw new Error;
      }
    } catch (e) {
      this.notification.showNotification('error',e.message);
    }
    

    
  }

  addUserToFireStoreDatabase(user: UserData):any{
    return this.collectionReference.add({...user});

  }

  GetCurrentDate():Date{
    var date = new Date();
    return date;
  }
  
  //user.user?.uid

}
