//Question NO : 32
//Checking Users Names.
var current_Users = ["Admin", "Laiba Naz", "Eirc", "Jhon", "Ben"];
var new_users = ["Admin", "Bob", "Laiba Naz", "Tom", "Herry"];
var current_users_list = current_Users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users_list.includes(new_user.toLowerCase())) {
        console.log("Sorry ".concat(new_user, " , that name is already taking."));
    }
    else {
        console.log("Yes ".concat(new_user, " , is still in avaliable list."));
    }
}
