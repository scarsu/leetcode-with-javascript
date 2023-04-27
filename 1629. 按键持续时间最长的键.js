/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    // O(n) O(1)
    let maxTime=0
    let maxI=-1
    for(let i=0;i<releaseTimes.length;i++){
        const time=i===0?releaseTimes[0]:releaseTimes[i]-releaseTimes[i-1]
        if(time>maxTime){
            maxTime=time
            maxI=i
        }else if(time===maxTime && keysPressed[i]>keysPressed[maxI]){
            maxI=i
        }
    }
    return keysPressed[maxI]
};
