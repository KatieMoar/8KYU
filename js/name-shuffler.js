/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */
// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */
function nameShuffler(str){
    return str.split(' ').reverse().join().replaceAll(',', ' ')
  }


/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */
nameShuffler('john McClane')   //'McClane john');
nameShuffler('Mary jeggins')   //'jeggins Mary')
nameShuffler('tom jerry')   //'jerry tom')