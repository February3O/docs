import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShaderComponent } from './shader.component';
import { StarComponent } from './star/star.component';
import { CubeComponent } from './cube/cube.component';
import { ShanghaiComponent } from './shanghai/shanghai.component';
import { RoomComponent } from './room/room.component';
const routes: Routes = [
  // {
  //   path: '', redirectTo: '/', pathMatch: 'full',
  // },
  {
    path: '',
    component: ShaderComponent,
    children: [
      {
        path: "star",
        component: StarComponent
      },
      {
        path: "cube",
        component: CubeComponent
      },
      {
        path: "shanghai",
        component: ShanghaiComponent
      },
      {
        path: "room",
        component: RoomComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShaderRoutingModule { }
