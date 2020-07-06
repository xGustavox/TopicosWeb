import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnectApiService } from 'src/app/services/connect-api.service';

@Component({
  selector: 'app-pessoa-grupo',
  templateUrl: './pessoa-grupo.component.html',
  styleUrls: ['./pessoa-grupo.component.scss']
})
export class PessoaGrupoComponent implements OnInit {

  pessoa_grupo = []
  editando = false
  adicionando = false
  form: FormGroup
  dado = null
  idFixer = 0
  pessoas = []
  grupos = []

  constructor
  (
    private fb: FormBuilder,
    private conn: ConnectApiService
  ) { 
    this.form = fb.group({
      id_pessoa: ['', Validators.required],
      id_grupo: ['', Validators.required],
      ano: ['', Validators.required],
      semestre: ['', Validators.required],
      papel: ['', Validators.required]
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
    this.conn.get("pessoas/1/100").subscribe(res => {
      this.pessoas = res
    })

    this.conn.get("grupos/1/100").subscribe(res => {
      this.grupos = res
    })
  }

  Refresh() {
    this.conn.get("pessoasgrupos/included/1/100").subscribe(res => {
      this.pessoa_grupo = res
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
    this.dado = this.pessoa_grupo[i]

    this.form.controls.id_pessoa.setValue(this.dado.id_pessoa)
    this.form.controls.id_grupo.setValue(this.dado.id_grupo)
    this.form.controls.ano.setValue(this.dado.ano)
    this.form.controls.semestre.setValue(this.dado.semestre)
    this.form.controls.papel.setValue(this.dado.papel)
    this.editando = true
  }

  Save() {
    
    if (this.editando) {
      this.conn.put(`pessoasgrupos`, {
        id: this.dado.id,
        id_pessoa: Number(this.form.value.id_pessoa),
        id_grupo: Number(this.form.value.id_grupo),
        ano: Number(this.form.value.ano),
        semestre: Number(this.form.value.semestre),
        papel: this.form.value.papel
      }).subscribe(() => {
        this.Refresh()
      }, err => {
        console.log(err)
        alert('Erro ao atualizar o dado.')
      })
    }
    else {
      this.conn.post('pessoasgrupos', {
        id: this.idFixer + 1,
        id_pessoa: Number(this.form.value.id_pessoa),
        id_grupo: Number(this.form.value.id_grupo),
        ano: Number(this.form.value.ano),
        semestre: Number(this.form.value.semestre),
        papel: this.form.value.papel
      }).subscribe(() => {
        this.Refresh()
        this.adicionando = false
      }, err => {
        alert('Erro ao inserir o dado.')
        console.log(err)})
    }
  }

  Delete() {
    this.conn.delete(`pessoasgrupos/${this.dado.id}`).subscribe(res => {
      this.Refresh()
    }, err => {
      alert('Erro ao deletar o registro.')
    })
  }

  LimparForm() {
    this.form.controls.id_pessoa.setValue('')
    this.form.controls.id_grupo.setValue('')
    this.form.controls.ano.setValue('')
    this.form.controls.semestre.setValue('')
    this.form.controls.papel.setValue('')
    this.adicionando = false
    this.editando = false
  }

  Cancel() {
    this.LimparForm()
  }

}
