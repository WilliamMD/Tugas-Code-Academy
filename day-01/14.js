// done
function segitiga(n, posisi) {
    var bintang = "";

    if(posisi === "bawah")
    {
        for(var i = 0; i < n; i++) {
            for(var j = 0; j <= i; j++) {
                bintang += ("* ");
            }
            bintang += ("\n")
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

segitiga(5, "atas");
 