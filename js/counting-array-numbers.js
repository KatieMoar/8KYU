/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function between(a, b) {
    let newArray = []
    for (let i = a; i <= b; i++){
        newArray.push(i)
    }
    return newArray
}

console.log(between(4, 6))