//Question No : 24
//More Conditional Test

//To Lower Case()function.
let name_1 : string = "Laiba Naz";
let name_2 : string = "laiba naz";

console.log ("Lowercase function" , 
              name_1.toLocaleLowerCase() === name_2.toLowerCase()
              );


//Equality and Inequality string.
let sweet_1 : string = "Cake";
let sweet_2 : string = "Chocolate";

console.log("Equality in strings",
             sweet_1 == sweet_2
          );

console.log("Inequality in strings",
            sweet_1 != sweet_2 
);

//Items in Array and not in Array.

let box : string[] = ["books","pencle","notebooks","pens","dairy"];

console.log("Items in Array", box.includes('notebooks'));
console.log("Items not in Array", !box.includes('sharpner'));

//Numaric comparsion.

let num1 : number = 24;
let num2 : number = 36;

console.log("Equality in numbers:",
             num1 === num2);
console.log("Inequality in numbers:", 
             num1 != num2);
console.log("Greater then in numbers:", 
             num1 > num2);
console.log("Less then in numbers:", 
             num1 < num2);
console.log("greather then and equal to:", 
             num1 >= num2); 
console.log("less then and equal to:", 
             num1 <= num2);
console.log("Not equal to:",
             num1 != num2);

//Operator (AND , OR)             

let a = 45;
let b = 78;             
let c = 89;

console.log("AND Operator:", a > b && b < c);
console.log("OR Operator:", c > a || b < a);





