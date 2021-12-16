let abc = ["acb", "cd", "ghef", "ojhgh", "ioj"];
let nabc = [];

//normal method
/*for (i = 0; i < abc.length; i++) {
    let word = abc[i];
    if (word.length > 2) {
        nabc.push(word);
    }
} */

//filter method 
nabc = abc.filter(function(word) {
        return word.length > 3;
    }) //if length is more than 3 word will go to new array "nabc";

console.log(abc);
console.log(nabc);