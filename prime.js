let low;
let high;
low = 10;
high = 30;
for (i = low; i <= high; i++) {
    if (i % 2 == 0) {
        console.log(i, "is non prime");
    } else {
        console.log(i, "is prime");
    }
}