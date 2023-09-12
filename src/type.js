/* eslint-disable import/no-extraneous-dependencies */
// @ts-check

/**
 * @file utils/utils.js
 * @version 0.0.1
 * @license MIT
 * @copyright Scott P Meesseman 2023
 * @author Scott Meesseman @spmeesseman
 *//** */

const { existsSync, lstatSync } = require("fs");

const toStr = Object.prototype.toString,
strValue = String.prototype.valueOf,
hasSymbols = require("has-symbols/shams"),
hasToStringTag = () =>  hasSymbols() && !!Symbol.toStringTag,
tryStringObject = (/** @type {{}} */ value) => { try { strValue.call(value); return true; } catch (e) { return false; }};


/**
 * If `false`, return false if v is an empty array
 * @template T
 * @param {T} v Variable to check to see if it's an array
 * @param {boolean} [allowEmp] @default true
 * @returns {v is T[]} v is T[]
 */
const isArray = (v, allowEmp) => !!v && Array.isArray(v) && (allowEmp !== false || v.length > 0);


/**
 * @param {any} v Variable to check to see if it's a primitive boolean type
 * @returns {v is boolean} v is boolean
 */
const isBoolean = (v) => (v === false || v === true) && typeof v === "boolean";


/**
 * @param {any} v Variable to check to see if it's a "class instance"
 * @returns {boolean} boolean
 */
const isClass = (v) =>
{
    const isCtorClass = v.constructor &&
                        v.constructor.toString().substring(0, 5) === "class";
    if (v.prototype === undefined) {
      return isCtorClass;
    }
    const isPrototypeCtorClass = v.prototype.constructor  && v.prototype.constructor.toString &&
                                 v.prototype.constructor.toString().substring(0, 5) === "class";
    return isCtorClass || isPrototypeCtorClass;
};


/**
 * @param {any} v Variable to check to see if it's a Date instance
 * @returns {v is Date} v is Date
 */
const isDate = (v) => !!v && Object.prototype.toString.call(v) === "[object Date]";


/**
 * @param {any} v Variable to check to see if it's defined
 * @returns {boolean} boolean
 */
const isDefined = (v) => typeof v !== "undefined";


/**
 * @param {string} path
 * @returns {boolean} boolean
 */
const isDirectory = (path) => existsSync(path) && lstatSync(path).isDirectory();


/**
 * @param {any} v Variable to check to see if it's an array
 * @param {boolean} [allowEmpStr] @default false If `true`, returns non-empty if v === ""
 * @returns {v is null | undefined | "" | []} v is null | undefined | "" | []
 */
const isEmpty = (v, allowEmpStr) => v === null || v === undefined || (!allowEmpStr ? v === "" : false) || (isArray(v) && v.length === 0) || (isObject(v) && isObjectEmpty(v));


/**
 * @param {any} e Variable to check to see if it's an error
 * @returns {v is Error} v is Error
 */
const isError = (e) => e instanceof Error;


/**
 * @param {any} v Variable to check to see if it's and empty object
 * @returns {boolean} boolean
 */
const isFunction = (v) => !!v && typeof v === "function";


/**
 * @param {string | undefined} path
 * @returns {boolean} boolean
 */
const isJsTsConfigPath = (path) => !!path && isString(path, true) && /[\\\/]\.?(?:j|t)sconfig\.(?:[\w\-]+?\.)?json/.test(path);


/**
 * @param {any} v Variable to check to see if it's a number
 * @returns {v is number} v is number
 */
const isNumber = (v) => (v || v === 0) && typeof v === "number" && isFinite(v);


/**
 * @param {any} v Variable to check to see if it's null or undefined
 * @returns {v is null | undefined} v is null | undefined
 */
const isNulled = (v) => !isDefined(v) || v === null || v === undefined;


/**
 * @param {any} v Variable to check to see if it's a number
 * @returns {boolean} boolean
 */
const isNumeric = (v) => !isNaN(parseFloat(v)) && isFinite(v);


/**
 * @template {object} T
 * @param {T | undefined | null} v Variable to check to see if it's an array
 * @param {boolean} [allowArray] If `true`, return true if v is an array
 * @returns {v is NonNullable<T>} v is NonNullable<T>
 */
const isObject = (v, allowArray) => !!v && Object.prototype.toString.call(v) === "[object Object]" && (v instanceof Object || typeof v === "object") && (allowArray || !isArray(v));


/**
 * @param {any} v Variable to check to see if it's and empty object
 * @returns {boolean} boolean
 */
const isObjectEmpty = (v) => { if (isObject(v)) { return Object.keys(v).filter(k => ({}.hasOwnProperty.call(v, k))).length === 0; } return true; };


/**
 * @param {any} v Variable to check to see if it's a primitive type (i.e. boolean / number / string)
 * @returns {v is boolean | number | string} v is boolean | number | string
 */
const isPrimitive = (v) => [ "boolean", "number", "string" ].includes(typeof v);


/**
 * @template T
 * @param {PromiseLike<T> | any} v Variable to check to see if it's a promise or thenable-type
 * @returns {v is PromiseLike<T>} v is PromiseLike<T>
 */
const isPromise = (v) => !!v && (v instanceof Promise || (isObject(v) && isFunction(v.then)));


/**
 * @param {any} v Variable to check to see if it's an array
 * @param {boolean} [notEmpty] If `false`, return false if v is a string of 0-length
 * @param {boolean} [stringifyable] If `true`, return true if v is an object and has .toString() method
 * @returns {v is string} v is string
 */
const isString = (v, notEmpty, stringifyable) =>
    (!!v || (v === "" && !notEmpty)) && (v instanceof String || typeof v === "string") ||
    (stringifyable ? (hasToStringTag() ? tryStringObject(v) : toStr.call(v) === "[object String]") : false);


const typeUtils = {
    isArray, isBoolean, isClass, isDirectory, isDate, isDefined, isEmpty, isError, isFunction, isJsTsConfigPath,
    isNulled, isNumber, isNumeric, isObject, isObjectEmpty, isPrimitive, isPromise, isString
};

module.exports = {
    isArray, isBoolean, isClass, isDirectory, isDate, isDefined, isEmpty, isError, isFunction, isJsTsConfigPath,
    isNulled, isNumber, isNumeric, isObject, isObjectEmpty, isPrimitive, isPromise, isString, typeUtils
};
