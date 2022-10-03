/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Complete the function which converts hex number (given as a string) to a decimal number.





/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */


function hexToDec(hexString){
    let result = parseInt(hexString, 16)
    return result
  }

hexToDec("1")// 1
hexToDec("a")// 10
hexToDec("10")// 16
hexToDec("FF")// 255
hexToDec("-C")// -12