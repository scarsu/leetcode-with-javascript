/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    // O(m+n)
    let ret=0
    const map=new Map()
    for(let word of words1){
        map.set(word,(map.get(word)||0)+1)
    }
    for(let word of words2){
        if(!map.has(word)) continue
        const prev=map.get(word)
        if(typeof prev ==='number'){
            map.set(word,[prev,1])
        }else{
            map.set(word,[prev[0],prev[1]+1])
        }
    }
    for(let [word,count] of map.entries()){
        if(Array.isArray(count)&& count[0]===1&&count[1]===1) ret++
    }
    return ret
};
