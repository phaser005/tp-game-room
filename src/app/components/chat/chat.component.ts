import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../clases/message'
import { AuthService } from '../../services/auth.service'
import { FirebaseChatService } from 'src/app/services/firebase-chat.service';
import { RealTimeDataBaseService } from 'src/app/services/real-time-data-base.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() path!: string;
  mensaje!: Message;

  constructor(private fireChat: FirebaseChatService, private auth: AuthService, private realChat:RealTimeDataBaseService) {
    this.mensaje = new Message();
   }

  ngOnInit(): void {
    //console.log(this.path);
  }

  sendMessage(){
    this.auth.GetCurrentUserName(this.auth.GetUserId()).then((res:any)=>{
      this.mensaje.id = this.auth.GetUserId();
      this.mensaje.usuario = res;
      this.mensaje.fecha = this.auth.GetCurrentDateAndTime();
      //console.log(this.mensaje);
      (<HTMLInputElement> document.getElementById("chatSpace")).value = "";
      this.fireChat.create(this.mensaje).then(()=>{
        //console.log("se envio el mensaje Fire");
      });
      this.realChat.create(this.mensaje).then(()=>{
        //console.log("se envio el mensaje RealTime");
      });
    });
  }

}
