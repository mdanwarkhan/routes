import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: 'divs', loadChildren: () => import('./dynamic-divs/dynamic-divs.module').then(m => m.DynamicDivsModule)},
  { path: 'countdown-decorators', loadChildren: () => import('./countdown-decorators/countdown-decorators.module').then(m => m.CountdownDecoratorsModule)},
  { path: 'list-grid', loadChildren: () => import('./grid-list/grid-list.module').then(m => m.GridListModule)},
  { path: 'students-table', loadChildren: () => import('./students-table/students-table.module').then(m => m.StudentsTableModule)},
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }