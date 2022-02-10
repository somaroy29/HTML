var mydate = new Date();
console.log(mydate);
var PastDate= new Date(2021,6,29,9,56,10);
console.log(PastDate);
var FutureDate= new Date(2022,0,5,9,56,10);
console.log(FutureDate);

//fetching Date,month,year,hour,minutea and second from any variable 
var birthday= new Date(1997,6,29,7,20,10);
console.log(birthday.getDate());
console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getHours());
console.log(birthday.getMinutes());
console.log(birthday.getSeconds());
console.log(birthday.getTime());

//comparing two birthdays
var birthday= new Date(1997,6,29,7,20,10);
var birthday2= new Date(1997,6,29,7,20,10);
if(birthday==birthday2){
    console.log("birthdays are equal");
}
else{
    console.log("birthdays are not equal"); //it'll be printed 1st bcz the objects name are diff
}

var birthday= new Date(1997,6,29,7,20,10);
var birthday2= new Date(1997,6,29,7,20,10);
if(birthday.getDate()==birthday2.getDate()){
    console.log("birthdays are equal");//it will be printed bcz now we are fetching the dates of both the objects and this is same. 
}
else{
    console.log("birthdays are not equal"); 
}