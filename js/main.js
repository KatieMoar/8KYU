/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

// function basicOp (operation, value1, value2){
//   if (operation === '+'){
//     return value1 + value2
//   } else if (operation === '-'){
//     return value1 - value2
//   } else if (operation === '*'){
//     return value1 * value2
//   } else if (operation === '/'){
//     return value1 / value2
//   }
  
// }


// console.log(basicOp('+', 2, 4))

/* -------------------------------------------- */
/*                  BEST ANSWER                 */
/* -------------------------------------------- */

// function basicOp(operation, value1, value2) {
//   switch (operation) {
//       case '+': return value1 + value2;
//       case '-': return value1 - value2;
//       case '*': return value1 * value2;
//       case '/': return value1 / value2;
//       default: return 'Operation must be one of + - * /';
//   }
// }



/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

// function XO(str) {
//     str = str.toLowerCase().split('')
//     return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length
// }



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

// function between(a, b) {
//     let newArray = []
//     for (let i = a; i <= b; i++){
//         newArray.push(i)
//     }
//     return newArray
// }

// console.log(between(4, 6))

/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function getMiddle(s) {
    const middle = s.length / 2
    if (s.length % 2){
        return s.charAt(Math.floor(middle))
    } else {
        return s.slice(middle - 1 , middle + 1)
    }
  }

  console.log(getMiddle('Potato'))
