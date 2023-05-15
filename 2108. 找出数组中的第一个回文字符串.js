/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    return words.find(w=>{
        let l=0;
        let r=w.length-1;
        while(l<r){
            if(w[l]!==w[r]) return false
            l++
            r--
        }
        return true
    })||''
};
