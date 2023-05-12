/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size=size
    this.arr=[]
    this.sum=0
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if(this.arr.length===this.size){
        this.sum-=this.arr.shift()
    }
    this.sum+=val
    this.arr.push(val)
    return this.sum/this.arr.length
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
