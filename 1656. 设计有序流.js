/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.ptr=1
    this.values=new Array(n).fill('')
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.values[idKey-1]=value
    if(this.values[this.ptr-1]){
        const ret=[]
        let i=this.ptr-1
        while(this.values[i]){
            ret.push(this.values[i])
            i++
            this.ptr=i+1
        }
        return ret
    }else{
        return []
    }
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
