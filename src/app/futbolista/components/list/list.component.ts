import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Futbolista} from '../../interface/futbolista';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: ``
})
export class ListComponent {

  @Output()
  public inDelete:EventEmitter<number> = new EventEmitter();

  @Input()
  public futbolistas: Futbolista[] = [];



  public emitIdDelete(id:number) {
    console.log(id);
    this.inDelete.emit(id);
  }
}
