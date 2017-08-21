import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular';

import { StatsComponent } from './stats.component';

const routes: Routes = [
  {
    path: 'year/:year',
    component: StatsComponent,
  },
  {
    path: '',
    redirectTo: 'year/all-time',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ClarityModule],
  declarations: [StatsComponent],
  exports: [RouterModule, StatsComponent]
})
export class StatsRoutingModule { }
