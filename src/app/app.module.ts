import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {RouterModule} from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './slider/slider.component';
import { AcecaComponent } from './aceca/aceca.component';
import { PreviewCuadrosComponent } from './preview-cuadros/preview-cuadros.component';
import { PoesiaComponent } from './poesia/poesia.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SliderComponent,
    AcecaComponent,
    PreviewCuadrosComponent,
    PoesiaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
