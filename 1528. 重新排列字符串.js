/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const newChars=new Array(indices).fill('')
    for(let i=0;i<s.length;i++){
        newChars[indices[i]]=s[i]
    }
    return newChars.join('')
};
