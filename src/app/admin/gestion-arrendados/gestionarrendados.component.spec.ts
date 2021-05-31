import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarrendadosComponent } from './gestionarrendados.component';

describe('GestionarrendadosComponent', () => {
  let component: GestionarrendadosComponent;
  let fixture: ComponentFixture<GestionarrendadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarrendadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarrendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
