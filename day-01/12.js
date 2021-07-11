// done
function showGenap(n) {
    var genap = [];
    var number = n.toString().split('');

    for (var i = 0; i < number.length; i++) {
        if(number[i] % 2 == 0) {
            genap = genap.concat(number[i]);
        }
    }

    console.log(genap);
}

showGenap(2345678);