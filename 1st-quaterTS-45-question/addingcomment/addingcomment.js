//Question No:10
//FIRST PROGRAM:
var famusPerson = "Albert Einstein";
var quote = "A person who never made a mistake never tried anything new.";
var massage = "".concat(famusPerson, " once said , \"").concat(quote, "\"");
console.log(massage);
/*In this console.log we are printing the massage that are stor
 in the variable 'massage'
and in the massage varieable there are 2 more variable
1st one is {famusPerson}and the 2nd one is {quote}*/
//SECOND PROGRAM:
var personName = "Laiba Naz";
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toUpperCase());
console.log("title:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
/*In this program we show the name cases that how many name cases in the typescript language and how can we ues
it in our program so there are 3 type of name cases in the typescript language
1 title case
2 upper case
3 lower case
and we print it in the console.log*/ 
