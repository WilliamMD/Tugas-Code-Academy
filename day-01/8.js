// done
function deretNegation(k) {
    let result = 0;
    let temp = 1;

    for (let i = 1; i <= k; i++) {
        if (i % 2 !== 0) {
            result += temp * -1;
            console.log(result);
        }
        else {
            result += temp;
            console.log(result);
        }
        temp ++;
    }
}

deretNegation(25);