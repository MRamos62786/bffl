
/**
 * Updates or deletes an object's property based on the value
 *
 * @export
 * @param {{ [key: string]: any; }} obj
 * @param {string} prop
 * @param {string} value
 */
export function updateOptionalValue(obj: { [key: string]: any; }, prop: string, value: any) {

    if (Array.isArray(value) && !value.length) {
        delete obj[prop];
        return;
    }

    if (typeof value === 'boolean' && value === false) {
        obj[prop] = value;
        return;
    }

    if (!value) {
        delete obj[prop];
        return;
    }

    obj[prop] = value;
}

/**
 * Updates or deletes an object's property based on the value
 *
 * @export
 * @param {{ [key: string]: any; }} obj
 * @param {string} prop
 * @param {string} value
 */
export function updateOptionalString(obj: { [key: string]: any; }, prop: string, value: string) {
    updateOptionalValue(obj, prop, value);
}

/**
 * Updates or deletes an object's property based on the value
 *
 * @export
 * @param {{ [key: string]: any; }} obj
 * @param {string} prop
 * @param {any[]} value
 */
export function updateOptionalArray(obj: { [key: string]: any; }, prop: string, value: any[]) {
    updateOptionalValue(obj, prop, value);
}

function sortValue(value: any): any {

    if (typeof value === 'object') {

        if (value === null) {
            return null;
        } else if (Array.isArray(value)) {
            return value.map(arrayValue => sortValue(arrayValue));
        } else {
            return sortObjectProperties(value);
        }
    }

    return value;
}

function sortObjectProperties(object: { [key: string]: any; }): { [key: string]: any; } {

    const sortedPropertiesObject: { [key: string]: any; } = {};
    Object.keys(object).sort().forEach(key => {

        sortedPropertiesObject[key] = sortValue(object[key]);
    });
    return sortedPropertiesObject;
}

/**
 * Compares that objects are deep equals (simple but inefficient)
 *
 * @export
 * @param {...{ [key: string]: any; }[]} objects
 * @returns {boolean}
 */
export function deepEqualObject(...objects: { [key: string]: any; }[]): boolean {

    const jsons = objects.map(object => JSON.stringify(sortObjectProperties(object)));
    for (let i = 1; i < jsons.length; i++) {

        if (jsons[i] !== jsons[0]) {
            return false;
        }
    }

    return true;
}
