import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficopizzaComponent } from './graficopizza.component';



@NgModule({
  declarations: [GraficopizzaComponent],
  imports: [
    CommonModule
  ],
  exports:[GraficopizzaComponent]
})
export class GraficopizzaModule { }
