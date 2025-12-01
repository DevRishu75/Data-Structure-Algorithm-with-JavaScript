// let a= 20;
// let b = 32;
// // Find Highest Common Factor//
// function HCF(){
// for(let i=20;i>=1;i--){
//     if(a%i==0&&b%i==0){
//        return i;
//     }
// }
// }
// let H = HCF();
// console.log(H) // O(min(a,b))  timeComplexity//
// Euclidean formula//
// let a = 45
// let b = 20;
// while(a!=b){
//     if(a>b) a=a-b;
//     else b=b-a;
// }
// console.log(a);
//Recursive Method//
// function HCF(a,b){
//     if(a==b){
//     return a;
//     } // Base Case 
//     // if(a>b) a=a-b;
//     // else b = b-a;
//     if(a>b) return HCF(a-b,b);
//     return HCF(b,b-a);
    
// //    return HCF(a,b)
    
// }
// console.log(HCF(45,20)) // O(max(a,b))  time complexity//

// function HCF(a,b){
// while(a!=b){
//     if(a>b){
//         a = a-b;
//         if(a%b==0){
//             return a;
//         }
//     }
//     else {
//         b = b-a
//         if(b%a==0){
//             return b;
//         }
//     };
// }
// }
// console.log(HCF(32,20))

// Recursion //
// function HCF(a,b){
//     if(b===0) return a;
//     return (b,a%b);
// }
// console.log(HCF(45,20))
// Factors of a number using optimized method//
// let n=98
// for(let i=1;i<=Math.floor(Math.sqrt(n));i++){
//     if(n%i===0){
//         process.stdout.write(i+" ")
//     }
// }
// for(let i=Math.floor(Math.sqrt(n));i>=1;i--){
//     if(n%i===0){
//         if(n/i!==i){
//             process.stdout.write(n/i+" ")
//         }
//     }
     
// }
// // Prime number //
// let n=30;
// let arr = new Array(n+1).fill(true)

// for(let i=2;i<=Math.floor(Math.sqrt(n));i++){
//     if(arr[i]==true){
//         for(let j = i*i;j<=n;j+=i){
//             arr[j] = false;
//         }
//     }
// }
// for(let i=2;i<arr.length;i++){
//     if(arr[i]==true){
//         process.stdout.write(i+" ")
//     }
// }
// POW//
function POW(x,n){
    if(n==0) return 1;
    let ans = temp(x,n);
    return (n<0)?1/ans : ans
}
function temp(x,n){
    if(n==0) return 1;
    let ans = temp(x,parseInt(n/2))
    if(n%2==0) return ans*ans
    else return ans*ans*x
}
console.log(POW(2,10))