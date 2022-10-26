/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    // 顺时针 [start, destination)
    // 逆时针 [destination, start)
    if(start===destination) return 0
    if(start>destination) [start, destination]=[destination,start]

    let sum1=0
    let sum2=0
    for(let i=0;i<distance.length;i++){
        if(i<start || i>=destination){
            sum1+=distance[i]
        }else{
            sum2+=distance[i]
        }
    }
    return sum1<sum2?sum1:sum2
};
