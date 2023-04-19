/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    // return items.filter(item => {
    //     return (ruleKey === "type" && item[0] === ruleValue) ||
    //         (ruleKey === "color" && item[1] === ruleValue) ||
    //         (ruleKey === "name" && item[2] === ruleValue)
    // }).length
    let ret = 0
    for (let item of items) {
        if (
            (ruleKey === "type" && item[0] === ruleValue) ||
            (ruleKey === "color" && item[1] === ruleValue) ||
            (ruleKey === "name" && item[2] === ruleValue)
        ) ret++
    }
    return ret
};
