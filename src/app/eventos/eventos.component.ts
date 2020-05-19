import { Component, OnInit } from '@angular/core';
import {EventosService} from '../service/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  EventService: any;

  constructor(private ServiceEvent: EventosService) { }

  ngOnInit() {
    this.ServiceEvent.getEventos().subscribe(response => {
      this.EventService = response;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

}
