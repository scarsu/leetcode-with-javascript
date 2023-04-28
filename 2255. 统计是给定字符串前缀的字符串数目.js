/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let ret=0
    for(let word of words){
        if(s.startsWith(word)) ret++
    }
    return ret
};
