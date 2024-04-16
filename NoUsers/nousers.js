//Question NO : 31
// No Users
var usernames = ["Admin", "Eric", "Laiba Naz", "Jhon", "Ben"];
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username === "Admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            "Hello ".concat(username, " , Thank you for logging again.");
        }
    }
}
