// done
function swap(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return console.log(a, b);
}

swap(9, 5);