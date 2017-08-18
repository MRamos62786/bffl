import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FocusElementDirective } from './focus-element.directive';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        FocusElementDirective
    ],
    exports: [
        FocusElementDirective
    ]
})
export class FocusElementModule { }
