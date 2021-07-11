// done
function isPalindrome(s) {
    var flag = false;
    var reverse = "";

    for(var i = s.length-1; i >= 0; i--) {
        reverse += s[i];
    }
    
    if(s.toUpperCase() === reverse.toUpperCase() === true) {
        flag = true;
    }

    return console.log(flag);
}

isPalindrome('Kasur ini bagus');
isPalindrome('Kasur ini ruSak');