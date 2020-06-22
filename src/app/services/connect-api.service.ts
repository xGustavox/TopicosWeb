import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectApiService {

  private URI = `${environment.URL}`

  constructor
  (
    private httpClient: HttpClient
  ) {}

  get(rota): Observable<any> {
    return this.httpClient.get(this.URI + rota)
  }

  post(rota, corpo) {
    return this.httpClient.post(this.URI + rota, corpo)
  }

  put(rota, corpo) {
    return this.httpClient.put(this.URI + rota, corpo)
  }

  delete(rota) {
    return this.httpClient.delete(this.URI + rota)
  }
}
