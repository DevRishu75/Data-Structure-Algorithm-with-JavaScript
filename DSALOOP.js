// let rand = Math.floor(Math.random()*100 + 1);
 
// let guess = 0;
// let attempt = 0;

// while(guess !== rand){
//     guess = Number(prompt("Enter your guess between 1 and 100: "));
//     if(isNaN(guess) || guess < 1 || guess > 100){
//         console.log("Invalid input. Please enter a number between 1 and 100.");
//     }
//     attempt++; // Increment attempt count whenver loop runs again and again 
//     if(guess < rand){
//         console.log("Too Low! Try again");
//     }
//     else if(guess > rand){
//         console.log("Too High! Try again");
//     }
//     else{
//         console.log("Congratulations! You've guessed the correct number: " + guess); 
//         break;
//     }
//     if(attempt === 10 && guess !== rand){
//         console.log("Sorry, you 've used all your attempts. The correct number was : "+ rand);
//         break;
//     }

// }
// Sasta Calculator code//
// let num1 = Number(prompt("Enter first Number: "));
// let num2 = Number(prompt("Enter second Number: "));
// let operator = prompt("Enter operator (+, -, *, /): ");
// let result;

// let operat = {
//     "+":true,
//     "-":true,
//     "*":true,
//     "/":true
// }
// if(!operat[operator]){
//     console.log("Invalid operator. Please enter one of +, -, *, /.");
// }
// else{
//     switch(operator){
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num1 / num2;
//             break;
//     }
// }
// console.log(` The result of ${num1} ${operator} ${num2} = ${result}`);

// let num1 = Number(prompt("Enter first Number:"));
// let num2 = Number(prompt("Enter second Number:"));
// let operator = prompt("Enter operator (+, -, *, /):");
// // let result;

// let operat = {
//     "+": true,
//     "-": true,
//     "*": true,
//     "/": true
// }
// if(isNaN(num1) || isNaN(num2)) {
//     console.log("Invalid input. Please enter valid numbers.");
// }
// else if(!operat[operator]){
//     console.log("Invalid operator. Please enter one of +, -, *, /.");
// }
// else{
//     for(let key in operat){
//         if(key === operator){
//             console.log(eval(`${num1} ${operator} ${num2}`));
//             break;
//         }
//     }
// }

// let operation = {
//     "+" : 1,
//     "-" : 2,
//     "*" : 3,
//     "/" : 4
// }
// let num1 = Number(prompt("Enter first Number:"));
// let num2 = Number(prompt("Enter second Number:"));
// let operator = prompt("Enter 1 for +, 2 for -, 3 for *, 4 for / :");

// if(isNaN(num1) || isNaN(num2)) {
//     console.log("Invalid input. Please enter valid numbers.");
// }
// else if(!(operator >=1 && operator <=4)){
//     console.log("Invalid operator. Please enter one of 1, 2, 3, 4.");
// }
// else{
//     for(let key in operation){
//         // console.log(key) // + * /  //  here key means + - * /
//         // console.log(operation[key]) 1 2 3 4 in operation  
//         if(operation[key] == operator){
//             console.log(eval(`${num1} ${key} ${num2}`))
//         }
//     }
// }
// process.stdout.write("hello")
// process.stdout.write("world") // this is a node environment function 
// console.log("hello") // This is a window function // 

// for taking the prompt or like input to node we need to install package//

let prompt = require('prompt-sync')(); // To take input in node terminal
let n = Number(prompt("Enter a number "));
// process.stdout.write(a) // To print in node terminal but not on browser console. // but console.log works on both browser and node terminal 
// for(let i = 1; i<=n; i++){
//     for(let j = 1; j<=n;j++){
//          process.stdout.write("* ")
//         // console.log(i,j)
//     }
//     console.log();
   
// }
// Right Angle Triangle //
// for(let i =1; i<=n;i++){
//     let ascii = 65;
//     for(let j = 1;j<=i;j++){
//         process.stdout.write(String.fromCharCode(ascii)+" ")
//         ascii++
//         // console.log(j)
        
//     }
//      console.log();
   
// // } 
// for(let i =1; i<=n;i++){
//     for(let j = n;j>=i;j--){
//         process.stdout.write("     *")
       
//         // console.log(j)
        
//     }
//      console.log();
   
// } 
// mirror right angle triangle//
// for(let i =1; i<=n;i++){
 
//         // inverted first//
//         for(let j = n; j>=i;j--){
//             process.stdout.write(" ")
//         }
//      // Right Angle
 
//         for(let j = 1; j<=i; j++){
//             process.stdout.write("*")
        
//      }
//      console.log();
// }
// mirror inverted right angle triangle//
// for(let i = 1; i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(" ")
//     }
//     for(let j =n;j>=i;j--){
//         process.stdout.write("*")
//     }
//     console.log();
// }
// equilateral triangle//
// for(let i =1;i<=n;i++){
//     for(let j=n;j>=i;j--){
//         process.stdout.write("_")
//     }
//     for(let j = 1;j<=i;j++){
//         process.stdout.write(" *") // A little space//
//     }
//     console.log();
// }
// Inverted equlateral triangle//
// for(let i = 1;i<=n;i++){
//     for(let j = 1;j<=i;j++){
//         process.stdout.write(" ")
//     }
//     for(let j = n; j>=i;j--){
//         process.stdout.write(" *")
//     }
//     console.log(); // for a new line after each loop iteration after a new row
// }
// X pattern triangle//
// for(let i = 1; i<=n;i++){
//     for(let j=1; j<=n;j++){
//         if(i+j==n+1||i==j){
//             process.stdout.write("* ")
//         }
//         else{
//             process.stdout.write("  ")
//         }
//     }
//     console.log(); // x pattern is only possible for n = odd number it will clash
// }

// for(let i = 1; i<=n;i++){
//     for(let j=1; j<=(2*n-1);j++){
//        if(i==j||i+j==(2*n)){
//         process.stdout.write(" *")
//        }
//        else process.stdout.write("  ")
//     }
//     console.log(); // V pattern 
// }

// for(let i =1;i<=n;i++){
//     for(let j=n;j>=i;j--){
//         process.stdout.write(" ") // spaces
//     }
    
//     for(let j = 1; j<=2*i-1;j++){
//         process.stdout.write("*")
//     }
// console.log();

// }
// for (let i = n - 1; i >= 1; i--) {
//     for (let j = n; j >= i; j--) {
//         process.stdout.write("_");
//     }

//     for (let j = 1; j <= 2 * i - 1; j++) {
//         process.stdout.write("*");
//     }
//     console.log();
// }
// Hollow square//
// for(let i = 1;i<=n;i++){
//     for(let j =1;j<=n;j++){
//         if(i===1||i==n||j===1||j===5){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
    
    
// }
// Hollow pyramid//

for(let i = 1; i<n;i++){
    for(let j=n;j>i;j--){
        process.stdout.write(" ")
    }
    for(let j=1;j<=2*i-1;j++){
        if(j===1||j===2*i-1){
            process.stdout.write("*")
        }
        else{
            process.stdout.write(" ")
        }
    }
    console.log()
}
for(let i = 1; i<2*n;i++){
    process.stdout.write("*")
}
