import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';

import { ResourceSelectModule } from '../resource-select/resource-select.module'
import { FormArrayEditorComponent } from './form-array-editor.component';
import { FocusElementModule } from '../../directives/focus-element/focus-element.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ClarityModule.forChild(),
        FocusElementModule,
        ResourceSelectModule
    ],
    declarations: [
        FormArrayEditorComponent
    ],
    exports: [
        FormArrayEditorComponent
    ]
})
export class FormArrayEditorModule { }
