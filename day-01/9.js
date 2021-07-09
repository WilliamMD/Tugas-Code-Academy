// belum
function randomPosition(k) {
    var result = 0;
    for(var i = 0; i < k; i++) {
        result = Math.floor(Math.random() * (900 - 100) + 100);
        console.log(result);
    }
}

randomPosition(7);