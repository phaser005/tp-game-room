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
            //this.SaveLogInCookie(this.newUserLog.uid);
            //this.SaveNameCookie(email);
            //STORAGE
            this.SaveLogInStorage(this.newUserLog.uid);
            this.SaveNameStorage(email);
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
    this.auth.signOut().then(e =>{
      //this.DeleteLogInCookie();
      this.DeleteLogInStorage();
      this.router.navigate(['/home']);
    }).catch(e=> {
      alert("No se pudo desloguear");
    });
    
    
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
          //this.SaveLogInCookie(this.newUser.uid);
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

  GetUserId():string{
    var value = "; " + document.cookie;
    var parts = value.split("; " + 'isLoggedIn' + "=");
    return parts[1];
  }

  GetCurrentUserName(uid:string){
    var name!: string;
    return new Promise((resolve, rejected)=>{
      this.collectionReference.get().toPromise().then(function (querySnapshot){
        querySnapshot.forEach(function (doc){
          //console.log(doc.id, " => ", doc.data());
          if(doc.data().uid === uid){
            resolve(doc.data().displayName);
          }
        })
      })
    })
  }


  addUserToFireStoreDatabase(user: UserData):any{
    return this.collectionReference.add({...user});
  }

  AddNewLoginLog(log: LoginDataLogs):any{
    return this.collectionReferenceB.add({...log});
  }

  GetCurrentDateAndTime():string{
    var date = new Date();
    var currentDate = String(date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes());
    return currentDate;
  }

  GetCurrentDate():Date{
    var date = new Date();
    return date;
  }
  
  SaveLogInCookie(uid: string){
    document.cookie = "isLoggedIn="+uid;
  }

  SaveLogInStorage(uid:string){
    localStorage.setItem("isLoggedIn", uid);
  }

  SaveNameCookie(name: string){
    document.cookie = "isLoggedInName="+name;
  }

  SaveNameStorage(name: string){
    localStorage.setItem("isLoggedInName", name);
  }

  DeleteLogInCookie(){
    document.cookie = "isLoggedIn" + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = "isLoggedInName" + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  DeleteLogInStorage(){
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isLoggedInName");
  }

  SearchLogInCookie(cookie:string):boolean{
    if(this.getCookie(cookie) === "isLoggedIn"){
      return true;
    }else{
      return false;
    }
  }

  SearchLogInStorage(value:string):boolean{
    if(localStorage.getItem(value)){
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

  getCookieValue(cname:string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  getStorageValue(value:string){
    return localStorage.getItem(value);
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  //user.user?.uid

}
