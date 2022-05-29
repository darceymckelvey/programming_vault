/*

Recursion
- Zero is even
- One is odd
- for any other number N, its eveness is the same a N -2

Define a Recursion function isEven corresponding to this description.
The function should accept a number parameter and return a boolean.
Test it on 50 and 75. See how it behaves on -1 and if results are poor fix it.

*/

/*

pseudo-code:

evenOrOdd(number) {
  if number equals 0
    return 'even'
  if number equals 1
    return 'odd'
  return evenOrOdd(number - 2);
}


*/

function isEven(n) {
  if (n % 2 === 0) {
    return true;
  }
  if (n % 2 === 1) {
    return false;
  }
  if (n > 0) {
    return isEven(n - 2)
  } else {
    return isEven(n + 2)
  }
}

console.log(isEven(75));
