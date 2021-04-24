import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../clases/message';
import { RealTimeDataBaseService } from '../../services/real-time-data-base.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chat-logs',
  templateUrl: './chat-logs.component.html',
  styleUrls: ['./chat-logs.component.css']
})
export class ChatLogsComponent implements OnInit {

  listadoMensajes?: any[];
  mensajeActual?: Message;
  currentIndex = -1;
  title = '';
  constructor(private servicioRealTime:RealTimeDataBaseService) { }

  ngOnInit(): void {
    this.cargarMensajes();
  }

  cargarMensajes(): void {
    this.servicioRealTime.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.listadoMensajes = data;
    });
  }

}
