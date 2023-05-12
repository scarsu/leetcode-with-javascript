/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    return Math.max(...strs.map(i=>{
        if(isNaN(i)){
            return i.length
        }else{
            return parseInt(i, 10)
        }
    }))
};
