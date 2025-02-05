//Question No : 24
//More Conditional Test
//To Lower Case()function.
var name_1 = "Laiba Naz";
var name_2 = "laiba naz";
console.log("Lowercase function", name_1.toLocaleLowerCase() === name_2.toLowerCase());
//Equality and Inequality string.
var sweet_1 = "Cake";
var sweet_2 = "Chocolate";
console.log("Equality in strings", sweet_1 == sweet_2);
console.log("Inequality in strings", sweet_1 != sweet_2);
//Items in Array and not in Array.
var box = ["books", "pencle", "notebooks", "pens", "dairy"];
console.log("Items in Array", box.includes('notebooks'));
console.log("Items not in Array", !box.includes('sharpner'));
//Numaric comparsion.
var num1 = 24;
var num2 = 36;
console.log("Equality in numbers:", num1 === num2);
console.log("Inequality in numbers:", num1 != num2);
console.log("Greater then in numbers:", num1 > num2);
console.log("Less then in numbers:", num1 < num2);
console.log("greather then and equal to:", num1 >= num2);
console.log("less then and equal to:", num1 <= num2);
console.log("Not equal to:", num1 != num2);
//Operator (AND , OR)             
var a = 45;
var b = 78;
var c = 89;
console.log("AND Operator:", a > b && b < c);
console.log("OR Operator:", c > a || b < a);
