import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './shared/pages/home-page/main-page.component';
import {BuscarFutbolistaComponent} from './futbolista/pages/buscar-futbolista/buscar-futbolista.component';


const routes: Routes = [
  {
    path: 'futbolistas/page/:page',
    component: MainPageComponent
  },
  {
    path: 'futbolistas',
    component: MainPageComponent
  },
  {
    path: 'buscar',
    component: BuscarFutbolistaComponent
  },
  {
    path: '**',
    redirectTo: 'futbolistas',
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:
    [
      RouterModule
    ]
})
export class AppRoutingModule {
}
