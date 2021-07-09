function isCharUnique(kata) {
    var temp = '';
    var isUnique = true;

    for (var i = 0; i < kata.length; i++) {
        for (var j = 0; j < kata.length; j++) {
            if (kata[j] > kata[j - 1]) {
                temp = kata[j];
                kata[j] = kata[j - 1];
                kata[j - 1] = temp;
            }
        }
    }

    for (var i = 0; i < kata.length; i++) {
        if (kata[i] === kata[i-1]) {
            isUnique = false;
        }
    }
    return kata;
}

console.log(isCharUnique("abcdefg"));
console.log(isCharUnique("abcdefga"));