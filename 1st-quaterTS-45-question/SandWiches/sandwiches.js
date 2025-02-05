//Question NO : 44
//Sand Wiches
function sendWich() {
    var ingrediens = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingrediens[_i] = arguments[_i];
    }
    console.log("Add the following ingrediens to make the Sandwich:");
    for (var _a = 0, ingrediens_1 = ingrediens; _a < ingrediens_1.length; _a++) {
        var ingredien = ingrediens_1[_a];
        console.log("- " + ingredien);
    }
    console.log("Your Sandwich is ready,Now enjoy it:)");
    return ingrediens;
}
sendWich("Chicken", "Capsium", "tomatos");
sendWich("Beef", "onion", "Ketchup");
sendWich("Egg", "Fired potatos", "chilligarlic soues");
