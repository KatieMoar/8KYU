/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */
function addFive(num) {
    num = num + 5
    console.log(num)
  }


/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */
addFive(5)   // 10)
addFive(0)   // 5)
addFive(-5)   // 0)