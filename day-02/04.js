// done
//=================================================================================================
const fs = require("fs");
let data = fs.readFileSync('./02.csv', 'utf8');
function convertArray(data) {
    let splitData = data.split('\r\n').join(',').split(' ').join(',').split(',');

    let result = [];
    for (let i = 0; i < splitData.length; i++) {
        result.push(splitData[i]);
    }

    return result;
}
//=================================================================================================

function showProducts(products) {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    let temp = "" ;

    for (let i = 0 ; i < alphabet.length; i++) {
        for (let j = i + 1; j < products.length; j++) {
            if (products[j][0].toLowerCase() === alphabet[i].toLowerCase()) {
                temp += products[j] + " ";
            }
        }
        console.log("==== " + alphabet[i] + " ====");
        console.log(temp);
        console.log("");
        console.log("");
        console.log("");
        console.log("");
        temp = "";
    }
}

console.log(showProducts(convertArray(data)));