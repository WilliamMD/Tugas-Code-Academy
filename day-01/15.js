// done
function segitiga(n, posisi) {
    let bintang = "";

    if(posisi === "bawah")
    {
        for (let i = 0; i < n; i++) {
            for (let j = n-1; j >= i; j--) {
                bintang += (" ");
            }
            for (let k = 0; k <= i; k++) {
                bintang += ("*");
            }
            bintang += ('\n');
        }
    } else if(posisi === "atas") {
        for(var i = 0; i < n; i++) {
            for(var j = n; j > i; j--) {
                bintang += ("*");
            }
            bintang += ("\n")
        }
    }
    
    return process.stdout.write(bintang);
}

segitiga(5, "bawah");
console.log("\n");
segitiga(5, "atas");