import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../clases/message'
import { AuthService } from '../../services/auth.service'
import { FirebaseChatService } from 'src/app/services/firebase-chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() path!: string;
  mensaje!: Message;

  constructor(private fireChat: FirebaseChatService, private auth: AuthService) {
    this.mensaje = new Message();
   }

  ngOnInit(): void {
    //console.log(this.path);
  }

  sendMessage(){
    this.auth.GetCurrentUserName(this.auth.GetUserId()).then((res:any)=>{
      this.mensaje.id = this.auth.GetUserId();
      this.mensaje.usuario = res;
      this.mensaje.fecha = this.auth.GetCurrentDate().toString();
      //console.log(this.mensaje);
      this.fireChat.create(this.mensaje, this.path);
    })
  }

}
