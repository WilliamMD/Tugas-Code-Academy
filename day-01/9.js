// done
function randomPosition(k) {
    let result = '';
    let rand = 0;
    let temp = [];

    for(let i = 0; i < k; i++) {
        for (let j = 1; j <= 3; j++) {
            rand = Math.floor(Math.random() * 9) + 1;
            temp.push(rand);
        }
        if (temp.includes(k)) {
            result += temp.join('') + '\n'
            temp = [];
        } else {
            temp = [];
            i--;
        }
    }

    console.log(result);
}

randomPosition(7);