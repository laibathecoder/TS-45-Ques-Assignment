//Question No : 02

let personName : string = "Laiba Naz";
console.log("lowercase:", personName.toLowerCase());

console.log("uppercase:" , personName.toUpperCase());

console.log("title:" , personName.replace(/\b\w/g,c=>c.toUpperCase()));