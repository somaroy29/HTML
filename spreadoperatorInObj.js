let obj = {
        name: "js",
        lib: "node",
        framework: {
            front: "react",
            back: "node",
            db: {
                one: "sql",
                two: "oracle",
                three: "plsql"
            },
            type: "web"
        }
    }
    //spread operator is three dots(...) -> it gives us list of numbers only, not any array.
    //let obj2 = {...obj }; //SHALLOW Copy
    //let obj2 = {...obj, framework: {...obj.framework, db: {...obj.framework.db } } }; //DEEP copy-spreading every obj individually 

obj.lib = "node.js";
obj.framework.db.three = "sql server";

console.log(obj);
//console.log(obj2);

//another method of updating for only one object :
let obj2 = JSON.parse(JSON.stringify(obj));
obj.framework.db.one = "SQL";
console.log(obj);
console.log(obj2);