/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let ret=0
    for(let word of words){
        if(word.startsWith(pref)) ret++
    }
    return ret
};
