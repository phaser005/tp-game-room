import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Message } from '../clases/message';

@Injectable({
  providedIn: 'root'
})
export class RealTimeDataBaseService {

  private dbPath = '/MensajesReal';

  MensajesRef: AngularFireList<Message>;

  constructor(private db: AngularFireDatabase) {
    this.MensajesRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Message> {
    return this.MensajesRef;
  }

  create(unMensajes: Message): any {
    return this.MensajesRef.push(unMensajes);
  }

  update(key: string, value: any): Promise<void> {
    return this.MensajesRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.MensajesRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.MensajesRef.remove();
  }
}
