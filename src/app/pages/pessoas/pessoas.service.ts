import { Injectable } from '@angular/core';
import { ConnectApiService } from 'src/app/services/connect-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor
  (
    private httpService: ConnectApiService
  ) { }

  get(): Observable<any> {
    return this.httpService.get('/pessoas/1/100')
  }
}
