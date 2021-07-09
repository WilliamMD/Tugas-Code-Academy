// belum
let numbers = [1, 2, 3, 4, 5];

function showElement(numbers) {
    var temp = [];
    var result = [];
    for (var i = 0; i < numbers.length; i++) {
        temp.push(numbers[i]);

        if(numbers[i] + temp === 9) {
            result.push(numbers[i]);
            result.push(temp);
        }

        if (temp.length > 1) {
            temp.shift();
        }

    }
    console.log(result);
}

console.log(showElement(numbers));