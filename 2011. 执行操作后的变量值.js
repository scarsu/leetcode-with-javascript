/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    return operations.reduce((prev,cur)=>{
        return prev+=(cur==='++X'||cur==='X++')?1:-1
    },0)
};
