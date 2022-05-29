=/*
*
* FizzBuzz
*
* Write a progrom that uses console.log to print all the numbers from 1 to 100,
* but numbers divisiable by 3, print "Fizz".
* Numbers divisible by 5 (and not 3), print "Buzz".
* Than modify to print "FizzBuzz" when divisible by 3 and 5.
*
*/

for (i = 1; i <= 100; i++) {
  switch (true) {
    case (i % 3 === 0 && i % 5 === 0):
      console.log("FizzBuzz")
      break
    case(i% 5 === 0 && i % 3 !== 0):
      console.log("Buzz")
      break
    case (i % 3 === 0):
      console.log("Fizz")
      break
    default:
      console.log(i)
      break
  }
}
