import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilRecursoComponent } from './perfil-recurso.component';

describe('PerfilRecursoComponent', () => {
  let component: PerfilRecursoComponent;
  let fixture: ComponentFixture<PerfilRecursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilRecursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
