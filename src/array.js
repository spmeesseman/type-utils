/* eslint-disable import/no-extraneous-dependencies */
// @ts-check

const hasSymbols = require("has-symbols/shams");
const { isArray, isFunction, isEmpty } = require("./type");


/**
 * @template T
 * @param {T | T[] | IterableIterator<T> | Set<T> | undefined} v Variable to check to see if it's an array
 * @param {boolean} [shallow] If `true`, and  `arr` is an array, return a shallow copy
 * @param {boolean} [allowEmpStr] If `false`, return empty array if isString(v) and isEmpty(v)
 * @returns {NonNullable<T>[]}
 */
const asArray = (v, shallow, allowEmpStr) => /** @type {Array} */(
    (v instanceof Set || hasIterator(v) ? Array.from(v): (isArray(v) ? (shallow !== true ? v : v.slice()) : (!isEmpty(v, allowEmpStr) ? [ v ] : [])))
);


const hasIteratorTag = () =>  hasSymbols() && !!Symbol.iterator;


/**
 * @param {any} v
 * @returns {v is IterableIterator}
 */
const hasIterator = (v) => !!v && hasIteratorTag() && isFunction(typeof v[Symbol.iterator]);


/**
 * @template T
 * @param {T[]} arr
 * @param {...T} items
 * @returns {T[]}
 */
const pushReturn = (arr, ...items) => { arr.push(...items); return arr; };


/**
 * @template T
 * @param {T[]} arr
 * @param {...T} items
 * @returns {T[]}
 */
const pushUniq = (arr, ...items) => { items.forEach(item => { if (!arr.includes(item)) arr.push(item); }); return arr; };


/**
 * @template T
 * @param {[]} a
 * @returns {T[]}
 */
const uniq = (a) => a.sort().filter((item, pos, arr) => !pos || item !== arr[pos - 1]);


const arrUtils = {
    asArray, pushReturn, pushUniq, uniq
};

module.exports = {
    arrUtils, asArray, pushReturn, pushUniq, uniq
};

