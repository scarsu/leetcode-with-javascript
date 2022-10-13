/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    // for(let piece of pieces){
    //     let idx=arr.findIndex(e=>e===piece[0])
    //     if(idx===-1) return false
    //     for(let i=1;i<piece.length;i++){
    //         if(piece[i]!==arr[++idx]) return false
    //     }
    // }
    // return true
    const map=new Array(101).fill(-1)
    for(let i=0;i<arr.length;i++){
        map[arr[i]]=i
    }
    for(let i=0;i<pieces.length;i++){
        const piece=pieces[i]
        let idx=map[piece[0]]
        if(idx===-1) return false
        for(let j=1;j<piece.length;j++){
            if(piece[j]!==arr[++idx]) return false
        }
    }
    return true
};
