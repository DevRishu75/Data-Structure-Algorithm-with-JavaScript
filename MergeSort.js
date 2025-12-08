// let's practice the merge two array problem from Advance array concepts//
//we are going to merge two array inside the first array in sorted order//
// let arr1 = [1,2,4,6,8,9]
// let arr2 = [5,7,8,10]
// let i=arr1.length-1;
// let j=arr2.length-1;
// let k= arr1.length+arr2.length-1;

// while(i>=0&&j>=0){
//     if(arr1[i]>arr2[j]){
//         arr1[k] = arr1[i]
//         k--;
//         i--;
//     }
//     else if(arr1[i]<arr2[j]){
//         arr1[k] = ar r2[j];
//         j--;
//         k--;
//     }
//     else {
//         arr1[k--] = arr1[i--]
//         arr1[k--] = arr2[j--]
//     }
// }
// while(j>=0){
//     arr1[k--] = arr2[j--]
// }
// console.log(arr1)
// Merge Sort Most optimised method //
function Merge(arr,first,mid,last){
    let i=first;
    let j=mid+1;
    let temp = new Array(last-first+1)
    let k=0;
    while(i<=mid&&j<=last){
        if(arr[i]<arr[j]){
            temp[k] = arr[i];
            i++;
            k++;
        }
        else if(arr[i]>arr[j]){
            temp[k] = arr[j]
            k++;
            j++;87
        }
        else{
            temp[k++] = arr[i++];
            temp[k++] = arr[j++];
        }

    }
    while(i<=mid){
        temp[k++] = arr[i++]
    }
    while(j<=last){
        temp[k++] = arr[j++];
    }
    let p=0;
    let t = first;
    while(t<temp.length){
        arr[p++] = temp[t++]
    }

}
function divide(arr,first,last){
    if(first>=last)return;
    let mid = Math.floor((first+last)/2);
    divide(arr,first,mid);
    divide(arr,mid+1,last);
    Merge(arr,first,mid,last);
}
let arr = [8,1,3,2,5,7,9,20,12]
divide(arr,0,arr.length-1)
console.log(arr)