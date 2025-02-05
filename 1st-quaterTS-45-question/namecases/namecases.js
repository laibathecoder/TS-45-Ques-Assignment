//Question No : 02
var personName = "Laiba Naz";
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toUpperCase());
console.log("title:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
