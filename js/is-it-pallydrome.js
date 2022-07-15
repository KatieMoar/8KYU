/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Write a function that checks if a given string (case insensitive) is a palindrome.



/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function isPalindrome(x) {
    //break down the leters
    //.split().reverse().join()
    //put in new variable 
    //check with if statement if they = each other

    let pally = x.split('').reverse('').join('').toUpperCase()
    if(pally === x.toUpperCase()){
        return true
    } else {
        return false
    }
  }

  isPalindrome('racecar')

/* -------------------------------------------- */
/*                     NOTES                    */
/* -------------------------------------------- */

//Got this fairly easily HEYO.