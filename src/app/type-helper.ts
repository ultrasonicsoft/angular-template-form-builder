export class TypeHelper {
    public static getType(value) {
        let type = '';

        if (this.isString(value)) type = 'text';
        if (this.isNumber(value)) type = 'number';
        if (this.isBoolean(value)) type = 'checkbox';
        if (this.isDate(value)) type = 'date';

        return type;
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
        return value instanceof Date;
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