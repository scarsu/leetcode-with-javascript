/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    // O(n*k) O(1)
    while(k--){
        const max=Math.max(...gifts)
        const idx=gifts.indexOf(max)
        gifts[idx]=Math.floor(gifts[idx]**0.5)
    }
    return gifts.reduce((p,c)=>p+c,0)
};
