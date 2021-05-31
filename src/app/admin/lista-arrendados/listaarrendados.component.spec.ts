import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaarrendadosComponent } from './listaarrendados.component';

describe('ListaarrendadosComponent', () => {
  let component: ListaarrendadosComponent;
  let fixture: ComponentFixture<ListaarrendadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaarrendadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaarrendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
