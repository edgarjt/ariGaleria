import { Component, OnInit } from '@angular/core';
import {faBorderAll} from '@fortawesome/free-solid-svg-icons';
import {AutoresService} from '../service/autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
  faBorderAll1 = faBorderAll;
  AutoresResponse: any;

  constructor(private autoresService: AutoresService) { }

  ngOnInit() {
    this.autoresService.getOAutores().subscribe(response => {
      this.AutoresResponse = response;
    }, error => {
      console.log(error);
    });
  }

}
