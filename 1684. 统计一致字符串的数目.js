/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    return words.filter(word=>{
        return [...word].every(char=>allowed.includes(char))
    }).length
};
