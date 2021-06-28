import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DynamicDivsComponent } from './dynamic-divs.component';

const routes: Routes = [ 
    { 
      path:'', 
      component: DynamicDivsComponent
    }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DynamicDivsComponent]
})
export class DynamicDivsModule { }
