let num;
for (num = 1; num < 21; num++) {
    if (num % 5 == 0 && num % 3 == 0) {
        console.log("fizzbuzz");
    } else if (num % 3 == 0) {
        console.log("fizz");
    } else if (num % 5 == 0) {
        console.log("buzz");
    } else {
        console.log(num);
    }
}