// done
function segitiga(n, posisi) {
    var bintang = "";

    if(posisi === "bawah")
    {
        for(var i = 0; i < n; i++) {
            for(var j = 0; j <= i; j++) {
                bintang += ("*");
            }
            bintang += ("\n")
        }
    } else if(posisi === "atas") {
        for (let i = 0; i < n; i++) {
            for(var j = 0; j < i; j++) {
                bintang += (" ");
            }
            for (let k = i; k <n; k++) {
                bintang += ("*");
            }
            bintang += ('\n');
        }
    }
    
    return process.stdout.write(bintang);
}

segitiga(5, "bawah");
console.log("\n");
segitiga(5, "atas");