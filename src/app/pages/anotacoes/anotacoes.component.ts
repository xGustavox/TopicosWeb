import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnectApiService } from 'src/app/services/connect-api.service';

@Component({
  selector: 'app-anotacoes',
  templateUrl: './anotacoes.component.html',
  styleUrls: ['./anotacoes.component.scss']
})
export class AnotacoesComponent implements OnInit {

  anotacoes = []
  editando = false
  adicionando = false
  form: FormGroup
  dado = null
  idFixer = 0

  constructor
  (
    private fb: FormBuilder,
    private conn: ConnectApiService
  ) { 
    this.form = fb.group({
      nome: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.Refresh()
  }

  Add() {
    this.LimparForm()
    this.adicionando = true
  }

  Refresh() {
    this.conn.get("anotacoes/1/100").subscribe(res => {
      this.anotacoes = res

      res.map(r => {
        if (r.id > this.idFixer)
          this.idFixer = r.id
      })

      this.LimparForm()
    }, err => console.log(err))
  }

  Load(i) {
    this.dado = this.anotacoes[i]

    this.form.controls.nome.setValue(this.dado.nome)
    this.editando = true
  }

  Save() {
    
    if (this.editando) {
      this.conn.put(`anotacoes`, {
        id: this.dado.id,
        nome: this.form.value.nome
      }).subscribe(() => {
        this.Refresh()
      }, err => {
        console.log(err)
        alert('Erro ao atualizar o dado.')
      })
    }
    else {
      this.conn.post('anotacoes', {
        id: this.idFixer + 1,
        nome: this.form.value.nome
      }).subscribe(() => {
        this.Refresh()
        this.adicionando = false
      }, err => {
        alert('Erro ao inserir o dado.')
        console.log(err)})
    }
  }

  Delete() {
    this.conn.delete(`anotacoes/${this.dado.id}`).subscribe(res => {
      this.Refresh()
    }, err => {
      alert('Erro ao deletar o registro.')
    })
  }

  LimparForm() {
    this.form.controls.nome.setValue('')
    this.adicionando = false
    this.editando = false
  }

  Cancel() {
    this.LimparForm()
  }

}
