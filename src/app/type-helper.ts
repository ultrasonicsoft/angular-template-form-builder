export class TypeHelper {
    public static getType(value) {

            if (this.isNumber(value)) return 'number';
        if (this.isBoolean(value)) return 'checkbox';
        if (this.isDate(value)) return 'date';
        if (this.isString(value)) return 'text';
        
    }
    public static isString(value) {
        return typeof value === 'string' || value instanceof String;
    };

    public static isNumber(value) {
        return typeof value === 'number' && isFinite(value);
    };

    public static isBoolean(value) {
        return typeof value === 'boolean';
    };

    public static isDate(value) {
        let result = value instanceof Date || Date.parse(value);
        return result;
    };

    public static isArray(value) {
        return Array.isArray(value);
    };

    public static isObject(value) {
        return value && typeof value === 'object' && value.constructor === Object;
    };

    public static isNull(value) {
        return value === null;
    };

    public static isUndefined(value) {
        return typeof value === 'undefined';
    };

}