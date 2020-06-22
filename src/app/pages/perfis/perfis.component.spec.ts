import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfisComponent } from './perfis.component';

describe('PerfisComponent', () => {
  let component: PerfisComponent;
  let fixture: ComponentFixture<PerfisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
