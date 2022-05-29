/*

Chess Board

Write a program that creates a string that represents an 8X8 grid, useing
new-line characters to seperate lines. At each position of the grid there is
either as space and a #. They should form a chess board.

+ + + +
 + + + +
+ + + +
 + + + +
+ + + +
 + + + +
+ + + +
 + + + +

define a var size =8 and change the program so that it works with any
height or width

*/

var chess_board = ""
var r = 8;
var c = 8;
for (var i = 0; i < r; i++) {
  for (var j = 0; j < c; j++) {
    if ((i + j) % 2 === 0) {
      chess_board += " ";
    } else {
      chess_board += "#";
    }
  }
  chess_board += "\n";
}
console.log(chess_board);
