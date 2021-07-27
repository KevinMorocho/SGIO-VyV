import { Component, OnInit,OnDestroy } from '@angular/core';
import {DoctorService} from '../../servicios/doctor.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-listar-doctor',
  templateUrl: './listar-doctor.component.html',
  styleUrls: ['./listar-doctor.component.css']
})
export class ListarDoctorComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject()

  doctores:any=[];
  constructor(private service: DoctorService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'
      }
    };
    this.listarDoctores();
  }
    
  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }	  
  
  listarDoctores(){
  this.service.getDoctores()
    .subscribe(
      data=>{
        console.log(data);
        this.doctores=data;
        this.dtTrigger.next();
    },
      err => 
      console.log(err)
    );
  }
  borrarDoctor(id: string){
    this.service.deleteDoctor(id).subscribe(
      res =>{
        console.log(res);
        this.listarDoctores();
      },
      err => console.log(err)
    )
  }
}
