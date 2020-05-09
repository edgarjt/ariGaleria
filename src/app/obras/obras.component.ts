import { Component, OnInit } from '@angular/core';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {ObrasService} from '../service/obras.service';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.css'],
})
export class ObrasComponent implements OnInit {
  faeye = faEye;
  Obras: any;
/*  // tslint:disable-next-line:variable-name
  page_size = 9;
  // tslint:disable-next-line:variable-name
  page_number = 1;
  pageSizeOptions = [9, 18, 36, 72, 100];*/

  constructor(
    private obrasServicios: ObrasService
  ) { }

  ngOnInit() {
    this.obrasServicios.getObras().subscribe(response => {
      this.Obras = response;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
/*
  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }
*/


}
