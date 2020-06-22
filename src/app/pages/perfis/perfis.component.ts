import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnectApiService } from 'src/app/services/connect-api.service';

@Component({
  selector: 'app-perfis',
  templateUrl: './perfis.component.html',
  styleUrls: ['./perfis.component.scss']
})
export class PerfisComponent implements OnInit {

  perfils = []
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
      descricao: ['', Validators.required]
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
    this.conn.get("perfis/1/100").subscribe(res => {
      this.perfils = res

      res.map(r => {
        if (r.id > this.idFixer)
          this.idFixer = r.id
      })

      this.LimparForm()
    }, err => console.log(err))
  }

  Load(i) {
    this.dado = this.perfils[i]

    this.form.controls.descricao.setValue(this.dado.descricao)
    this.editando = true
  }

  Save() {
    
    if (this.editando) {
      this.conn.put(`perfis`, {
        id: this.dado.id,
        descricao: this.form.value.descricao
      }).subscribe(() => {
        this.Refresh()
      }, err => {
        console.log(err)
        alert('Erro ao atualizar o dado.')
      })
    }
    else {
      this.conn.post('perfis', {
        id: this.idFixer + 1,
        descricao: this.form.value.descricao
      }).subscribe(() => {
        this.Refresh()
        this.adicionando = false
      }, err => {
        alert('Erro ao inserir o dado.')
        console.log(err)})
    }
  }

  Delete() {
    this.conn.delete(`perfis/${this.dado.id}`).subscribe(res => {
      this.Refresh()
    }, err => {
      alert('Erro ao deletar o registro.')
    })
  }

  LimparForm() {
    this.form.controls.descricao.setValue('')
    this.adicionando = false
    this.editando = false
  }

  Cancel() {
    this.LimparForm()
  }

}
