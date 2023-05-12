/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    const map={}
    for(let [value,weight] of items1){
        map[value]=map[value]?map[value]+weight:weight
    }
    for(let [value,weight] of items2){
        map[value]=map[value]?map[value]+weight:weight
    }
    return [...Object.entries(map)].sort((a,b)=>a[0]-b[0])
};
