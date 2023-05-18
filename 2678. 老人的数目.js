/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let ret=0
    for(let d of details){
        if(parseInt(d.slice(11,13))>60) ret++
    }
    return ret
};
