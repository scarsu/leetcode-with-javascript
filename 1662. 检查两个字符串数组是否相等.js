/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    // 拼接
    // return word1.join('')===word2.join('')

    // 双指针
    let w1=0
    let w2=0
    let c1=0
    let c2=0
    while(w1<word1.length && w2<word2.length){
        if(w2>=word2.length) return false
        if(word1[w1][c1]!==word2[w2][c2]){
            return false
        }else{
            if(++c1>=word1[w1].length){
                w1++
                c1=0
            }
            if(++c2>=word2[w2].length){
                w2++
                c2=0
            }
        }
    }
    return w1===word1.length&&w2===word2.length
};
