// done
function cariKata(word, keyword) {
    var found = false;

    for(var i = 0; i < word.length; i++) {
        if(word[i] == keyword) {
            found = true;
            return console.log(found);
        }
    }
    return console.log(found);
}

cariKata("aku suka javascript", "k");
cariKata("aku suka javascript", "z");