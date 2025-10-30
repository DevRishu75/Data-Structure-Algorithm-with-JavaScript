// # if (){
//}
// but only else{
//} will throw an syntax error

// let ans = Number(prompt("what is you age?"));

// if(ans>=18){
//     console.log("You can vote")
// }
// else if(isNaN(ans)){
// console.log("You entered invalid number ")
// }
// else{
//     console.log("You cannot vote")
// }
// // Shop discount question//
// let bill = Number(prompt("What is the final amount?"));
// // console.log(bill);
// let dis = 0;
// // if(bill>0&&bill<=5000){
// //     console.log(bill);
// // }
// // else if(bill>5000 && bill <=7000){
// //     console.log(bill - Math.floor((5*bill)/100));
// // }
// // else if(bill>7000 && bill <=9000){
// //     console.log(bill - Math.floor((10*bill)/100));
// // }
// // else if (bill>9000){
// //     console.log(bill - Math.floor((20*bill)/100));
// // }
// // else{
// //     console.log("you entered invalid bill amount")
// // }
// if(bill>0&&bill<=5000){
//     dis = 0
// }
// else if(bill>5000 && bill <=7000){
//     dis = 5
// }
// else if(bill>7000 && bill <=9000){
//     dis = 10
// }
// else if (bill>9000){
//     dis = 20
// }
// else{
//    console.log("You entered invalid value")
// }

//     console.log(bill - Math.floor((dis*bill)/100)); // we know that we need to print the same vale 

// let unit = Number (prompt("Enter electricity unit: "));
// let bill = 0;
// if(unit>400){
//     bill = (unit -400)*13
//     unit = 400
    
// }
// if(unit<400 && unit>=200){
//     bill += (unit -200 )*8 ; // bill amount must be updated
//     unit = 200
// }
// if(unit<200 && unit>=100){
//     bill += (unit-100)*6; // per unit changes
//     unit = 100
// }
// if(unit<100 && unit>50){
//     bill+= unit*4
//     unit = 50
// }
// if(unit<50 && unit>0){
//     bill+= (unit-50)*2
// }
// console.log(bill)


// let unit = Number(prompt("enter the unit"));

// let btn = document.getElementById("Bill")
// function CheckBill(){
// let unit = document.querySelector("input").value
// let result = document.getElementById("Total")
// let metercharge = 100
// let bill = 0;
// let discount = 0
// let originalUnit = unit

// if (!isNaN(unit) && unit>0){
// if(unit>300){
//     bill = (unit-300)*15
//     unit = 300
// }
// if(unit<=300 && unit>150){
//     bill += (unit-150)*10
//     unit = 150
// }
// if(unit<=150 && unit>50){
//     bill += (unit-50)*5
//     unit = 50
// }
// if(unit<=50 && unit>0){
//     bill += unit*2
// }
// if(originalUnit>=500){ // have to use original unit so that 
//      discount = Math.floor((bill*5/100))
//     bill = bill - discount
// }

// result.innerText = ` The Total bill Amount after Discount is ${bill} with adding meter charge ${metercharge} and discount amount is ${discount}. The total payable Amount is : ${bill + metercharge}`
// }
// else{
//     console.log("Input is invalid ");
// }
// }
// btn.addEventListener("click",() => {
//     CheckBill();
// })


// printing the breakdown

// let unit = Number (prompt("Enter electricity unit: "));
// let bill = 0;
// let breakdown = "";
// if(isNaN(unit)&&unit<0){
//     console.log("Entered value is invalid")
// }

//     breakdown += `Unit : ${unit} \n`
// if(unit>400){
//     let amt  = (unit -400)*13
//     bill += amt

//     breakdown += `401-${unit} @ 13 = ${amt}\n`
//     unit = 400

    
// }
// if(unit<=400 && unit>200){
//     let amt = (unit -200 )*8 ; // bill amount must be updated
//     unit = 200
//     bill += amt
//     breakdown += `201-400 @ 8 = ${amt}\n`

// }
// if(unit<=200 && unit>100){
//     let amt = (unit-100)*6; // per unit changes
//     unit = 100
//     bill += amt;
//      breakdown += `101-200 @ 6 = ${amt}\n`
// }
// if(unit<=100 && unit>50){
//     let amt = (unit-50)*4
//     bill+= amt
//     unit = 50
//      breakdown += `51-100 @ 4 = ${amt}\n`
// }
// if(unit<=50 && unit>0){
//     let amt = unit*2
//     bill+=amt;
//      breakdown += `0 - 50 @ 2 = ${amt}\n`
// }
// console.log(breakdown)
// console.log(`The Total Bill : ${bill}`)


// company wants first 100 unit 3rs 100-200 5 and more than 300 10rs per unit charge and if total unit is <600 10% surcharge 

let unit = parseInt(prompt('Enter the units :'));
let bill = 0;
let originalUnit = unit
let surcharge = 0;

if(isNaN(unit) || unit <0){
    console.log("Entry is invalid")
}

if(unit>300){
    bill = (unit-300)*10
    unit = 300
}
if(unit<=300 && unit>100){
    bill+= (unit-100)*5
    unit = 100
}
if(unit<=100 && unit > 0){
    bill += unit*3
}
if(originalUnit>600){
    surcharge += bill*10/100;
    bill += surcharge

}
console.log(`The Total bill is ${bill} and if surcharge applicable is ${surcharge}\n surcharge is only applicable if (unit is more than 600)`)