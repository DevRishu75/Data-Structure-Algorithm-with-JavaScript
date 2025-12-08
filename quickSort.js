function FindPivot(arr,first,last){
    let pivot = arr[first]
    let i=first+1;
    let j= last;
    while(i<=j){
        while(i<=last && arr[i]<=pivot)i++;
        while(j>=first&&arr[j]>pivot)j--;
        if(i<j){
           swap(arr,i,j)
        }
    }
    swap(arr,j,first)
    return j;
}
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function partition(arr,first,last){
    if(first>=last) return;
    let pvInd = FindPivot(arr,first,last)
    partition(arr,first,pvInd-1)
    partition(arr,pvInd+1,last)
}
let arr = [5,8,9,17,6,4,87,9,12]
partition(arr,0,arr.length-1)
console.log(arr)