let s = "rishabh world"
// console.log(s[2]) // we can use indexing in string 
// s.push("pop")
// console.log(s) // It wil throw an error because string is string not an array 
// String is Immutable in nature we cannot change original string 
// s = s + " wrold" //  we can reassign it but not change the actual data 
// console.log(s)
// console.log(s.length)
// a part of string is substring and we can use Slice method
// console.log(s.slice([2],[5]))// 2 to 4
// console.log(s.slice([-4]))
// console.log(s.slice(-4,s.length))
// Substring only works in positive//
// console.log(s.substring(2))// this will work to end 
// // to UpperCase() 
// console.log(s.toUpperCase())
// console.log(s.toLowerCase())
// console.log(s.concat(" ","Biddu")) // Add with s 
// console.log(s.concat(" ", "world"," Hello")) // I add pre space in "_Hello"\
// Actuall is not changing we are just using THESE METHODS//
// console.log(s)
// console.log(s.trim())// Remove Extra Spaces from string 
// // Carrot method
// console.log(s.charAt(5)) // gives you the character AT 5
// console.log(s.charCodeAt(4)) // charCode of Alphabat ascai code of alphabet
// console.log(s.indexOf("world")) // return start index of substring first index
// console.log(s.lastIndexOf("d"))// return last number of substring // 12
// console.log(s.includes("y")) // checks if the sub string inculdes
// console.log(s.startsWith("r"))// checks if the string stars with substring
// console.log(s.endsWith("d") )// ends withfucntion
// // console.log(s.replace("w","c"))// Replaces first occurrence of substring for the time I used this not changes the data of the string
// console.log(s)
// console.log(s.replaceAll("world","Saiyan"))// Replace all occurences
// // console.log(s.split(" ")) // separates the string into an array// spirit words separately
// // let text = "billi in the house of the section boy"
// // console.log(text.split("")) // split each letter
// let p = "blue,dog,in,the,light" // In this case we have to use comma in the string
// // console.log(p.split()) // as it is into the array
// // console.log(p.split(""))  // will split everything into different characters
// console.log(p.split(","))// we have put commas into the string so we can use comma separation in array
// TO PRINT ON A NEW LINE OF EACH CHARACTER OF STRING
// for (const element of s) {
//     console.log(element)
// }
// let rev = ""
// for(let i = s.length-1;i>=0;i--){
//     // console.log(s.charAt(i))
//     // process.stdout.write(s[i])
//     rev = rev + s.charAt(i)
// }
// console.log(rev);
// check if string is pallindrome or not 
let prompt = require("prompt-sync")()
let pali = prompt("Enter a string: ")

let i =0;
let j =pali.length-1;
let pallindrome = false
while(i<=j){
    if(pali[i].toLowerCase()===pali[j].toLowerCase()){
        i++;
        j--;
        pallindrome = true
       
    }
    else{
        console.log(" No pallindrome")
        break;
    }
}
if(pallindrome)console.log(" Yes Pallindrome")
console.log(pallindrome)
