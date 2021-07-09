// done
function reverse(n) {
    var result = 0;
    
    while(n > 0) {                              // 1. (0 * 10) + (1234 % 10) => 0 + 4 = 4
        result = (result * 10) + (n % 10);      // 2. (4 * 10) + (123 % 10) => 40 + 3 = 43
        n = Math.floor(n/10);                   // 3. (43 * 10) + (12 % 10) => 430 + 2 = 432
    }                                           // 4. (432 * 10) + (1 % 10) => 432 + 1 = 4321
    
    return console.log(result);
}

reverse(1234);