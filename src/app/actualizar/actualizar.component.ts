import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css'],
  providers: [ PeticionesService ]
})
export class ActualizarComponent implements OnInit {
  
    public update: any;
    public id :number;

  constructor(
    private _peticionesService: PeticionesService
  ) { 
      this.update={
        "nombre":"",
        "apellidos":"",
        "telefono":""
      }
      this.id=0;
  }

  ngOnInit() {
  }

  onSubmit(form){
    this._peticionesService.updatePersona(this.update, this.id).subscribe(
      response=>{
        form.reset();
        alert('Se ingreso los datos de: '+response.nombre+' '+response.apellidos);
        
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
