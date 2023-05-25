/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    // 哈希表
    // 时间O(n) 空间O(n)
    const map=new Map()
    for(let i=0;i<s.length;i++){
        const char=s[i]
        if(map.has(char)){
            map.get(char).push(i)
        }else{
            map.set(char,[i])
        }
    }
    for(let char of map.keys()){
        const disArr=map.get(char)
        const dis=distance[char.charCodeAt(0)-'a'.charCodeAt(0)]
        if(dis!==disArr[1]-disArr[0]-1){
            return false
        }
    }
    return true
};
