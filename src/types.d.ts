/* eslint-disable jsdoc/check-param-names */
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
 * @param {T | T[]} v Variable to check to see if it's an array
 * @param {boolean} [allowEmp] If `true`, return true if v is an empty array
 * @returns {v is T[]}
 */
export function isArray<T>(v: T | T[], allowEmp?: boolean): v is T[];
/**
 * @param {any} v Variable to check to see if it's a primitive boolean type
 * @returns {v is boolean}
 */
export function isBoolean(v: any): v is boolean;
/**
 * @param {string} path
 * @returns {boolean}
 */
export function isDirectory(path: string): boolean;
/**
 * @param {any} v Variable to check to see if it's a Date instance
 * @returns {v is Date}
 */
export function isDate(v: any): v is Date;
/**
 * @param {any} v Variable to check to see if it's an array
 * @param {boolean} [allowEmpStr] If `true`, return non-empty if isString(v) and v === ""
 * @returns {v is null | undefined | "" | []}
 */
export function isEmpty(v: any, allowEmpStr?: boolean): v is "" | [];
/**
 * @param {any} v Variable to check to see if it's and empty object
 * @returns {boolean}
 */
export function isFunction(v: any): boolean;
/**
 * @param {string | undefined} path
 * @returns {boolean}
 */
export function isJsTsConfigPath(path: string | undefined): boolean;
/**
 * @template {object | undefined}[T=Record<string, any>]
 * @param {T | undefined | null} v Variable to check to see if it's an array
 * @param {boolean} [allowArray] If `true`, return true if v is an array
 * @returns {v is NonNullable<T>}
 */
export function isObject<T extends object | undefined = Record<string, any>>(v: T, allowArray?: boolean): v is NonNullable<T>;
/**
 * @param {any} v Variable to check to see if it's and empty object
 * @returns {boolean}
 */
export function isObjectEmpty(v: any): boolean;
/**
 * @param {any} v Variable to check to see if it's a primitive type (i.e. boolean / number / string)
 * @returns {v is boolean | number | string}
 */
export function isPrimitive(v: any): v is string | number | boolean;
/**
 * @template T
 * @param {PromiseLike<T> | any} v Variable to check to see if it's a promise or thenable-type
 * @returns {v is PromiseLike<T>}
 */
export function isPromise<T>(v: any): v is PromiseLike<T>;
/**
 * @param {any} v Variable to check to see if it's an array
 * @param {boolean} [notEmpty] If `false`, return false if v is a string of 0-length
 * @param {boolean} [stringifyable] If `true`, return true if v is an object and has .toString() method
 * @returns {v is string}
 */
export function isString(v: any, notEmpty?: boolean, stringifyable?: boolean): v is string;
/**
 * @template {object}T
 * @template {Partial<T> | object} U
 * @param {T | Partial<T> | undefined} dst
 * @param {U | T | Partial<T> | undefined} src
 * @param {U | T | Partial<T> | undefined} [defaults]
 * @returns {T}
 * @throws {Error}
 */
export function apply<T extends object, U extends object | Partial<T>>(dst: T | Partial<T>, src: T | Partial<T> | U, defaults?: T | Partial<T> | U): T;
/**
 * @template {object}T
 * @template {Partial<T> | object} U
 * @param {boolean} onlyIf merge only if key does not exist in dst object, unless {@link deepObj} is `true` and both dst and src values to merge are objects
 * @param {boolean} deepArr merge array values if both dst and src values to merge are arrays.  Othersise, dst array is set to cloned src array
 * @param {T | Partial<T> | undefined} dst
 * @param {U | T | Partial<T> | undefined} src
 * @param {U | T | Partial<T> | undefined} [defaults]
 * @returns {T}
 * @throws {Error}
 */
export function applyExt<T extends object, U extends object | Partial<T>>(onlyIf: boolean, deepArr: boolean, dst: T | Partial<T>, src: T | Partial<T> | U, defaults?: T | Partial<T> | U): T;
/**
 * Copies all the properties of config to object if they don't already exist.
 *
 * @template {object}T
 * @template {Partial<T> | object} U
 * @param {T | Partial<T> | undefined} dst
 * @param {U | T | Partial<T> | undefined} src
 * @returns {T}
 * @throws {Error}
 */
