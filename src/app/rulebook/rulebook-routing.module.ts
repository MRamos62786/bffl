import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular';
import { RulebookComponent } from './rulebook.component';

const routes: Routes = [
  {
    path: 'year/:year',
    component: RulebookComponent,
  },
  {
    path: '',
    redirectTo: 'year/2017',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ClarityModule],
  declarations: [RulebookComponent],
  exports: [RouterModule, RulebookComponent]
})
export class RulebookRoutingModule { }
