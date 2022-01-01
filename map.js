let arr = [1, 5, 0];
let narr = [];

//map function-it will call funstion for each value of the array,
//alternative method of calling array elements instead of for loop

narr = arr.map((value, idx) => {
    console.log(value, idx); //will print value along with index
    return (value * 3); //output will be multiple of 3 with the value(value-elements of array).
    //return (value * 4); //output will be multiple of 4 with the value(value-elements of array).

})

console.log(arr);
console.log(narr);