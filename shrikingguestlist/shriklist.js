//Question No :17
//Guest list
var guestList = ["Rabia", "Rubab", "Inshara", "Afrose", "Nayaab"];
//1 : Informing that we can invited only two people because of limited space 
console.log("Due to limited space , only two person can be invited on the dinner.");
//2: Removing guest name form guest list
while (guestList.length > 2) {
    var removeguest = guestList.pop();
    console.log("Sorry , ".concat(removeguest, "you are not invited on the dinner."));
}
//3: printinga massage to the remaning guest
guestList.forEach(function (guestList) {
    console.log("Dear ".concat(guestList, ",you are invirted on the dinner."));
});
//4: Remove the last two names as well from the guest list and in the end we have empty list of guest.
guestList.pop();
guestList.pop();
console.log(guestList);
