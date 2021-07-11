// done
function howManyWords(s) {
    var count = 0;
    if(s[0] != null && s[0] != ' ') {
        count = 1;
    }
    for(var i = 0; i < s.length; i++) {
        if(s[i] === ' ' && s[i+1] != null && s[i+1] != ' ') {
            count ++;
        }
    }
    return console.log(count);
}

howManyWords(" aku suka javascript fullstack  lho ");