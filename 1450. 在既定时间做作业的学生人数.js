/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    // 枚举
    return startTime.filter((start,index)=>{
        return start<=queryTime && endTime[index]>=queryTime
    }).length
    // TODO 差分数组
    // TODO 二分查找
};
