/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */
function remainder(n, m){
    if(n === 0 || m === 0){
        return NaN
    }

    if(n < 0 || m < 0){
        return 0
    }
    
    if(n > m){
        return n % m
    } else {
        return m % n
    }
  }

  remainder(17,5)   // 2, 'Returned value should be the value left over after dividing as much as possible. For input n = 17, m = 5');
  remainder(13, 72)   // remainder(72, 13), 'The order the arguments are passed should not matter');
//   remainder(1, 0)   // 'Divide by zero should return NaN');
//   remainder(0, 0)   // 'Divide by zero should return NaN');
