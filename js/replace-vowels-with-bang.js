/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function replace(s){
    let vowels = /[aeiou]/gi
    return s.replace(vowels, '!')
  }

/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */

replace("Hi!") // "H!!")
replace("!Hi! Hi!") // "!H!! H!!")
replace("aeiou") // "!!!!!")
replace("ABCDE") // "!BCD!")