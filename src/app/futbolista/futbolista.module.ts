import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from '../shared/pages/home-page/main-page.component';
import {ListComponent} from './components/list/list.component';
import {PaginatorComponent} from './components/paginator/paginator.component';
import {BuscarFutbolistaComponent} from './pages/buscar-futbolista/buscar-futbolista.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    PaginatorComponent,
    BuscarFutbolistaComponent,

  ],
  exports: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FutbolistaModule {
}
