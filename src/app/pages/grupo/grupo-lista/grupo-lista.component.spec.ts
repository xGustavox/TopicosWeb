import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoListaComponent } from './grupo-lista.component';

describe('GrupoListaComponent', () => {
  let component: GrupoListaComponent;
  let fixture: ComponentFixture<GrupoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
