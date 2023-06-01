/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    // O(n)
    let min1=prices[0]>prices[1]?prices[1]:prices[0]
    let min2=prices[0]>prices[1]?prices[0]:prices[1]
    for(let i=2;i<prices.length;i++){
        if(prices[i] < min1){
            min2=min1
            min1=prices[i]
        }else if(prices[i]<min2){
            min2=prices[i]
        }
    }
    return min1+min2<=money?money-min1-min2:money
};
