// @ts-check


/**
 * @param {string} value
 * @returns {string}
 */
const capitalize = (value) =>
{
    if (value) {
        value = value.charAt(0).toUpperCase() + value.substring(1);
    }
    if (value === "Webapp") { value = "WebApp"; }
    else if (value === "Webmodule") { value = "WebModule"; }
    return value || "";
};


/**
 * @param {string} value
 * @param {number} length
 * @param {boolean} word
 * @returns {string}
 */
const ellipsis = (value, length, word) =>
{
    if (value && value.length > length)
    {
        if (word) {
            const vs = value.substring(0, length - 2),
                index = Math.max(vs.lastIndexOf(" "), vs.lastIndexOf("."), vs.lastIndexOf("!"), vs.lastIndexOf("?"));
            if (index !== -1 && index >= (length - 15)) {
                return vs.substring(0, index) + "...";
            }
        }
        return value.substring(0, length - 3) + "...";
    }
    return value;
};


/**
 * @param {string | undefined} value
 * @param {boolean} [removeSpaces]
 * @returns {string}
 */
const lowerCaseFirstChar = (value, removeSpaces) =>
{
    let fs = "";
    if (value)
    {
        fs = value[0].toString().toLowerCase();
        if (value.length > 1) {
            fs += value.substring(1);
        }
        if (removeSpaces) {
            fs = fs.replace(/ /g, "");
        }
    }
    return fs;
};


const strUtils = {
    capitalize, ellipsis, lowerCaseFirstChar
};

module.exports = {
    capitalize, ellipsis, lowerCaseFirstChar, strUtils
};
