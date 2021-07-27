import { Component, OnInit, OnDestroy} from '@angular/core';
import {CitasService} from '../../servicios/citas.service';
import {DoctorService} from '../../servicios/doctor.service';
import {PacientesService} from '../../servicios/pacientes.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  citas:any=[];
  doctores:any=[];
  pacientes:any=[];
  constructor(private service: CitasService, private doctorService:DoctorService, private pacientesService: PacientesService, private citasService: CitasService, private router:Router) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'
      }
    };
    this.listarCitas();
    this.listarDoctores();
    this.listarPacientes();
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }
  listarDoctores(){
    this.doctorService.getDoctores()
      .subscribe(
        data1=>{
          console.log(data1);
          this.doctores=data1;
          this.dtTrigger.next();
      },
        err => 
        console.log(err)
      );
    }
    listarPacientes(){
      this.pacientesService.getPacientes()
      .subscribe(
        data2=>{
          console.log(data2);
          this.pacientes=data2;
          this.dtTrigger.next();
      },
        err => 
        console.log(err)
      );
    }
  listarCitas(){
    this.service.getCitas()
    .subscribe(
      data=>{
        console.log(data);
        this.citas=data;
        this.dtTrigger.next();
    },
      err => 
      console.log(err)
    );
  }
  
  borrarCita(id: string){
    this.service.deleteCita(id).subscribe(
      res =>{
        console.log(res);
        this.listarCitas();
      },
      err => console.log(err)
    )
  }

  ObtenerPaciente(id: string){
    for(let paciente of this.pacientes){
      if(paciente.idPaciente==id){
        return paciente.nombresPaciente +' '+paciente.apellidosPaciente
      }
    }

  }

  ObtenerDoctor(id: string){
    for(let doctor of this.doctores){
      if(doctor.idDoctor==id){
        return doctor.nombresDoctor +' '+doctor.apellidosDoctor
      }
    }

  }

}
