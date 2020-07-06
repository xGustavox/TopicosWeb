import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaGrupoComponent } from './pessoa-grupo.component';

describe('PessoaGrupoComponent', () => {
  let component: PessoaGrupoComponent;
  let fixture: ComponentFixture<PessoaGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
