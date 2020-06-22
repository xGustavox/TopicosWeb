import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotacaoListaComponent } from './anotacao-lista.component';

describe('AnotacaoListaComponent', () => {
  let component: AnotacaoListaComponent;
  let fixture: ComponentFixture<AnotacaoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotacaoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotacaoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
