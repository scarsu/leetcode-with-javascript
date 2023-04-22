/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    // O(n) O(1)
    let ret=0
    const yuan=['a','e','i','o','u']
    for(let i=left;i<=right;i++){
        const s=words[i][0]
        const e=words[i][words[i].length-1]
        if(yuan.includes(s)&&yuan.includes(e)) ret++
    }
    return ret
};
