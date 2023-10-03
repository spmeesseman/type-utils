/* eslint-disable jsdoc/check-param-names */
// @ts-check
/**
 * @template T
 * @param {T | Set<T> | Array<T> | IterableIterator<T>} v Variable to check to see if it's an array
 * @param {boolean} [shallow] If `true`, and  `arr` is an array, return a shallow copy
 * @param {boolean} [allowEmpStr] If `false`, return empty array if isString(v) and isEmpty(v)
 * @returns {Array<NonNullable<T>>}
 */
/**
 * @template T
 * @param {T | T[] | IterableIterator<T> | Set<T> | undefined} v Variable to check to see if it's an array
 * @param {boolean} [shallow] If `true`, and  `arr` is an array, return a shallow copy
 * @param {boolean} [allowEmpStr] If `false`, return empty array if isString(v) and isEmpty(v)
 * @returns {NonNullable<T>[]}
 */
export function asArray<T>(v: T | IterableIterator<T> | Set<T> | T[], shallow?: boolean, allowEmpStr?: boolean): NonNullable<T>[];
/**
 * @template T
 * @param {T[]} arr
 * @param {...T} items
 * @returns {T[]}
 */
export function pushUniq<T>(arr: T[], ...items: T[]): T[];
/**
 * @template T
 * @param {T[]} arr
 * @param {...T} items
 * @returns {T}
 */
export function pushReturn<T>(arr: any[], ...items: T[]): T[];
/**
     * @template T
     * @param {T[]} a
     * @returns {T[]}
     */
export function uniq<T>(a: T[]): T[];
 /**
  * @template T, U
  * @typedef {object} MergeOptions
  * @property {boolean} onlyIf
  * @property {boolean} deepObj
  * @property {boolean} deepArr
  * @property {[ (T | Partial<T> | undefined), ...(U | T | Partial<T> | undefined)[]]} values
  */
export declare interface MergeOptions<T, U> { onlyIf?: boolean; deepObj?: boolean;  deepArr?: boolean; values?: (T | Partial<T> | U)[] }
/**
 * @template T
 * @param {T | T[] | any} v Variable to check to see if it's an array
 * @param {boolean} [allowEmp] If `true`, return true if v is an empty array
 * @returns {v is T[]} v is T[]
 */
export function isArray<T>(v: T | T[] | any, allowEmp?: boolean): v is T[];
/**
 * @param {any} v Variable to check to see if it's a primitive boolean type
 * @returns {v is boolean} boolean
 */
export function isBoolean(v: any): v is boolean;
/**
 * @param {any} v
 * @returns {boolean} boolean
 */
export function isClass(v: any): boolean;
/**
 * @param {any} v
 * @returns {boolean} boolean
 */
export function isDefined(v: any): boolean;
/**
 * @param {string} path
 * @returns {boolean} boolean
 */
export function isDirectory(path: string): boolean;
/**
 * @param {any} v Variable to check to see if it's a Date instance
 * @returns {v is Date} v is Date
 */
export function isDate(v: any): v is Date;
/**
 * @param {any} v Variable to check for emptiness
 * @param {boolean} [allowEmpStr] If `true`, return non-empty if isString(v) and v === ""
 * @returns {v is null | undefined | "" | [] | Record<string, never>} v is null | undefined | "" | [] | {}
 */
export function isEmpty(v: any, allowEmpStr?: boolean): v is "" | [] | Record<string, never>;
/**
 * @param {any} v Variable to check to see if it's an error object
 * @returns {v is Error} v is Error
 */
export function isError(v: any): v is Error;
/**
 * @param {any} v Variable to check to see if it's a function
 * @returns {v is (...args: any) => any} v is Function
 */
export function isFunction(v: any): v is (...args: any) => any;
/**
 * @param {any} v Variable to check to see if it's null or undefined
 * @returns {v is null | undefined} v is null | undefined
 */
export function isNulled(v: any): v is null | undefined;
/**
 * @param {any} v Variable to check to see if it's an error object
 * @returns {v is number} v is number
 */
export function isNumber(v: any): v is number;
/**
 * @param {any} v Variable to check to see if it's an error object
 * @returns {boolean} boolean
 */
