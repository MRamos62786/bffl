import { ValidatorFn, FormControl } from '@angular/forms';


export interface NumberValidatorParams {
    min?: number;
    max?: number;
}

/**
 * Generates a number validator
 *
 * @param {FormControl} control
 * @returns {{ [s: string]: boolean }}
 */
export function getNumberValidator(params: NumberValidatorParams): ValidatorFn {

    return (control: FormControl): { [s: string]: boolean } => {

        const val: number = control.value;

        if (val === null || val === undefined) {
            return null;
        }

        if (isNaN(val)) {
            return { numberInvalid: true, NaN: true };
        }

        if (params.min && val < params.min) {
            return { numberInvalid: true, lessThanMin: true };
        }

        if (params.max && val > params.max) {
            return { numberInvalid: true, greaterThanMax: true };
        }

        return null;
    };
}

export const PORT_MIN = 1;
export const PORT_MAX = 65535;

export function getPortValidator(): ValidatorFn {
    return getNumberValidator({ min: PORT_MIN, max: PORT_MAX });
}
