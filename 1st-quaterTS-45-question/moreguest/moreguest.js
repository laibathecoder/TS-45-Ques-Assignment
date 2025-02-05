// Question No: 16
var guestList = ["Rabia", "Rubab", "Inshara", "Afrose", "Nayaab"];
var cannotcome = "Inshara";
var newguest = "Zainab";
guestList[guestList.indexOf(cannotcome)] = newguest;
console.log(guestList);
guestList.map(function (items) {
    return (console.log("Dear ".concat(items, ",I found a bigger dinner table so, I invited more people on the dinner,")));
});
// Add new guest name in the starting of the guest list.
// let startGuest : string = "Ali";
// guestList.unshift(startGuest);
// console.log(guestList);
//Add new guest in the middle of the guest list.
var middleGuest = "Fatima";
var middleindex = guestList.length / 3;
guestList.splice(middleindex, 0, middleGuest);
console.log(guestList);
//Use append() to add new guest in the end of the guest list. 
guestList.push("Zahid");
console.log(guestList);
//New set of invitation massage.
guestList.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited to the dinner in the new guest list."));
});
