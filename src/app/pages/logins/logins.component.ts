import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnectApiService } from 'src/app/services/connect-api.service';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.scss']
})
export class LoginsComponent implements OnInit {

  logins = []
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
      user: ['', Validators.required],
      password: ['', Validators.required],
      id_perfil: ['', Validators.required],
      id_pessoa: ['', Validators.required]
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
    this.conn.get("logins/1/100").subscribe(res => {
      this.logins = res
      console.log(res)

      res.map(r => {
        if (r.id > this.idFixer)
          this.idFixer = r.id
      })

      this.LimparForm()
    }, err => console.log(err))
  }

  Load(i) {
    this.dado = this.logins[i]

    this.form.controls.user.setValue(this.dado.user)
    this.form.controls.password.setValue(this.dado.password)
    this.form.controls.id_perfil.setValue(this.dado.id_perfil)
    this.form.controls.id_pessoa.setValue(this.dado.id_pessoa)
    this.editando = true
  }

  Save() {
    
    if (this.editando) {
      this.conn.put(`logins`, {
        id: this.dado.id,
        user: this.form.value.user,
        password: this.form.value.password,
        id_perfil: this.form.value.id_perfil,
        id_pessoa: this.form.value.id_pessoa
      }).subscribe(() => {
        this.Refresh()
      }, err => {
        console.log(err)
        alert('Erro ao atualizar o dado.')
      })
    }
    else {
      console.log( {
        id: this.idFixer + 1,
        user: this.form.value.user,
        password: this.form.value.password,
        id_perfil: this.form.value.id_perfil,
        id_pessoa: this.form.value.id_pessoa
      });
      
      this.conn.post('logins', {
        id: this.idFixer + 1,
        user: this.form.value.user,
        password: this.form.value.password,
        id_perfil: Number(this.form.value.id_perfil),
        id_pessoa: Number(this.form.value.id_pessoa)
      }).subscribe(() => {
        this.Refresh()
        this.adicionando = false
      }, err => {
        alert('Erro ao inserir o dado.')
        console.log(err)})
    }
  }

  Delete() {
    this.conn.delete(`logins/${this.dado.id}`).subscribe(res => {
      this.Refresh()
    }, err => {
      alert('Erro ao deletar o registro.')
    })
  }

  LimparForm() {
    this.form.controls.user.setValue('')
    this.form.controls.password.setValue('')
    this.form.controls.id_perfil.setValue('')
    this.form.controls.id_pessoa.setValue('')
    this.adicionando = false
    this.editando = false
  }

  Cancel() {
    this.LimparForm()
  }

}
