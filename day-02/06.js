// done
function isCharUnique(kata) {
    let isUnique = true;

    for (let i = 0; i < kata.length; i++) {
        for (let j = i + 1; j < kata.length; j++) {
            if(kata[i] === kata[j]) {
                isUnique = false;
                return isUnique;
            }
        }
    }
    return isUnique;
}

console.log(isCharUnique("abcdefg"));
console.log(isCharUnique("abcdefga"));