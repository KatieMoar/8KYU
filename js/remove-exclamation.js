/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */
function removeExclamationMarks(s) {
    return s.replace(/!/g, '') 
  }


/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */
removeExclamationMarks("Hello World!")  // "Hello World"
removeExclamationMarks('OtQnozqDlu!ehltRqyFfY XkRyyDJdmj!LgkkYvXoLU')