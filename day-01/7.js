// done
function deretSatu(k) {
    let result = '';
    for(let i = 0; i < k; i++) {
        for(let j = 0; j < k; j++) {
            if(j <= i) {
                result += '1';
            }
        }
        result += ' ';
    }
    console.log(result);
}

deretSatu(5);
deretSatu(10);