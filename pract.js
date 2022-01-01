//change first letter of each word to upper case :
function capitalize_Words(str) {
    return str.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
console.log(capitalize_Words('js string exercises'));
//replace is a function-string.replace(searchvalue, newvalue); /\w\S*/g-searchvalue,function(txt)-newvalue
//"/w"-find word,"\S*"-any string, "/g"-all words dont stop on first

//==============================================================================================//

//Find the Longest Word in a String.:
function length(str) {
    let substr = str.split(" ");
    let longest = 0;
    for (let i = 0; i < substr.length; i++) {
        if (substr.length > longest) {
            longest = substr[i].length;
        }
    }
    return longest;
}
console.log(length("hi all how are you doing"));