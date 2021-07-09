// belum
function deretNegation(k) {
    var result = 0;
    
    for(var i = 1; i <= k; i++) {
        var temp = i;

        if(temp % 2 === 1) {
            if(temp != 1) {
                temp = i + 1;
            }
            result = temp * -1;
        } else {
            temp -= 1;
            result = temp;
        }
        console.log(result);
    }
}

deretNegation(25)