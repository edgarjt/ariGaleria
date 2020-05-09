import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {RouterModule} from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './slider/slider.component';
import { AcercaComponent } from './acerca/acerca.component';
import { PreviewCuadrosComponent } from './preview-cuadros/preview-cuadros.component';
import { PoesiaComponent } from './poesia/poesia.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { ObrasComponent } from './obras/obras.component';
import { EsculturasComponent } from './esculturas/esculturas.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { AutoresComponent } from './autores/autores.component';

/*Services*/
import {ObrasService} from './service/obras.service';
import {EsculturasService} from './service/esculturas.service';
import {AutoresService} from './service/autores.service';
import {ProductoService} from './service/producto.service';

/*import { PaginatePipe } from './pipes/paginate.pipe';*/

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SliderComponent,
    AcercaComponent,
    PreviewCuadrosComponent,
    PoesiaComponent,
    ContactoComponent,
    FooterComponent,
    ObrasComponent,
    EsculturasComponent,
    NoticiasComponent,
    ProductosComponent,
    HomeComponent,
    Error404Component,
    AutoresComponent,
/*    PaginatePipe*/
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    FontAwesomeModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders,
    ObrasService,
    EsculturasService,
    AutoresService,
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
