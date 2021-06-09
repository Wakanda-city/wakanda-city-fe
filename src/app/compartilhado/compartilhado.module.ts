import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatorErrorMessageComponent } from './components/validator-error-message/validator-error-message.component';



@NgModule({
  declarations: [ValidatorErrorMessageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ValidatorErrorMessageComponent
  ]
})
export class CompartilhadoModule { }
