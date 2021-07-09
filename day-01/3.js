// not sure
function howManyFrogJump(x, y, k) {
    var count = 0;
    for(i = x; i <= y; i++) {
        i += k;
        count++;
    }
    return console.log(count);
}

howManyFrogJump(10, 85, 30);