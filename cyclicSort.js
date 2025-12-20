// let arr = [4,8,7,2,1,5,6,3]

// for(let i=0;i<arr.length;){
//     let correcind = arr[i]-1;
//     if(arr[i]===arr[correcind]){
//         i++;
//     }
//     else if(arr[i]!==arr[correcind]){
//         [arr[i],arr[correcind]] = [arr[correcind],arr[i]]
//     }
// }
// console.log(arr)

// let arr = [3,0,1]
// let n = arr.length
// for(let i=0;i<=n;i++){
//     if(!arr.includes(i)){
//         console.log(i)
//         break;
//     }
// }
// missing number leet code//
// let arr = [0,1]
// let n = arr.length
// for(let i=0;i<=n;){
//     let correctInd = arr[i]
//     if(arr[i]=== arr[correctInd] || arr[i]>n){
//         i++;
//     }
//     else if(arr[i]!== arr[correctInd]){
//         [arr[i],arr[correctInd]] = [arr[correctInd],arr[i]]
//     }
    
// }
// for(let j=0;j<arr.length;j++){
//     if(j!==arr[j]){
//         console.log(j)
//         break
//     }
// }

// find the disappeared number //
function disappeared(arr){
    let Ar = new Array(arr.length+1).fill(0)
    for(let i=0;i<arr.length;i++){
        let curr = arr[i]
        Ar[curr] = 1;
    }
    const missing = [];
    for(let j=1;j<Ar.length;j++){
        if(Ar[j]===0){
            missing.push(j)
        }
    }
    return missing;
}
console.log(disappeared([2,3,3,3,2,7]))

