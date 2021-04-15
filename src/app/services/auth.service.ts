import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserData, LoginDataLogs } from '../clases/user-data';
import { AngularNotifierService } from '../services/angular-notifier.service';
import { Router } from '@angular/router'; //For redirecting users


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  collectionRoute= "/users";
  collectionReference: AngularFirestoreCollection<UserData>;
  newUser: UserData;

  collectionRouteB = "/LoggedInUsers"
  collectionReferenceB: AngularFirestoreCollection<LoginDataLogs>;
  newUserLog: LoginDataLogs;

  constructor(private db:AngularFirestore, 
              private auth:AngularFireAuth,
              private notification: AngularNotifierService,
              private router: Router) {
    this.collectionReference = db.collection(this.collectionRoute);
    this.newUser = new UserData();

    this.collectionReferenceB = db.collection(this.collectionRouteB);
    this.newUserLog = new LoginDataLogs;

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
            if(user.user?.uid){

              this.newUserLog.uid = user.user.uid;
              this.newUserLog.loginDate = this.GetCurrentDate();
              
              this.AddNewLoginLog(this.newUserLog).then(()=>[
                console.log("New log has been writed to the database")
              ]);
            }
            this.SaveLogInCookie(this.newUserLog.uid);
            this.router.navigate(['/home']);
          } else {
            throw new Error;
          }
        }catch (e) {
          this.notification.showNotification('error', e.message);
        }
      }
    

  }

  LogOut(){
    this.auth.signOut();
    this.DeleteLogInCookie();
    this.router.navigate(['/home']);
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
          this.SaveLogInCookie(this.newUser.uid);
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

  GetCurrentUser(){
    this.auth.onAuthStateChanged(function(user) {
      if (user) {
        console.log(user.uid);
      } else {
        console.log("No one is singed in");
      }
    });
  }

  addUserToFireStoreDatabase(user: UserData):any{
    return this.collectionReference.add({...user});
  }

  AddNewLoginLog(log: LoginDataLogs):any{
    return this.collectionReferenceB.add({...log});
  }

  GetCurrentDate():Date{
    var date = new Date();
    return date;
  }
  
  SaveLogInCookie(uid: string){
    document.cookie = "isLoggedIn="+uid;
  }

  DeleteLogInCookie(){
    document.cookie = "isLoggedIn" + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  SearchLogInCookie(cookie:string):boolean{
    if(this.getCookie(cookie) === "isLoggedIn"){
      return true;
    }else{
      return false;
    }
  }

  getCookie(cname:string):string{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        var cookieName = name.split("=", 1);
        //console.log(cookieName)
        return cookieName[0];
      }
    }
    return "";
  }

  //user.user?.uid

}
