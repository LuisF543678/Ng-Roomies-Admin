import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionreportesComponent } from './gestionreportes.component';

describe('GestionreportesComponent', () => {
  let component: GestionreportesComponent;
  let fixture: ComponentFixture<GestionreportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionreportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionreportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
