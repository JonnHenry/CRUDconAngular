import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { Persona } from '../services/persona';

@Component({
  selector: 'crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
  providers: [ PeticionesService ]
})
export class CrearComponent implements OnInit {

  public persona: Persona;

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.persona = new Persona('','','');
  }
  ngOnInit() {
  }

  onSubmit(form){
    this._peticionesService.addPersona(this.persona).subscribe(
      response=>{
        form.reset();
        alert(response.respuesta);
        
      },
      error=>{
        console.log(<any>error);
      });
  }



}