export function isNumeric(v: any): boolean;
/**
 * @template T
 * @param {T | undefined | null} v Variable to check to see if it's an array
 * @param {boolean} [allowArray] If `true`, return true if v is an array
 * @returns {v is Extract<T, object>} v is Object<T>
 */
export function isObject<T>(v: T | undefined | null, allowArray?: boolean): v is Extract<T, object>;
/**
 * @param {any} v Variable to check to see if it's and empty object
 * @returns {v is Record<string, never>} boolean
 */
export function isObjectEmpty(v: any): v is Record<string, never>;
/**
 * @param {any} v Variable to check to see if it's a primitive type (i.e. boolean / number / string)
 * @returns {v is boolean | number | string} v is boolean | number | string
 */
export function isPrimitive(v: any): v is string | number | boolean;
/**
 * @template T
 * @param {PromiseLike<T> | any} v Variable to check to see if it's a promise or thenable-type
 * @returns {v is PromiseLike<T>} v is PromiseLike<T>
 */
export function isPromise<T>(v: any): v is PromiseLike<T>;
/**
 * @param {any} v Variable to check to see if it's an array
 * @param {boolean} [notEmpty] If `false`, return false if v is a string of 0-length
 * @param {boolean} [stringifyable] If `true`, return true if v is an object and has .toString() method
 * @returns {v is string} v is string
 */
export function isString(v: any, notEmpty?: boolean, stringifyable?: boolean): v is string;
/**
 * @template {object | undefined}T
 * @template {Partial<T> | object | undefined} U
 * @param {T | Partial<T> | undefined} dst
 * @param {T | U | Partial<U>} src
 * @param {U} [defaults]
 * @returns {NonNullable<T & U>} NonNullable<T & U>
 * @throws {Error}
 */
export function apply<T extends object | undefined, U extends object | undefined | Partial<T>>(dst: T | Partial<T> | undefined, src: T | U | Partial<U> | undefined, defaults?: T | U | Partial<U>): NonNullable<T & U>;
/**
 * @template {object | undefined}T
 * @template {Partial<T> | object | undefined} U
 * @param {boolean} onlyIf merge only if key does not exist in dst object, unless {@link deepObj} is `true` and both dst and src values to merge are objects
 * @param {boolean} deepArr merge array values if both dst and src values to merge are arrays.  Othersise, dst array is set to cloned src array
 * @param {T | Partial<T> | undefined} dst
 * @param {T | U | Partial<T> | Partial<U> | undefined} src
 * @param {T | U | Partial<T> | Partial<U>} [defaults]
 * @returns {NonNullable<T & U>} NonNullable<T & U>
 * @throws {Error}
 */
export function applyExt<T extends object | undefined, U extends object | undefined | Partial<T>>(onlyIf: boolean, deepArr: boolean, dst: T | Partial<T> | undefined, src: T | U | Partial<U> | undefined, defaults?: T | Partial<T> | U | Partial<U>): NonNullable<T & U>;
/**
 * Copies all the properties of config to object if they don't already exist.
 *
 * @template {object | undefined} T
 * @template {T | Partial<T> | object | undefined} U
 * @param {T | Partial<T> | undefined} dst
 * @param {T | U | Partial<U> | undefined} src
 * @returns {NonNullable<T & U>} NonNullable<T & U>
 * @throws {Error}
 */
export function applyIf<T extends object | undefined, U extends object | undefined | Partial<T> | T>(dst: T | Partial<T> | undefined, src: T | U | Partial<U> | undefined): NonNullable<T & U>;
/**
 * @template T
 * @param {T} item
 * @returns {T} T
 */
export function clone<T>(item: T): T;
/**
 * @template {object | undefined} T
 * @template {Partial<T> | object | undefined}  U
 * @param {[ (T | Partial<T> | undefined), ...(T|U|Partial<U>)[]]} values
 * @returns {NonNullable<T & U>} NonNullable<T & U>
 * @throws {Error}
 */
