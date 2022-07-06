/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function find_average(array) {
    if (array.length !== 0){
        let sum = array.reduce((a, b) => a + b, 0)
        let average = sum / array.length
        return average
    } else {
        return 0
    }

  }

console.log(find_average([1,2,3,4,5]))