var MyHashMap = function() {
    // 769是质数，使用质数就是为了减少冲突。 哈希表的大小取决于一组质数，原因是在hash函数中，要用这些质数来做模运算(%)。而分析发现，如果不是用质数来做模运算的话，很多生活中的数据分布，会集中在某些点上，从而导致冲突率增加。所以这里最后采用了质数做模的除数。
    this.BASE=769
    //  用数组存储数据 
    this.data=new Array(this.BASE).fill(0).map(e=>new Array())
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const h=this.hash(key)
    for(let map of this.data[h]){
        if(map[0]===key){
            map[1]=value
            return
        }
    }
    this.data[h].push([key, value])
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const h=this.hash(key)
    for(let map of this.data[h]){
        if(map[0]===key) return map[1]
    }
    return -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const h=this.hash(key)
    for(let i=0;i<this.data[h].length;i++){
        const map=this.data[h][i]
        if(map[0]===key){
            this.data[h].splice(i, 1)
            return
        }
    }
};

MyHashMap.prototype.hash = function(key) {
    return key % this.BASE
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
