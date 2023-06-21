/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    // O(n) O(1)
    let tax=0
    let curIdx=0
    let rest=income
    while(rest>0){
        const [upper, percent] = brackets[curIdx]
        const lastUpper = curIdx>0?brackets[curIdx-1][0]:0
        if(income>upper){
            tax+=percent*(upper-lastUpper)
            rest=income-upper
            curIdx++
        }else{
            tax+=percent*(income-lastUpper)
            rest=0
        }
        console.log(tax)
    }
    // 用乘法代替除法；放在最后处理而不是每一步处理
    return tax*0.01
};
