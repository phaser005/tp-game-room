import { Component, Input, OnInit } from '@angular/core';
import { FirebaseChatService } from '../../services/firebase-chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-logs',
  templateUrl: './chat-logs.component.html',
  styleUrls: ['./chat-logs.component.css']
})
export class ChatLogsComponent implements OnInit {

  //@Input() route!: string;
  chatLogs: Observable <any[]>;
  
  constructor(firestore: FirebaseChatService) {
    this.chatLogs = firestore.getAll('/chat').valueChanges();
  }
  ngOnInit(): void {
    //console.log(this.route);
  }

}
