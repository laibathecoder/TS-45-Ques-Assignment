//Question NO : 43
//Unchanged Magicians
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magician[i] + ' the Great');
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ["Lil Nas X", "Jack", "Yiruma", "Olly Murs"];
var greatMagicians = make_great2(magician);
show_magicians(magician);
show_magicians(greatMagicians);
