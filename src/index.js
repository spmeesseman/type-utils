// @ts-check

const {
    apply, applyExt, applyIf,clone, merge, mergeExt, mergeExt2, mergeIf, mergeWeak, mergeIfWeak,
    objUtils, pick, pickBy, pickNot
} = require("./object");

const {
    isArray, isBoolean, isClass, isDirectory, isDate, isDefined, isEmpty, isError, isFunction, isJsTsConfigPath,
    isNulled, isNumber, isNumeric, isObject, isObjectEmpty, isPrimitive, isPromise, isString, typeUtils
} = require("./type");

module.exports = {
    apply, applyExt, applyIf, clone, isArray, isBoolean, isClass, isDirectory, isDate, isDefined, isEmpty,
    isError, isFunction, isJsTsConfigPath, isNumber, isNumeric, isObject, isNulled, isObjectEmpty,
    isPrimitive, isPromise, isString, merge, mergeExt, mergeExt2, mergeIf, mergeWeak, mergeIfWeak,
    objUtils, pick, pickBy, pickNot, typeUtils
};
