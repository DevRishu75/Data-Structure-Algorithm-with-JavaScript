// THIS IS ADVANCED ARRAY QUESTION //
// Rotating element left side one step //
// let arr = [1,2,4,5,8]
// let copy = arr[0];

// for(let i = 0; i<arr.length-1; i++){
//     arr[i]=arr[i+1];
    
// }
// arr[arr.length-1]= copy;
// console.log(arr)
// Rigth Rotation // 
// let arr = [1,2,4,5,8]
// let copy = arr[arr.length-1];
// for(let i = arr.length-1;i>=0;i--){
//     arr[i]=arr[i-1];
// }
// arr[0]= copy;
// console.log(arr)
// NESTED LOOP//
// for(let j = 1; j<=4;j++){
//     console.log(j+"Execution")
//     for(let i =1; i<=3;i++){
//         console.log("Hello")
//     }
// }

// Left and rigth rotation by k Element
// let arr = [2,3,4,5,6];
// let k = 2;
// let copy = arr[0];
// for(let j =1;j<=k;j++){
// for(let i = 0;i<arr.length-1;i++){
//     arr[i] =arr[i+1];
// }
// arr[arr.length-1] = copy;
// copy++;
//  }
// console.log(arr)
// Right Rotation by K element//
let arr = [2,4,5,8,9];
let k = 2;
let copy = arr[arr.length-1];

for(let j= 1;j<=k;j++){
    for(let i =arr.length-1;i>=0;i--){
        arr[i] = arr[i-1];
    }
    arr[0]=copy;
    copy--;
}
console.log(arr)