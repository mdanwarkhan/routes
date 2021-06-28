import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CountdownSubjectComponent } from './countdown-subject.component';
import { CountdownInputComponent } from './countdown-input/countdown-input.component';
import { CountdownOutputComponent } from './countdown-output/countdown-output.component';
import { CountdownTimelogComponent } from './countdown-timelog/countdown-timelog.component';
import { CountdownClickComponent } from './countdown-click/countdown-click.component';

const routes: Routes = [ 
    { 
      path:'', 
      component: CountdownSubjectComponent
    }
  ];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CountdownSubjectComponent, CountdownInputComponent, CountdownOutputComponent, CountdownTimelogComponent, CountdownClickComponent]
})
export class CountdownSubjectModule { }
