/*

Bean Counting
You can get the Nth character, or letter, from a single string by writing
"string".charAt(N), siliar to how you get the length with .length. The return
value will be a string containing only one character. First char has positive
position of 0. As an example a 2 character string is 2 in length but the
characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase "B" characetrs are in the string.

Next write a function called countChar that behanves like countBs, except that
it takes a second argument that indicates the character that is to be counted.
Rewrite countBs to make use of this function.

*/

// just upper-case Bs
function countBs(s) {
  var uppercase_b = 0;
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) === 'B') {
      uppercase_b++;
    }
  }
  return uppercase_b;
}

console.log(countBs("BeBBBdbB"));

// any letter, upper or lower
function countChar(s, count_num) {
  var count = 0; // if not set to equal 0 code snippet returns NaN or undefined
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) === count_num) {
      count++;
    }
  }
  return count;
}

console.log(countChar("BeBeBBdebB", "e"));
