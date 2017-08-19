import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular';

import { TeamsComponent } from './teams.component';

const routes: Routes = [
  {
    path: 'all-time',
    component: TeamsComponent
  },
  {
    path: 'year/:year',
    component: TeamsComponent,
  },
  {
    path: '',
    redirectTo: 'all-time',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ClarityModule],
  declarations: [TeamsComponent],
  exports: [RouterModule, TeamsComponent]
})
export class TeamsRoutingModule { }
