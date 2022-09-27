/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function shortcut (string) {
    //use that regex thing
    return string.replace(/[aeiou]/gi, '')

}



  shortcut('hello') // 'hll');
//   shortcut('how are you today?') //'hw r y tdy?');
//   shortcut('complain') //'cmpln');
//   shortcut('never')// 'nvr'

//PREP
//PARAMETERS: Taking in a string
//RETURN : Returns that string without a, e, i, o or u
