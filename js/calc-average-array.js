/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function find_average(array) {
    //find average of an array 
    let sum = array.reduce((a, b) => a + b)
    let average = sum / array.length
    if (array !== []) {
        return average
    } else {
        return 0; 
    }

  }

console.log(find_average([1,2,3,4,5]))