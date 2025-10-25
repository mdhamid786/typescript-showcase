"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// for number
function addTwo(num) {
    return num + 2;
}
addTwo(5);
// for string
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("ghggghgh");
// multiple value
function signUpUser(name, email, isPaid) { }
signUpUser("hamid", "hamid@gmail.com", true);
// login user
let loginUser = (name, email, isPaid = true) => {
    if (isPaid === void 0) {
        isPaid = false;
    }
};
loginUser("hamid", "hamida@gmail.com");
// arrow function
const getHello = (s) => {
    return "";
};
getHello("wsnjsw");
// mapping array
const heros = ["splender", "car", "maroti"];
// const heros = [1,2, 3]
heros.map((hero) => {
    return `hero is ${heros}`;
});
function consoleError(errormsg) {
    console.log(errormsg);
}
function handleError(errormsg) {
    throw new Error(errormsg);
}
