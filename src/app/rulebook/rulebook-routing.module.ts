import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { RulebookComponent } from './rulebook.component';

const routes: Routes = [
  {
    path: '',
    component: RulebookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // declarations: [RulebookComponent, PdfViewerComponent],
  declarations: [RulebookComponent],
  exports: [RouterModule, RulebookComponent]
})
export class RulebookRoutingModule { }
