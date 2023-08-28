let array = [2,4,6,8];
let carac = ['d', 'c', 'b', 'a'];
let descendente = array.sort((a, b) => a > b ? -1 : 1);
console.log(descendente);
let ascendente = carac.sort((a, b) => a > b ? 1 : -1);
console.log(ascendente);