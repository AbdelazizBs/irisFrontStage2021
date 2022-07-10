import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtapeProductionServiceService {
  url = 'http://127.0.0.1:8080/';

  constructor(private http: HttpClient) { }


  getNomEtapes() {
    return this.http.get(this.url + 'etapeProduction/getNomEtapes');
  }
}
