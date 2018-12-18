import { Routes, RouterModule } from '@angular/router';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { BorrarComponent } from './borrar/borrar.component';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ModuleWithProviders } from '@angular/core';


const appRoutes: Routes = [
  {path: '',component : CrearComponent},
  {path: 'create',component: CrearComponent},
  {path: 'delete',component: BorrarComponent},
  {path: 'update', component: ActualizarComponent},
  {path: 'read' , component: ListarComponent},
  {path: '**', component: NotfoundComponent}
];

export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
