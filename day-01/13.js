// done
function maxWordLength(s) {
    let temp = 0;
    let result;
    let str = s.split(' ');

    for (let i = 0; i < str.length; i++) {
        if (str[i].length > temp) {
            temp = str[i].length;
            result = str[i];
        }
    }

    return console.log(result);
}

maxWordLength("aku suka bootcamp sentul city ");