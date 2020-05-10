import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../service/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  ProductService: any;

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getOAutores().subscribe(response => {
      console.log(response);
      this.ProductService = response;
    }, error => {
      console.log(error);
    });
  }

}
