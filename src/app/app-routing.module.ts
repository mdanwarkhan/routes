import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: 'route-1', loadChildren: () => import('./rotating-banner/rotating-banner.module').then(m => m.RotatingBannerModule) },
  { path: 'route-2', loadChildren: () => import('./grid-list/grid-list.module').then(m => m.GridListModule) },
  { path: 'route-3', loadChildren: () => import('./countdown-decorators/countdown-decorators.module').then(m => m.CountdownDecoratorsModule) },
  { path: 'route-4', loadChildren: () => import('./countdown-subject/countdown-subject.module').then(m => m.CountdownSubjectModule) },
  { path: 'route-5', loadChildren: () => import('./students-table/students-table.module').then(m => m.StudentsTableModule) },
  { path: 'route-6', loadChildren: () => import('./dynamic-divs/dynamic-divs.module').then(m => m.DynamicDivsModule) },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }