// ==== Callbacks ====
// let a = 2;
// let b = 4;
/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback
 * In the body of the function return the callback with the two parameters that you created
 */
const consume = (a, b, cb) => {
  cb(a, b);
};
// consume(a, b, multiply => {
//   console.log(` The multiplication of ${a} and ${b} is  ${multiply}.`);
// });

// consume(a, b, add => {
//   console.log(` The Addition of ${a} and ${b} is  ${add}.`);
// });
function add(a, b) {
  console.log("sum is ", a + b);
}
function multiply(a, b) {
  console.log("multiplication is ", a * b);
}
function greeting(a, b) {
  console.log(`Hello ${a} ${b}, nice to meet you`);
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(9, 2, add); // 4
consume(10, 16, multiply); // 160
consume("Mary", "Poppins", greeting); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: nestedFunction and internal are nested in the same function block. nestedFunction() is within the same scope as the variable internal, hence it can access it.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();
