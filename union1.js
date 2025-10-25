"use strict";
// declare value that can be one of the several type
let data;
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine(10, 20));
console.log(combine("10", "20"));
// let dataval:any = "10"  
