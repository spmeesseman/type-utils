// @ts-check

const objUtils = require("./object");
const {
    apply, applyExt, applyIf,clone, merge, mergeExt, mergeExt2, mergeIf, mergeWeak, mergeIfWeak, pick, pickBy, pickNot
} = require("./object");

const typeUtils = require("./type");
const {
    isArray, isBoolean, isDirectory, isDate, isEmpty, isFunction, isJsTsConfigPath, isObject, isObjectEmpty,
    isPrimitive, isPromise, isString
} = require("./type");

module.exports = {
    apply, applyExt, applyIf, clone, isArray, isBoolean, isDirectory,
    isDate, isEmpty, isFunction, isJsTsConfigPath, isObject, typeUtils, isObjectEmpty, isPrimitive, isPromise, isString,
    merge, mergeExt, mergeExt2, mergeIf, mergeWeak, mergeIfWeak, objUtils, pick,
    pickBy, pickNot,
};
