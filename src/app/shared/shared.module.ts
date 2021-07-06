import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { DropdownDirective } from './directives/dropdown.directive';
import { NumbersOnlyInputDirective } from './directives/numbers-only.directive';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    DropdownDirective,
    NumbersOnlyInputDirective,
    TruncatePipe,
    ErrorComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownDirective,
    NumbersOnlyInputDirective,
    TruncatePipe,
    ErrorComponent,
    HttpClientModule,
    FormsModule
  ]
})
export class SharedModule { }
