 // Write a function min that takes two arguments and returns their minimum.

function min(num1, num2) {
   var results;
   if (num1 < num2) {
     results = num1;
   } else {
     results = num2;
   }
   return results;
 }

console.log(min(202, 33) + " is the minimum.");
