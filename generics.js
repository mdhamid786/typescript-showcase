"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(true);
function identityFour(val) {
    return val;
}
identityFour(true);
identityFour({
    brand: "",
    type: 0
});
// generics with array
function getSearchProducts(product) {
    const myIndex = 3;
    return product[myIndex];
}
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
// anotherFunction()
