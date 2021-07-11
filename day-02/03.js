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

function filterProduct(keyword, products) {
    var result = [];
    for (var i = 0; i < products.length; i++) {
        for (var j = 0; j < products[i][0].length; j++) {
            if (products[i][j] === keyword) {
                result.push(products[i]);
            }
        }
    }
    return result;
}

console.log(filterProduct("A", convertArray(data)));
console.log(filterProduct("S", convertArray(data)));