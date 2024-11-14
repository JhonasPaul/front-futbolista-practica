import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Futbolista} from '../interface/futbolista';

@Injectable({
  providedIn: 'root'
})
export class FutbolistaService {
  private urlEndPoind: string = "http://localhost:8080/api/futbolistas"


  constructor(private http: HttpClient,) {
  }

  listarFutbolistas(page: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page)
    return this.http.get(`${this.urlEndPoind}/page`, {params})
  }


  eliminarFutbolistaPorID(id: number): Observable<void> {
    const params = new HttpParams()
      .set('id', id)
    return this.http.delete<void>(`${this.urlEndPoind}/eliminar`, {params})
  }


  obtenerFutbolistaPorId(id: number): Observable<Futbolista> {
    return this.http.get<Futbolista>(`${this.urlEndPoind}/${id}`)
  }
}
