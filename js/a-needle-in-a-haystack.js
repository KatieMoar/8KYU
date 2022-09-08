/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */


// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"

/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */
function findNeedle(haystack) {
    //loop through haystack, find needle and index, print to console
    for (let i = 0; i < haystack.length; i++){
        if (haystack[i] === "needle") {
           return `found the needle at position ${i}` 
        }
    }
  }

  var haystack = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]
  findNeedle(haystack) //found the needle at position 3

//Parameters: taking in a random array of objects. The idea is to find the index of the word "needle"
//Returns: We will return "found the needle at *index*"



function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }