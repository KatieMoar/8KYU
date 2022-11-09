/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function invert(array) {
    let newArr = []
    for(let i = 0; i < array.length; i++){
        if(array[i] >= 0) {
            newArr.push(-Math.abs(array[i]))
        } else {
            newArr.push(Math.abs(array[i]))
        }
    }
    return newArr
 }


/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */
invert([1,2,3,4,5]) // [-1,-2,-3,-4,-5]);
invert([1,-2,3,-4,5]) // [-1,2,-3,4,-5]);
// invert([]) // []);
// invert([0]) // [-0]);