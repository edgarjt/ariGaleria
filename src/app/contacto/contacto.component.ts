import { Component, OnInit } from '@angular/core';
import {faMapMarkerAlt, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  marker = faMapMarkerAlt;
  phone = faPhone;
  email = faEnvelope;
  constructor() { }

  ngOnInit() {
  }

}
