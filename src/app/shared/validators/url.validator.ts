import { FormControl } from '@angular/forms';

const REGEX = new RegExp([
    // protocol:
    /^https?:\/\//,
    // hostname:
    /(?:[a-z0-9](?:-?[a-z0-9])*(?:\.(?=[a-z0-9]))?)+/,
    // port:
    /(?::\d{1,5})?/,
    // url:
    /(?:\/[^\s]*)?$/
].map(r => r.source).join(''), 'i');

/**
 * Validates URLs
 *
 * @param {FormControl} control
 * @returns {{ [s: string]: boolean }}
 */
export function urlValidator(control: FormControl): { [s: string]: boolean } {

    if (typeof control.value !== 'string') {
        if (control.value === null || control.value === undefined) {
            return null;
        }

        return { urlInvalid: true };
    }

    if (!control.value.length) {

        return null;
    }

    return control.value.match(REGEX) ? null : { urlInvalid: true };
}
