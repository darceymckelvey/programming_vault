/*

Write a loop that makes 7 calls to the console.log to output:

#
##
###
####
#####
######
#######

Get the length of a string by adding .length after string or
variable holding the value of string

*/

/*
*
*  example done with while loop
*
var hashtag_counter = "#"

while (hashtag_counter.length <= 7) {
  console.log(hashtag_counter);
  hashtag_counter = hashtag_counter + "#";
}

*/

for (var hashtag_counter = "#"; hashtag_counter.length <= 7; hashtag_counter += "#") {
  console.log(hashtag_counter);
}
