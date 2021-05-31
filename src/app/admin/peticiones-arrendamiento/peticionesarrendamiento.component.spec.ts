import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionesarrendamientoComponent } from './peticionesarrendamiento.component';

describe('PeticionesarrendamientoComponent', () => {
  let component: PeticionesarrendamientoComponent;
  let fixture: ComponentFixture<PeticionesarrendamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeticionesarrendamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionesarrendamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
