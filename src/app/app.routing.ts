import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';

import {ObrasComponent} from './obras/obras.component';
import {EsculturasComponent} from './esculturas/esculturas.component';
import {NoticiasComponent} from './noticias/noticias.component';
import {ProductosComponent} from './productos/productos.component';
import {Error404Component} from './error404/error404.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'obras', component: ObrasComponent},
  {path: 'esculturas', component: EsculturasComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'productos', component: ProductosComponent},
  {path: '**', component: Error404Component}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);