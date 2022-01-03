let singlequote = '  this is a string  ';
let doublequote = "this is another";
console.log(singlequote)
console.log(doublequote)
let char = singlequote.charAt(5); //5-second i,it won't count space
console.log(char)
let subchar = singlequote.substring(6, 14) //6-strting index,14-ending index,it will print from 6 to 13th index
    //it will count the spaces.
console.log(subchar);
let ascii = singlequote.charCodeAt(1); //it will give ascii val of the word 
console.log(ascii)

//SPLIT FUNCTION IN ARRAY :
let arrStr = singlequote.split("i"); //it will spliting the string via i, will remove all i from the string
console.log(arrStr);
let arrStr1 = singlequote.split(" "); //it'll spliting the string via space,will remove all space from the string
console.log(arrStr1);
let arrStr2 = singlequote.split(""); //it'll split the word one by one,i am->'i', ' ', 'a', 'm'
console.log(arrStr2);

//JOIN FUNCTION IN ARRAY :
let arrJoin = arrStr1.join("+"); //joining the splitted array(arrStr1) with '$'
console.log(arrJoin);
let arrJoin1 = arrStr2.join("$"); //joining the splitted array(arrStr2) with '$'
console.log(arrJoin1);

//TRIM FUNCTION IN ARRAY :
let arrTrm = singlequote.trim(); //it will remove all spaces from begining and last position of the string.
console.log(arrTrm)

//demo split+trim+join
let str = "  how are you  "
str = str.trim();
let newstr = str.split(" ")
let finalstr = newstr.join("+")
console.log(finalstr);

//lowercasee to uppercase
let casestr = "hi this is soma";
let upperstr = casestr.toUpperCase(0);
console.log(upperstr);

//example-1
let a="i am a super string"
console.log(a.indexOf("g"));
if(a.indexOf("super")==-1){
    console.log("no word found")
}
else {
    console.log("the word found at "+a.indexOf("super"))
}

//example-2
var s1="string one"
var s2="STRING two"
console.log(s1<s2); //both string values are diff
console.log(s1.toLowerCase()==s2.toLowerCase());
console.log(s2.toLowerCase()); //upper case to lower case
console.log(s1.toUpperCase()); //lower case to upper case
