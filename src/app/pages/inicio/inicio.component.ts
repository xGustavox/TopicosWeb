import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  editando = false;

  constructor() { }

  ngOnInit(): void {
  }

  ItemClicado() {
    this.editando = true
  }

  Cancelar() {
    this.editando = false
  }
}