export function applyIf<T extends object, U extends object | Partial<T>>(dst: T | Partial<T>, src: T | Partial<T> | U): T;
/**
 * @template T
 * @param {T} item
 * @returns {T}
 */
export function clone<T>(item: T): T;
/**
 * @template {object | undefined}T
 * @template {Partial<T> | object | undefined}  U
 * @param {[ (T | Partial<T> | undefined), ...(U | T | Partial<T> | undefined)[]]} values
 * @returns {NonNullable<T>}
 * @throws {Error}
 */
export function merge<T extends object | undefined, U extends object | undefined | Partial<T>>(values_0: T | Partial<T>, ...values_1: (T | Partial<T> | U)[]): NonNullable<T>;
/**
 * @template {object | undefined}T
 * @template {Partial<T> | object | undefined}  U
 * @param {boolean} onlyIf merge only if key does not exist in dst object, unless {@link deepObj} is `true` and both dst and src values to merge are objects
 * @param {boolean} deepObj if both dst and src values to merge are objects, merge properties (relevant if {@link onlyIf} parameter is `true`)
 * @param {boolean} deepArr merge array values if both dst and src values to merge are arrays.  Othersise, dst array is set to cloned src array
 * @param {[ (T | Partial<T> | undefined), ...(U | T | Partial<T> | undefined)[]]} values array of objects to merge, where the fist object is the `base` object that's returned in the merged state
 * @returns {NonNullable<T>}
 * @throws {Error}
 */
export function mergeExt<T extends object | undefined, U extends object | undefined | Partial<T>>(onlyIf: boolean, deepObj: boolean, deepArr: boolean, values_0: T | Partial<T> | undefined, ...values_1: (T | Partial<T> | U | undefined)[]): NonNullable<T>;
/**
 * @template {object | undefined}T
 * @param {MergeOptions} options
 * @returns {NonNullable<T>}
 * @throws {Error}
 */
export function mergeExt2<T extends object>(options: MergeOptions<any, any>): NonNullable<T>;
/**
 * @template {object}T
 * @template {Partial<T> | object}  U
 * @param {[ (T | Partial<T> | undefined), ...(U | T | Partial<T> | undefined)[]]} values
 * @returns {T}
 * @throws {Error}
 */
export function mergeIf<T extends object, U extends object | Partial<T>>(values_0: T | Partial<T>, ...values_1: (T | Partial<T> | U)[]): T;
/**
 * @template {object}T
 * @template {Partial<T> | object}  U
 * @param {[ (T | Partial<T> | undefined), ...(U | T | Partial<T> | undefined)[]]} values
 * @returns {T}
 * @throws {Error}
 */
export function mergeWeak<T extends object, U extends object | Partial<T>>(values_0: T | Partial<T>, ...values_1: (T | Partial<T> | U)[]): T;
/**
 * @template {object}T
 * @template {Partial<T> | object}  U
 * @param {[ (T | Partial<T> | undefined), ...(U | T | Partial<T> | undefined)[]]} values
 * @returns {T}
 * @throws {Error}
 */
export function mergeIfWeak<T extends object, U extends object | Partial<T>>(values_0: T | Partial<T>, ...values_1: (T | Partial<T> | U)[]): T;
/**
 * @template {object}[T=Record<string, any>]
 * @param {T} value
 * @param {...string} keys
 * @returns {T}
 */
export function pick<T extends object = Record<string, any>>(value: T, ...keys: string[]): T;
/**
 * @template {Record<string, T>} T
 * @param {T} value
 * @param {(arg: string) => boolean} pickFn
 * @returns {Partial<T>}
 */
export function pickBy<T extends Record<string, T>>(value: T, pickFn: (arg: string) => boolean): Partial<T>;
/**
 * @template {object}T
 * @template {keyof T} K
 * @param {T} value
 * @param {...K} keys
 * @returns {Omit<T, K>}
 */
export function pickNot<T extends object, K extends keyof T>(value: T, ...keys: K[]): Omit<T, K>;
