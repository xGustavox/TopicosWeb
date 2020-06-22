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
}
