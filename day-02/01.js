// done

let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let sayur = ["Kangkung", "Bayam", "Tomat", "Bawang", "Bayam"]

// // a. push()
// fruits.push("Anggur");
// fruits.push("Banana");
// fruits.push("Sirsak");
// console.log(fruits);

// // b. pop()
// fruits.pop();
// console.log(fruits);

// // c. splice()
// fruits.splice(2, 1);
// console.log(fruits);

// // d. splice()
// fruits.splice(2, 3);
// console.log(fruits);

// // e. splice()
// fruits.splice(2, 0, "Rambutan", "Bangkuang");
// console.log(fruits);

// // f. splice()
// fruits.splice(4, 1, "Nangka");
// console.log(fruits);

// g. concat()
var hybrid = fruits.concat(sayur);
console.log(hybrid);

// // h. reverse()
// hybrid.reverse();
// console.log(hybrid);

// i. function switch()
function switchVege(vege, vegeNew, vegeOld) {
    for (var i = 0; i <vege.length; i++) {
        if (vege[i].toUpperCase() === vegeOld.toUpperCase()) {
            vege[i] = vegeNew;
        }
        if (vege[i].toUpperCase() === vegeNew.toUpperCase()) {
            vege[i] = "   ";
        }
    }
    return vege;
};

console.log(switchVege(hybrid, 'TOMAT', 'JERUK'));
