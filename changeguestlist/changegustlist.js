//Question No:15
var gustList = ["Anumta", "Rubab", "Inshara", "Afrose", "Nayaab"];
var cannotcome = "Anumta";
console.log(cannotcome + " " + 'can not attend the dinner.');
var newGust = "Rabiya";
gustList[gustList.indexOf(cannotcome)] = newGust;
console.log(gustList);
gustList.map(function (items) { return (console.log("Dear ".concat(items, ", you are invited to the dinner."))); });
console.log(gustList);
