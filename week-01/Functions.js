'use strict';

function square(x) {
    let y = x * x;
    return y;
}
let cube = function c(x) {
    let y = square(x) * x;
    return y;
}
let fourth = x => square(x) * square(x);

let n = fourth(4);

console.log("Ciao");