export function merge<T extends object | undefined, U extends object | undefined | Partial<T>>(values_0: T | Partial<T>, ...values_1: (T|U|Partial<U>)[]): NonNullable<T & U>;
/**
 * @template {object | undefined} T
 * @template {T | Partial<T> | object | undefined}  U
 * @param {boolean} onlyIf merge only if key does not exist in dst object, unless {@link deepObj} is `true` and both dst and src values to merge are objects
 * @param {boolean} deepObj if both dst and src values to merge are objects, merge properties (relevant if {@link onlyIf} parameter is `true`)
 * @param {boolean} deepArr merge array values if both dst and src values to merge are arrays.  Othersise, dst array is set to cloned src array
 * @param {[ (T | Partial<T> | undefined), ...(T | U | Partial<U>)[]]} values array of objects to merge, where the fist object is the `base` object that's returned in the merged state
 * @returns {NonNullable<T & U>} NonNullable<T & U>
 * @throws {Error}
 */
export function mergeExt<T extends object | undefined, U extends object | undefined | Partial<T>>(onlyIf: boolean, deepObj: boolean, deepArr: boolean, values_0: T | Partial<T> | undefined, ...values_1: (T | U | Partial<U>)[]): NonNullable<T & U>;
/**
 * @template {object | undefined} T
 * @param {MergeOptions} options
 * @returns {NonNullable<T>} NonNullable<T>
 * @throws {Error}
 */
export function mergeExt2<T extends object>(options: MergeOptions<any, any>): NonNullable<T & U>;
/**
 * @template {object} T
 * @template {T | Partial<T> | object}  U
 * @param {[ (T | Partial<T> | undefined), ...(T | U | Partial<U>)[]]} values
 * @returns {NonNullable<T & U>} NonNullable<T & U>
 * @throws {Error}
 */
export function mergeIf<T extends object, U extends object | Partial<T>>(values_0: T | Partial<T>, ...values_1: (T | U | Partial<U>)[]): NonNullable<T & U>;
/**
 * @template {object}T
 * @template {Partial<T> | object}  U
 * @param {[ (T | Partial<T> | undefined), ...(T | U | Partial<U>)[]]} values
 * @returns {NonNullable<T & U>} NonNullable<T & U>
 * @throws {Error}
 */
export function mergeWeak<T extends object, U extends object | Partial<T>>(values_0: T | Partial<T>, ...values_1: (T | U | Partial<U>)[]): NonNullable<T & U>;
/**
 * @template {object}T
 * @template {Partial<T> | object}  U
 * @param {[ (T | Partial<T> | undefined), ...(T | U | Partial<U>)[]]} values
 * @returns {NonNullable<T & U>} NonNullable<T & U>
 * @throws {Error}
 */
export function mergeIfWeak<T extends object, U extends object | Partial<T>>(values_0: T | Partial<T>, ...values_1: (T | U | Partial<U>)[]): NonNullable<T & U>;
/**
 * @template {object}[T=Record<string, any>]
 * @param {T} value
 * @param {...string} keys
 * @returns {T} T
 */
export function pick<T extends object = Record<string, any>>(value: T, ...keys: string[]): T;
/**
 * @template {Record<string, T>} T
 * @param {T} value
 * @param {(arg: string) => boolean} pickFn
 * @returns {Partial<T>} Partial<T>
 */
export function pickBy<T extends Record<string, T>>(value: T, pickFn: (arg: string) => boolean): Partial<T>;
/**
 * @template {object}T
 * @template {keyof T} K
 * @param {T} value
 * @param {...K} keys
 * @returns {Omit<T, K>} Omit<T, K>
 */
export function pickNot<T extends object, K extends keyof T>(value: T, ...keys: K[]): Omit<T, K>;

export const arrUtils = {
  asArray,
  pushReturn,
  pushUniq,
  uniq
};

export const objUtils = {
  apply,
  applyIf,
  clone,
  merge,
  mergeIf,
  mergeWeak,
  mergeIfWeak,
  pick,
  pickBy,
  pickNot
};

export const typeUtils = {
  isArray,
  isBoolean,
  isClass,
  isDate,
  isDefined,
  isDirectory,
  isEmpty,
  isError,
  isFunction,
  isJsTsConfigPath,
  isNumber,
  isNumeric,
  isNulled,
  isObject,
  isObjectEmpty,
  isPrimitive,
  isPromise,
  isString,
  MergeOptions
};
