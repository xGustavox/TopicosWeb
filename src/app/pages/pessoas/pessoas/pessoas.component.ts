import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoas } from '../pessoas.interface';
import { PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent implements OnInit {

  pessoas : Observable<Pessoas[]>
  editando = false

  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
    // this.pessoas = this.pessoasService.get()
  }
}
