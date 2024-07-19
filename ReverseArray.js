let arr = [1,2,3,4,5,6];
console.log("Original Array: "+arr);
console.log("After Reversing Array: "+reverseArray(arr));

// function reverseArray(arr){
//    return arr.reverse();
// }
function reverseArray(arr){
    let count = 0;
    let newArr = [];
    for(let i=arr.length-1  ; i >=0; i--){
        console.log("arr[i]:"+arr[i]+":i:"+i)
        newArr[count] = arr[i];
        count++;
    }
    return newArr;
 }
