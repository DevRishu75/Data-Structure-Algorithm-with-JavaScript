// a = 12;
// console.log(a)
// var a;
// we can even use var variable before intialization // but we use let variable
// let a = 5
// let b = 8
// sum = a+b;
// console.log(sum)
// let a = 12;
// let b = "13"
// console.log(a+b)
// console.log(typeof(a+b)) //string
// let c= 1.23
// console.log((a+b+c))
// console.log(typeof(a+b+c))//string 
// let a = 10;
// let b = 20;
// console.log("sum of 10 and 20"+a+b) // string 
// // but we need to add a+b so we use BODMAS
// console.log("sum of 10 and 20 is "+(a+b)) // string sum of 10 and 20 is 30
// console.log(a+b+"is sum of 10 and 20") // string // 30 is sum of 10 and 20
// console.log("1"/1);//number 1
// console.log("1"*1);//number 1
// console.log("1"-1);//number 1
// // here javascript converts "1" to a number type 1
// console.log("1"%1) // number 0
// let age = prompt("What is you age")
// age = Number(age);
// console.log(age)
// console.log(typeof age); // prompt default takes the input in string and if we need it in number 
// typecasting or typeconversing
// let age = Number(prompt("Enter your age ")); // Number is a parameter and prompt is a function
// console.log(age); 



// Swapping 
// first method
//swap with extra variable
// let a = 10;
// let b = 20;
// let c 
// c = a; // now only copy of a is gone to  // c = 10, a = 10
// a = b; // a = 20, b = 20
// b = c; // c= 10, b = 10
// console.log(a,b) //20,10

//second method
// let a = 10;
// let b = 20;
// a = a+b; // a = 30
// b = a-b; // 30 - 20 = 10
// a = a-b;
// console.log(a,b); // a = 20,b = 10

// third methods
// let a = 10;
// let b = 20;
// [a,b] = [b,a]

// console.log(a,b)
// let a = 112;
// let b = 22;
// // console.log(Math.floor(a/b))\ we alway math.floor because we are using Javascript as our language/
// console.log(b%a)//  if divdend is smaller than divisor we should not divide it but the remaider wil be the divdend 22
// let a = 4567;
// // sum of digit in a number 
// console.log(a%10); // we wil be getting the last number as remainder 
// console.log(Math.floor(a/10)) // we will the starting 3 digits of number
// relation operators
console.log(10>=10)// we take it as or means 10 is greater or less than 10
console.log(10<=7) 
console.log(10!=11)
 
// post Increment // pre Increment
// Post Increment
// let a = 10;
// let b = a++;
// console.log(a) // a = 11 // firstly a  will be used  so a  = 11
// console.log(b) // b = 10
// // Pre Increment
// let  p = 10;
// let q = ++p;
// console.log(p)//11
// console.log(q)//11
//Post decrement
// let i = 11;
// i = i++ + ++i; // first post increment i = 11 and then i becomes 12 and then pre incremnet so i become 13 and then plus so finally i = 11 + 13 = 24
// console.log(i) // 24
// // Question
// let a = 11, b = 22;
// let c = a + b + a++ + b++ + ++a + ++b;
// console.log("a=" + a)//13
// console.log("b=" +b)//24
// console.log("c=" +c)//103

// let b = true; // here b = 1 
// b++;
// console.log(b) // here b = 2
// // same goes for false
// let a = false;
// a++;
// console.log(a)// here false means 0 so a++ wil 1 now


// let a = 10++;// this gives an error because we can't give a number ++ operator

// console.log(a)/
// let i = 10;
// let b = ++(a++) // this will solve like a++ =  10 first and it will like ++10 and now it shows const function
// console.log(b) // this gives an error 
// math.function///
console.log(Math.round(10.3))//10
console.log(Math.round(10.8))//11

console.log(Math.ceil(10.1))//11
console.log(Math.floor(10.8))//10
console.log(Math.trunc(18.89))//18 just removes after point 
console.log(Math.pow(2,5))//2**5 power 
console.log(Math.sqrt(25));// squareroot
console.log(Math.cbrt(125)); // cuberoot
console.log(Math.abs(-15)); // convert negative to positive
console.log(Math.max(78,65,12)); // Max value return 
console.log(Math.min(78,54,10)); // Min value return
console.log(Math.floor(Math.random()*9000)+1000); // return value between 0 to 1 and now it will return from 1000 to 9999
// let a = 89.09835;
// console.log(a.toFixed(2)); // now we will only get 2 digits after  point but it makes it string

// let a = 5
// let b =7
// let Area = a*b
// // console.log(`Area of rectangle  is ${Area}`)
// let parameter = 2*(a+b)
// console.log(`Parameter of Rectangle is ${parameter}`)
// Area of triangle by heron's formula//
// let a = 5
// let b = 5
// let c = 3
// let s = (a+b+c)/2
// console.log(s)
// console.log(Math.sqrt(s * (s-a) * (s-b) * (s-c)))

let r = 12;
console.log(Number((2*Math.PI*r).toFixed(2)));