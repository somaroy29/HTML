//example-1
let a = 5; //initialization
for (a = 5; a < 10; a++) {
  //initialization, condition, increment
  console.log("print a");
}

//example-2
let ab = 6;
for (i = 0; i < ab; i++) {
  console.log(i);
}

//example-3
let abc = 6;
for (i = 0; i < abc; i++) {
  console.log("number is", i);
  if (i == 2) { //breaking logic
    break;
  }
}

var link = document.getElementsByTagName("a");
for(i=0;i<link.lenght;i++){
    link[i].className="link-"+i;
}




