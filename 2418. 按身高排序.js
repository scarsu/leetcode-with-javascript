/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    // const _heights=heights.map(i=>i).sort((a,b)=>b-a)
    // return _heights.map(i=>names[heights.indexOf(i)])

    const dual=names.map((name,i)=>[name,heights[i]])
    dual.sort((a,b)=>b[1]-a[1])
    return dual.map(i=>i[0])
};
