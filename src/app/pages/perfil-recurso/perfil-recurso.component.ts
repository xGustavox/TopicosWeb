import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnectApiService } from 'src/app/services/connect-api.service';

@Component({
  selector: 'app-perfil-recurso',
  templateUrl: './perfil-recurso.component.html',
  styleUrls: ['./perfil-recurso.component.scss']
})
export class PerfilRecursoComponent implements OnInit {

  perfil_recursos = []
  editando = false
  adicionando = false
  form: FormGroup
  dado = null
  idFixer = 0
  perfis = []
  recursos = []

  constructor
  (
    private fb: FormBuilder,
    private conn: ConnectApiService
  ) { 
    this.form = fb.group({
      id_perfil: ['', Validators.required],
      id_recurso: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.Refresh()
  }

  Add() {
    this.LimparForm()
    this.adicionando = true

    this.InitSelect();
  }

  InitSelect() {
    this.conn.get("perfis/1/100").subscribe(res => {
      this.perfis = res
    })

    this.conn.get("recursos/1/100").subscribe(res => {
      this.recursos = res
    })
  }

  Refresh() {
    this.conn.get("perfisrecursos/included/1/100").subscribe(res => {
      this.perfil_recursos = res
      console.log(res)

      res.map(r => {
        if (r.id > this.idFixer)
          this.idFixer = r.id
      })

      this.LimparForm()
    }, err => console.log(err))
  }

  Load(i) {
    this.InitSelect();
    this.dado = this.perfil_recursos[i]

    this.form.controls.id_perfil.setValue(this.dado.id_perfil)
    this.form.controls.id_recurso.setValue(this.dado.id_recurso)
    this.editando = true
  }

  Save() {
    
    if (this.editando) {
      this.conn.put(`perfisrecursos`, {
        id: this.dado.id,
        id_perfil: Number(this.form.value.id_perfil),
        id_recurso: Number(this.form.value.id_recurso)
      }).subscribe(() => {
        this.Refresh()
      }, err => {
        console.log(err)
        alert('Erro ao atualizar o dado.')
      })
    }
    else {
      this.conn.post('perfisrecursos', {
        id: this.idFixer + 1,
        id_perfil: Number(this.form.value.id_perfil),
        id_recurso: Number(this.form.value.id_recurso)
      }).subscribe(() => {
        this.Refresh()
        this.adicionando = false
      }, err => {
        alert('Erro ao inserir o dado.')
        console.log(err)})
    }
  }

  Delete() {
    this.conn.delete(`perfisrecursos/${this.dado.id}`).subscribe(res => {
      this.Refresh()
    }, err => {
      alert('Erro ao deletar o registro.')
    })
  }

  LimparForm() {
    this.form.controls.id_perfil.setValue('')
    this.form.controls.id_recurso.setValue('')
    this.adicionando = false
    this.editando = false
  }

  Cancel() {
    this.LimparForm()
  }

}
