import { FormControl } from '@angular/forms';

const LOWERCASE_REGEX = /[a-z]/;
const UPPERCASE_REGEX = /[A-Z]/;
const NUMBER_REGEX = /[0-9]/;
const SYMBOL_REGEX = /[$-/:-?{-~!"^_`\[\]]/;

/**
 * Validates Password Strength
 *
 * @param {FormControl} control
 * @returns {{ [s: string]: boolean }}
 */
export function passwordStrengthValidator(control: FormControl): { [s: string]: boolean } {

    // Pass validation if password control is null, undefined, or empty string.
    //  If this is a new entry, the required validator will make the form invalid.
    //  If this is an edit, this means the password is not changing.

    const password: string = control.value;
    if (typeof password !== 'string') {
        if (password === null || password === undefined) {
            return null;
        }

        return { passwordStrengthInvalid: true };
    }

    const length = password.length;
    if (!length) {
        return null;
    }

    const issues = [];

    // Fail validation if password is not 8 - 32 characters in length
    if (length < 8) {
        issues.push('passwordStrengthTooShort');
    } else if (length > 32) {
        issues.push('passwordStrengthTooLong');
    }

    let categories = 0;
    if (LOWERCASE_REGEX.test(password)) {
        categories++;
    }
    if (UPPERCASE_REGEX.test(password)) {
        categories++;
    }
    if (NUMBER_REGEX.test(password)) {
        categories++;
    }
    if (SYMBOL_REGEX.test(password)) {
        categories++;
    }

    /**
     * Fail validation if password does not contain characters from 3 of the 4 following groups:
     *      uppercase letters
     *      lowercase letters
     *      numbers
     *      symbols
     */
    if (categories < 3) {
        issues.push('passwordStrengthCategories')
    }

    if (issues.length) {
        const error: { [s: string]: boolean } = { passwordInvalid: true };
        issues.forEach(issue => error[issue] = true);
        return error;
    }

    return null;
}

export function formatPasswordStrengthValidationErrors(errors: { [s: string]: boolean }): string {

    const messageErrors = [];
    if (errors['passwordStrengthTooShort']) {
        messageErrors.push('8 character minimum');
    }
    if (errors['passwordStrengthTooLong']) {
        messageErrors.push('32 character maximum');
    }
    if (errors['passwordStrengthCategories']) {
        messageErrors.push(
            'must contain characters from 3 of the 4 following groups: uppercase letters, lowercase letters, numbers, symbols');
    }

    if (messageErrors.length) {
        return `Insuffient Password Strength (${messageErrors.join(', ')})`;
    }

    return '';
}
