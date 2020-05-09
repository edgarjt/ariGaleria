import { Component, OnInit } from '@angular/core';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {EsculturasService} from '../service/esculturas.service';

@Component({
  selector: 'app-esculturas',
  templateUrl: './esculturas.component.html',
  styleUrls: ['./esculturas.component.css']
})
export class EsculturasComponent implements OnInit {
  faeye = faEye;
  Esculturas: any;

  constructor(
    private esculturaServicios: EsculturasService
  ) { }

  ngOnInit() {
    this.esculturaServicios.getEsculturas().subscribe(response => {
      this.Esculturas = response;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

}
