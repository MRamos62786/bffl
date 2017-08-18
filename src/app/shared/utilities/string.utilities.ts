
/**
 * Reimplementation of PHP's explode function.
 */
export function explode(delimiter: string, source: string, limit?: number): string[] {

    let arr: string[];
    if (limit === 0) {

        arr = [source];
    } else {

        arr = source.split(delimiter);
        if (limit >= 1 && limit < arr.length) {

            const t = arr.splice(0, limit);
            t.push(arr.join(delimiter));
            arr = t;
        }
    }

    return arr;
}


/**
 * Remove all contiguous sequences of any of the characters in @a anyOf from the beginning and end of @a from.
 *
 * @export
 * @param {string} anyOf the characters to trim
 * @param {string} from the string to trim
 * @returns {string} the trimmed string
 */
export function trim(anyOf: string, from: string): string {

    if (from.length === 0) {
        return from;
    }

    let tl = 0;
    let tr = 0;

    for (tl = 0; tl < from.length; tl++) {

        if (anyOf.indexOf(from[tl]) < 0) {

            break; // exit for-loop
        }
    }

    if (tl < from.length) {

        for (tr = from.length; tr > 0; tr--) {

            if (anyOf.indexOf(from[tr - 1]) < 0) {

                break; // exit for-loop
            }
        }
    }

    return from.slice(tl, tr);
}
