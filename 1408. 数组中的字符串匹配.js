/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const n=words.length
    const ret=[]
    for(let i=0;i<words.length;i++){
        for(let j=0;j<words.length;j++){
            if(i!==j && words[j].includes(words[i])){
                ret.push(words[i])
                break
            }
        }
    }
    return ret
};
