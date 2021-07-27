import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListarCitaComponent } from './listar-cita.component';

describe('ListarCitaComponent', () => {
  let component: ListarCitaComponent;
  let fixture: ComponentFixture<ListarCitaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
