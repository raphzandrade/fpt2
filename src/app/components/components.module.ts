import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCardComponent } from './my-card/my-card.component';



@NgModule({
  declarations: [
    MyCardComponent
  ],
  exports: [MyCardComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
