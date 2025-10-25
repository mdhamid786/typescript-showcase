"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
    name: "hamid",
    email: "ali@gmail.com",
    isActive: true,
};
function createUser({ name: string, isPaid: boolean }) { }
const newUser = { name: "hamid", isPaid: true };
createUser(newUser);
function createCourse() {
    return { name: "reactJs", price: 786 };
}
