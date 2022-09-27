/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function sumArray(array) {
    //write an if statement to check for null, empty or 1 object
    if(array == null || array.length < 3 ) {
        return 0
    }
    let sort = array.sort(function (a,b) {
        return a - b
    })
    sort.shift()
    sort.pop()
    let result = sort.reduce((previous, current) => previous + current, 0)
    return result

}

//PREP
//Taking in an array of numbers
//Returning a number that is the array added together without the lowest or highest number


// sumArray(null)                     , 0 
// sumArray([ ])                      , 0 
//  sumArray([ 3 ])                    , 0 
//  sumArray([ 3, 5 ])                 , 0 
//  sumArray([ 6, 2, 1, 8, 10 ])       , 16 
//  sumArray([ 0, 1, 6, 10, 10 ])      , 17 
//  sumArray([ -6, -20, -1, -10, -12 ]), -28 
//  sumArray([ -6, 20, -1, 10, -12 ])  , 3 