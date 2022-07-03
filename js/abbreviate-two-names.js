/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function abbrevName(name){
    let splitNames = name.split(' ')
    let firstLetter = splitNames[0].split('').shift().toUpperCase()
    let secondLetter = splitNames[1].split('').shift().toUpperCase()
    console.log(`${firstLetter}.${secondLetter}`)


}



console.log(abbrevName('JOHN SWAN'))