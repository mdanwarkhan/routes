import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridListComponent } from './grid-list.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [ 
    { 
      path:'', 
      component: GridListComponent
    }
  ];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GridListComponent]
})
export class GridListModule { }
