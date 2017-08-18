import { AbstractControl, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';

import { CanComponentDeactivate } from '../services/can-deactivate-guard.service';

function setStringControlsMutuallyExclusiveGuts(ctrls: FormControl[], moreCtrls: FormControl[], unsubscribe: Observable<any>) {
    ctrls.forEach(ctrl => {

        ctrl.valueChanges.takeUntil(unsubscribe).subscribe((value: string) => {

            if (typeof value === 'string' && value.length) {

                moreCtrls.forEach(moreCtrl => {
                    if (moreCtrl.enabled) {
                        moreCtrl.disable();
                    }
                });
            } else {

                for (let i = 0; i < ctrls.length; i++) {
                    const innerCtrl = ctrls[i];

                    if (innerCtrl !== ctrl && typeof innerCtrl.value === 'string' && innerCtrl.value.length) {
                        return;
                    }
                }

                moreCtrls.forEach(moreCtrl => {
                    if (moreCtrl.disabled) {
                        moreCtrl.enable();
                    }
                });
            }
        });
    });
}

export function setStringControlsMutuallyExclusive(ctrls: FormControl[], moreCtrls: FormControl[], unsubscribe: Observable<any>) {

    setStringControlsMutuallyExclusiveGuts(ctrls, moreCtrls, unsubscribe);
    setStringControlsMutuallyExclusiveGuts(moreCtrls, ctrls, unsubscribe);
}

export abstract class CommonFormComponent implements CanComponentDeactivate {

    abstract editting: boolean;

    ctrlInvalid(ctrl: AbstractControl): boolean {
        return ctrl.invalid && (ctrl.dirty || ctrl.touched);
    }

    ctrlHasError(ctrl: AbstractControl, error: string): boolean {
        if (!ctrl.errors) {
            return false;
        }

        return ctrl.errors[error];
    }

    canDeactivate(): boolean {
        if (this.editting) {
            return confirm('Changes will not be saved. Navigate to another page anyway?');
        }

        return true;
    }
}
