/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let i=0
    let j=0
    let enumCount=0
    while(i<students.length&&j<sandwiches.length){
        if(sandwiches[j]===students[i]){
            students.shift()
            j++
            enumCount=0
        }else if(enumCount<students.length){
            students.push(students.shift())
            enumCount++
        }else{
            break
        }
    }
    return students.length
};
