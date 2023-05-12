/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    return Math.max(...strs.map(i=>{
        if(/^\d*$/.test(i)){
            return parseInt(i, 10)
        }else{
            return i.length
        }
    }))
};
