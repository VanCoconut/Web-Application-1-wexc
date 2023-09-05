"use strict";

function hypotenuse(a, b) {
    //closure inaccessibile
    const square = x => x * x;
    return Math.sqrt(square(a) + square(b));
}

function hypotenuse2(a, b) {
    //closure inaccessibile
    function square(x) { return x * x; }
    return Math.sqrt(square(a) + square(b));
}

//console.log(hypotenuse(3,4));

function greeter(name) {
    const myname = name;
    const hello = function () {
        return "Hello " + myname;
    }
    return hello;
}
const a = greeter("Tom");
const b = greeter("Jerry");
//console.log(a());
//console.log(b());

function counter(){
    let value=0;
    /*
    const getNext() = () => value++;
    return getNext;
    */
   //short way
    return () => value++
}

/* const clockwacth = () =>{
    let n = 0;
    return {   
        count : function() {
            return n++;
        },
        reset: function() {
            n=0;
        }
    }
} */

const clockwacth = () =>{
    let n = 0;
    return {   
        count : () => n++,
        reset: () =>  n=0
    }
    
}

let c = counter();
//console.log(c());
//console.log(c());
let cl = clockwacth();
console.log(cl.count());
console.log(cl.count());
console.log(cl.count());
console.log(cl.reset());
