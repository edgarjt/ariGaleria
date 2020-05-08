import { Component, OnInit } from '@angular/core';
import {faGifts} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-poesia',
  templateUrl: './poesia.component.html',
  styleUrls: ['./poesia.component.css']
})
export class PoesiaComponent implements OnInit {
  fagif = faGifts;

  constructor() { }

  ngOnInit() {
  }

}
