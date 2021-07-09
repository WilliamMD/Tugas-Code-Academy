// belum
function segitiga(n, posisi) {
    var bintang = "";

    if(posisi === "bawah")
    {
        for (let i = n; i > 0; i--) {
            for (let j = 1; j <= n; j++) {
                if (j >= i) {
                    bintang += '* ';
                } else {
                    bintang += ' '
                }
            }
            bintang += '\n';
        }
    } else if(posisi === "atas") {
        for(var i = 0; i < n; i++) {
            for(var j = n; j > i; j--) {
                bintang += ("* ");
            }
            bintang += ("\n")
        }
    }
    
    return console.log(bintang);
}

segitiga(5, "bawah");