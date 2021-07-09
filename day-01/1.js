// done
function sum(n) {
    result = 0;

    while(n > 0) {
        result += n % 10;
        n = Math.floor(n/10);
    }
    
    return console.log(result);
}

sum(3456);