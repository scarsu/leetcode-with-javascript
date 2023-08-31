/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    const ret=[]
    for(let word of words){
        ret.push(...word.split(separator).filter(i=>i))
    }
    return ret
};
