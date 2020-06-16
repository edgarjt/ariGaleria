import { Component, OnInit } from '@angular/core';
import {EventosService} from '../service/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  EventService: any;
  EventPlatica: any;
  EventTaller: any;
  EventExpo: any;

  constructor(private ServiceEvent: EventosService) { }

  ngOnInit() {
    this.ServiceEvent.getEventos().subscribe(response => {
      console.log(response);
      if (response.length === 0) {
        return this.EventService = false;
      }
      this.EventService = response;

    }, error => {
      console.log(error.error);
    });

    this.ServiceEvent.getPlatica().subscribe(response => {
      console.log(response);
      if (response.length === 0) {
        return this.EventPlatica = false;
      }
      this.EventPlatica = response;

    }, error => {
      console.log(error.error);
    });

    this.ServiceEvent.getTaller().subscribe(response => {
      console.log(response);
      if (response.length === 0) {
        return this.EventTaller = false;
      }
      this.EventTaller = response;

    }, error => {
      console.log(error.error);
    });

    this.ServiceEvent.getExpo().subscribe(response => {
      console.log(response);
      if (response.length === 0) {
        return this.EventExpo = false;
      }
      this.EventExpo = response;

    }, error => {
      console.log(error.error);
    });
  }

}
