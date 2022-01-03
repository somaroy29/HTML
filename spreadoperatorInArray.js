let arr = [1, 2, 3, 4];
let arr1 = arr;
//spread operator is three dots(...) -> it gives us list of numbers only, not any array.
let arr2 = [...arr];

arr.push(5);
console.log("old array is", arr);
console.log("updated array is", arr1);
console.log("list array is", arr2);