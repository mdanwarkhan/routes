import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RotatingBannerComponent } from './rotating-banner.component';

const routes: Routes = [ 
    { 
      path:'', 
      component: RotatingBannerComponent
    }
  ];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RotatingBannerComponent]
})
export class RotatingBannerModule { }
