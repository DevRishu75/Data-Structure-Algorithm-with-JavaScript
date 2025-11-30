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
function HCF(a,b){
    if(a==b){
    return a;
    } // Base Case 
    // if(a>b) a=a-b;
    // else b = b-a;
    if(a>b) return HCF(a-b,b);
    return HCF(b,b-a);
    
//    return HCF(a,b)
    
}
console.log(HCF(45,20))

