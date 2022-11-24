/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let deep=0
    for(let log of logs){
        if(log==='./'){
            continue
        }else if(log==='../'){
            deep=deep<=1?0:deep-1
        }else{
            deep++
        }
    }
    return deep
};
