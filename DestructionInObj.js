//destructing-  unpack values or properties from an Oject.
//destruction in Object
let obj = {
        name: "got",
        home: {
            one: "del",
            two: "hp",
            three: {
                gr: "as",
                proc: "int"
            }
        },
        part: "cjm"
    }
    //below are the diff method of unpacking values

//let name = obj.name;
//let pol = obj["part"];
//let {name,home,part} = obj;
let { home: { three: { gr: asus } } } = obj;
console.log(obj);