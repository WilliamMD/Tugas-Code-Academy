// done
function factorial(n) {
    var result = 1;

    while (n > 0 ) {
        result *= n;
        n--;
    }

    return console.log(result);
}

factorial(4);