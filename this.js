
var mycar={
    speed:50,
    driver:"sophia",
    milage:500,
    distcovered:function dist(speed, time) {
        console.log(speed*time) 
    },
    test:function(){
        console.log(this);
    }

};

var mycar2={
    speed:50,
    driver:"tommy",
    milage:50,
    distcovered:function dist(speed, time) {
        console.log(speed*time) 
    },
    test:function(){
        console.log(this);
    }

};

var mycar3={
    speed:50,
    driver:"tom",
    milage:100,
    distcovered:function dist(speed, time) {
        console.log(speed*time) 
    },
    test:function(){
        console.log(this);
    }

};
// console.log(mycar.speed);
// mycar3.distcovered(15,6);
// mycar.test(); 

// function test(){
//     console.log(this);
// }
// test();
//console.log(this);


let person = {
    name: 'John Doe',
    getName: function() {
        console.log(this.name);
    }
};
person.getName();
setTimeout(person.getName, 1000);
setTimeout(function () {
    person.getName();
}, 1000);


//***callback queue....***
//***single thread language(JS)...***

