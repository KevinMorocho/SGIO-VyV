import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListarPacienteComponent } from './listar-paciente.component';

describe('ListarPacienteComponent', () => {
  let component: ListarPacienteComponent;
  let fixture: ComponentFixture<ListarPacienteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
