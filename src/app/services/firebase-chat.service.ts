import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Message } from '../clases/message';

@Injectable({
  providedIn: 'root'
})
export class FirebaseChatService {

  MensajesRef!: AngularFirestoreCollection<Message>;
  private dbPath = '/chat';

  constructor(private db: AngularFirestore) {
  }

  getAll(): AngularFirestoreCollection<Message> {
    this.MensajesRef = this.db.collection(this.dbPath)
    return this.MensajesRef;
  }

  create(mensajes: Message): any {
    this.MensajesRef = this.db.collection(this.dbPath)
    return this.MensajesRef.add({ ...mensajes });
  }

  update(id: string, data: any): Promise<void> {
    return this.MensajesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.MensajesRef.doc(id).delete();
  }
}
