// done
function deretRam(k) {
    var result = [];

    while(k >= 0) {
        result.push(Math.pow(2, k));
        k--;
    }

    for (var i = result.length - 1; i >= 0; i--) {
        console.log(result[i]);
    }
}

deretRam(7)