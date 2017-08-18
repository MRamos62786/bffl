import {
    AfterViewChecked,
    Component,
    Input,
    EventEmitter
} from '@angular/core';
import {
    FormArray,
    FormControl,
    Validators
} from '@angular/forms';

@Component({
    selector: 'form-array-editor',
    templateUrl: './form-array-editor.component.html',
    styles: [
        `
clr-icon {
    cursor: pointer;
    margin-top: 6px;
}

.row {
    flex-wrap: nowrap;
}
        `
    ]
})
export class FormArrayEditorComponent implements AfterViewChecked {

    @Input() array: FormArray;
    @Input() textarea?: boolean;
    @Input() resourceSelectUrl?: boolean;
    @Input() add?: () => FormControl;

    private focus: EventEmitter<void>;
    focusEventEmitters = new WeakMap<FormControl, EventEmitter<void>>();
    selected: FormControl[];

    constructor() { }

    addCtrl(): void {

        const crtl = this.add ? this.add() : new FormControl(null, Validators.required);
        const emitter = new EventEmitter<void>();
        this.array.push(crtl);
        this.focusEventEmitters.set(crtl, emitter);
        this.focus = emitter;
    }

    removeCtrl(index: number): void {

        this.array.removeAt(index);
    }

    ctrlInvalid(ctrl: FormControl): boolean {
        return ctrl.invalid && (ctrl.dirty || ctrl.touched);
    }

    ngAfterViewChecked() {

        if (this.focus) {
            this.focus.emit();
            this.focus = null;
        }
    }

}
