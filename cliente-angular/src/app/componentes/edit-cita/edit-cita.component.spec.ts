import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditCitaComponent } from './edit-cita.component';

describe('EditCitaComponent', () => {
  let component: EditCitaComponent;
  let fixture: ComponentFixture<EditCitaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
