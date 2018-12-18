import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';


@Component({
  selector: 'listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers:[ PeticionesService ]
})
export class ListarComponent implements OnInit {
    public personas: [];
  constructor(
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this._peticionesService.getPersonas().subscribe(
      result=> {
        this.personas=result;
        console.log('Se recupero los datos de una manera correcta');
    },
    error=>{
      console.log(<any>error)
    });
  }

}
