// done
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

console.log(convertArray(data));