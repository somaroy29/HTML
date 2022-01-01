//object- a group of key : value pair

//key : value -> value will be called property
// key : function -> function will be called method

let tree = {
    name: "Ban",
    flower: "yes",
    fruit: "No",
    age: "35",
    list: ["pine ", "root "],
    istrue: true,
    sayhi: function() {
        console.log("yes", sayhi);
    },
};

console.log(tree.name);
console.log(tree.flower);
console.log(tree.istrue);
console.log(tree.sayhi);

//UPDATE/RESET
tree.name = "ben ten";
tree.flower = "no";
console.log(tree.name);
console.log(tree.flower);

//DELETE
delete tree.flower;
console.log(tree.flower);

//PRINTING IN DIFF WAY
let propkey = "age";
console.log(tree[propkey]); // frst it will check value of peopkey i.e.age, then it will check value of age.
console.log(tree.age); //directly checks value of age and prints.
console.log(tree["age"]); //already checkedvalue of propkey,now checkng val of age and printing.

//PRINTING ALL TOGETHER
for (let key in tree) {
    console.log(tree, ":", tree[key]);
}