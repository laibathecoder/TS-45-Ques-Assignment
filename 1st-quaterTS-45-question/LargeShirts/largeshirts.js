//Question NO : 37
//Large Shirts
function makeShirt(size, massage) {
    if (size === void 0) { size = "large"; }
    if (massage === void 0) { massage = "I love TypeScript"; }
    console.log("You orderd ".concat(size, " size t-shirt , that shows the massage ").concat(massage));
}
makeShirt();
makeShirt("medium");
makeShirt('"Small"', '"I love Pakistan."');
