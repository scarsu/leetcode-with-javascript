/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b)=>b[1]-a[1])
    let ret=0
    for(const boxType of boxTypes){
        const numberOfBoxes=boxType[0]
        const numberOfUnitsPerBox=boxType[1]
        if(numberOfBoxes<truckSize){
            ret+=numberOfBoxes*numberOfUnitsPerBox
            truckSize-=numberOfBoxes
        }else{
            ret+=truckSize*numberOfUnitsPerBox
            break
        }
    }
    return ret
};
