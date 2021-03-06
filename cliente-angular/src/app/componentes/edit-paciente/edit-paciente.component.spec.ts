import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditPacienteComponent } from './edit-paciente.component';

describe('EditPacienteComponent', () => {
  let component: EditPacienteComponent;
  let fixture: ComponentFixture<EditPacienteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
