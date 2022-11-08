/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Task
// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

// Note: Input will either be a positive integer (or a string for untyped languages).


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function apple(x){
    x = Number(x)
    if(Math.pow(x,2) > 1000){
        return `It's hotter than the sun!!`
    } else {
        return `Help yourself to a honeycomb Yorkie for the glovebox.`
    }
}


/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */
apple('50')  // 'It\'s hotter than the sun!!'); 
apple(4)  // 'Help yourself to a honeycomb Yorkie for the glovebox.'); 