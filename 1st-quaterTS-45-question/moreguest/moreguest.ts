// Question No: 16

let guestList : string[] = ["Rabia","Rubab","Inshara","Afrose","Nayaab"];
let cannotcome : string = "Inshara";
let newguest : string = "Zainab";

guestList[guestList.indexOf(cannotcome)] = newguest;
console.log(guestList);

guestList.map((items) =>
(console.log(`Dear ${items},I found a bigger dinner table so, I invited more people on the dinner,`)));

// Add new guest name in the starting of the guest list.

 let startGuest : string = "Ali";
 guestList.unshift(startGuest);
 console.log(guestList);

//Add new guest in the middle of the guest list.

let middleGuest : string = "Fatima";
let middleindex = guestList.length/3
guestList.splice(middleindex,0,middleGuest);
console.log(guestList);

//Use append() to add new guest in the end of the guest list. 

guestList.push("Zahid");
console.log(guestList);

//New set of invitation massage.

guestList.map((items) =>
console.log(`Dear ${items}, you are invited to the dinner in the new guest list.`));


