//Question NO : 42
//Great Magisions
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great.";
    }
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ["Lil Nas X", "Jack", "Yiruma", "Olly Murs"];
show_magicians(magician);
make_great(magician);
show_magicians(magician);
