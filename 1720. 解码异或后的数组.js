/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    const arr=new Array(encoded.length+1).fill(0)
    arr[0]=first
    // 若a^b=c 则c^a=b c^b=a
    encoded.forEach((encode,i)=>{
        arr[i+1]=arr[i]^encode
    })
    return arr
};
