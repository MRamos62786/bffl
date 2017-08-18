
/* tslint:disable:no-bitwise */
/**
 * Returns a random v4 UUID of the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx,
 * where each x is replaced with a random hexadecimal digit from 0 to f,
 * and y is replaced with a random hexadecimal digit from 8 to b.
 *
 * https://gist.github.com/jed/982883
 */
function b(a?: any) {
    return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : (<any>[1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b)
}

/**
 * Generate RFC4122 Compliant Version 4 UUID
 */
export function uuidV4(): string {
    return b();
}
