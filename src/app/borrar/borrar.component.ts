import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css'],
  providers: [ PeticionesService]
})
export class BorrarComponent implements OnInit {
  public delete: any;
  constructor(
      public _peticionesService: PeticionesService
  ) {
    this.delete={
      "id" : ""
    }
   }

  ngOnInit() {
  }

  onSubmit(form){
    this._peticionesService.deletePersona(this.delete.id).subscribe(
      response=>{
        form.reset();
        alert(response.respuesta);
        
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
