/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */
function hello(name) {
    if(name){
        let properName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        return `Hello, ${properName}!`
    } else {
        return `Hello, World!`
    }
  }


/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */

hello('aLice')   // 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'");
// hello()   // 'Hello, World!', "returns 'Hello, World!' when name is not given");
// hello('')   //'Hello, World!', "returns 'Hello, World!' when name is an empty string");