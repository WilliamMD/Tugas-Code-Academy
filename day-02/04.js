// belum
//=================================================================================================
var data = "LG Monitor Asus Laptop 5432 Mix For Youtuber Bluetooth Adapter Solo Leveling Webtoon Panasoni Air Conditioner Karaoke Bazooka PowerBank 24 Hours Backpack of Holding Game Box 5 Universal Gadget Charger USB Squirming Tentacle USB Fishquarium Intel Processor 8 core Space Bar Keyboard Organizer & USB Hub Pop USB Pet Rock Powerstation 5 Dual Heated Travel Mug Crosley Collegiate Portable USB Turntable Hoodie AK-47"

function convertArray(data) {
    var result = [];
    var temp = "";
    
    for (var i = 0; i < data.length; i++) {
        if (data[i] !== " ") {
            temp += data[i];
        } else {
            result.push(temp);
            temp = "";
        }
        if (i === data.length - 1) {
            result.push(temp);
            temp = "";
        }
    }
    return result;
}
//=================================================================================================

function showProducts(products) {
    // var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var alphabet = ["P"];
    var temp = "";

    for (var i = 0; i < products.length; i++) {
        for (var j = 0; j < products[i][0].length; j++) {
            for(var k = 0; k < alphabet.length; k++) {
                if (products[i][j] === alphabet[k]) {
                    temp += products[i];
                }
            }   
        }
    }

    for (var i = 0; i < alphabet.length; i++) {
        if(temp[0] === alphabet[i]) {
            console.log("==== " + alphabet[i] + " ====");
            console.log("");
            console.log(temp);
            console.log("");
            console.log("");
            console.log("");
        }
    }
}

console.log(showProducts(convertArray(data)));