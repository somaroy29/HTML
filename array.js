let fruit = []
fruit = ['papaya', 'lichi', 'cherry']
console.log("fruits are :", fruit);
console.log(fruit.length);
fruit = ['lichi', 'cherry']
console.log("fruits are :", fruit);
console.log(fruit.length);


for (let i = 0; i <= fruit.length; i++) {
    console.log("fruits are", i);
}
// TO ADD ELEMENT AT THE BEGINING OF AN ARRAY :UNSHIFT
// TO remove ELEMENT from THE BEGINING OF AN ARRAY :SHIFT
fruit.unshift(1, 'no fruit');

// TO ADD ELEMENT AT THE END OF AN ARRAY :PUSH
//TO remove ELEMENT from THE end OF AN ARRAY :pop
fruit.push('yes');
console.log("updated value", fruit);
fruit.pop('yes');
console.log("updated value", fruit);

//slice- to print part of an array, after slicing main array remains same
let partfruit = fruit.slice(1, 3); ////1-strting index, 3-ending index, slicing will strt from 'strting index'
//it will end one index before ending index.
console.log(partfruit);
console.log(fruit);
//splice- to remove part of an array, after splice array gets changed
fruit.splice(1, 1); //1-strting index, 1-ending index
console.log(fruit);