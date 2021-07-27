import { Component, OnInit, HostBinding } from '@angular/core';
import { Cita } from "src/app/modelos/Cita";
import { CitasService } from 'src/app/servicios/citas.service';
import { PacientesService} from 'src/app/servicios/pacientes.service';
import { DoctorService } from 'src/app/servicios/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cita',
  templateUrl: './add-cita.component.html',
  styleUrls: ['./add-cita.component.css']
})
export class AddCitaComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  cita: Cita={
    idCita: 0,
    idPaciente: 0,
    idDoctor: 0,
    fechaCita: '',
    horaCita: '',
  };

  pacientes:any=[];

  doctores: any=[];

  citas: any=[];

  constructor(private doctorService:DoctorService, private pacientesService: PacientesService, private citasService: CitasService, private router:Router) { }

  ngOnInit(): void {
    this.listarPacientes();
    this.listarDoctores();
    this.listarCitas();
  }
  listarPacientes(){
    this.pacientesService.getPacientes()
    .subscribe(
      data=>{
        console.log(data);
        this.pacientes=data;
    },
      err => 
      console.log(err)
    );
  }
  listarDoctores(){
    this.doctorService.getDoctores()
    .subscribe(
      data=>{
        console.log(data);
        this.doctores=data;
    },
      err => 
      console.log(err)
    );
  }
  guardarCita(){
    delete this.cita.idCita;
    let a: boolean = true;
    if(this.citas.length!==0){
      for(let c of this.citas){
        if((c.fechaCita===this.cita.fechaCita)&&(c.horaCita===this.cita.horaCita)){
          a=false;
          window.alert("Ya existe una cita con esa fecha y hora");
        }
      }
    }
    if(a!==false){
      this.citasService.saveCita(this.cita)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/citas']);
        },
        err => console.error(err)
      );
    }
    
  }

    listarCitas(){
      this.citasService.getCitas()
      .subscribe(
        data1=>{
          console.log(data1);
          this.citas=data1;
      },
        err => 
        console.log(err)
      );
    }
  
    ValidarIngreso(){

    }

}
