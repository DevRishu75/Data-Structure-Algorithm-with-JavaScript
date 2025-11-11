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
