// not sure, kyknya done
function countValley(road) {
    let count = 0;
    let temp = [];
    let gunung = 0;
    temp = road.split('');

    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === 'U') {
            count++;
        } else if (temp[i] === 'D') {
            count--;
        }

        if (count === 0 && temp[i-1] === 'U' && temp[i] === 'D') {
            gunung ++;
        }
    }

    return console.log(gunung + ' gunung');
}

countValley("UDDDUDUU");
countValley("UDDDUDUUUD");