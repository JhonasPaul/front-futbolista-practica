import {ChangeDetectorRef, Component} from '@angular/core';
import {Futbolista} from '../../../futbolista/interface/futbolista';
import {FutbolistaService} from '../../../futbolista/servicios/futbolista.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: ``
})
export class MainPageComponent {
  futbolistas: Futbolista[] = [];
  paginador: any;


  constructor(private futbolistaService: FutbolistaService,
              private acticatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.acticatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page')!;
      if (!page) {
        page = 0
      }
      this.futbolistaService.listarFutbolistas(page)
        .subscribe(response => {
          this.futbolistas = response.content as Futbolista[];
          this.paginador = response;
        });
    });
  }

  public idDeleteById(id: number) {
    console.log(id);
    this.futbolistaService.eliminarFutbolistaPorID(id).subscribe(() => {
        this.futbolistas = this.futbolistas.filter(cliente => cliente.id !== id);
        console.log("eliminarFutbolistaPorID", id);
      }
    )
  }
}
