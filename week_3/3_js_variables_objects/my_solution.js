// I paired with David Nanry on this challenge.

// __________________________________________
// Write your code below.
var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John","David","Dev","Mary"];






// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 1. The problem we faced was being overwhelmed by the assert function initially.  What worked is that we took
// each function call one at a time and understanding what the typeof and instanceof statements meant.
// 2. I didn't understand what the typeof and instanceof operators did.  I used the mozilla developer network site
// to learn what they did.
// 3. I figured out this morning that object oriented programming can be done in Javascript.  I always thought it 
// it was a client-side scripting language only. 
// 4. I learned about test driven development and the importance of it.
// 5. I'm very confident that I can define local variables in JavaScript, I'm moderately confident about creating  
// objects of different types, very confident about creating and adding objects to an array, and moderately confident
// about using pre-written test to drive development.
// 6. The parts of the challenge I enjoyed the most were running the test and correcting the results by defining
// new relevant variables.
// I found it tedious at first to try and understand the function at the beginning of the program.
//

// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

