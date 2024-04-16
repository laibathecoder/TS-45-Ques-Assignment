//Question No:15
 
//Gust Array

let guestList : string[] = ["Anumta","Rubab","Inshara","Afrose","Nayaab"];
let cannotcome : string = "Anumta";
console.log(cannotcome + " " + 'can not attend the dinner.');
  
//Add new gust in the replacement of old gust.

let newGuest : string = "Rabiya";
guestList[guestList.indexOf(cannotcome)] = newGuest;
console.log(guestList);

//Second set of invitation.

guestList.map((items) => (console.log(`Dear ${items}, you are invited to the dinner.`)));
console.log(guestList);
