import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulebookRoutingModule } from './rulebook-routing.module';
import { RulebookComponent } from './rulebook.component';

@NgModule({
  imports: [
    CommonModule,
    RulebookRoutingModule
  ],
  declarations: [RulebookComponent]
})
export class RulebookModule { }
