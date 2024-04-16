//Question No :17
//Guest list
 let guestList : string[] = ["Rabia","Rubab","Inshara","Afrose","Nayaab"];

//1 : Informing that we can invited only two people because of limited space 

console.log("Due to limited space , only two person can be invited on the dinner.");

//2: Removing guest name form guest list

 while (guestList.length > 2) {
 const removeguest = guestList.pop();
 console.log(`Sorry , ${removeguest}you are not invited on the dinner.`); 
}  

//3: printinga massage to the remaning guest

guestList.forEach((guestList) =>{
    console.log(`Dear ${guestList},you are invirted on the dinner.`);
});

//4: Remove the last two names as well from the guest list and in the end we have empty list of guest.
guestList.pop();
guestList.pop();
 console.log(guestList);

