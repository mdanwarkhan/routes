import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { DropdownDirective } from './directives/dropdown.directive';
import { NumbersOnlyInputDirective } from './directives/numbers-only.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    DropdownDirective,
    NumbersOnlyInputDirective
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownDirective,
    NumbersOnlyInputDirective,
    HttpClientModule,
    FormsModule
  ]
})
export class SharedModule { }
