import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsTableComponent } from './students-table.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [ 
    { 
      path:'', 
      component: StudentsTableComponent
    }
  ];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentsTableComponent]
})
export class StudentsTableModule { }
