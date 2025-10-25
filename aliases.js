"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(User) {
    return { name: "", email: "", isActive: true };
}
function createUser1(user) {
    console.log("my name is hamid" + user.name);
}
createUser({ name: "", email: "", isActive: true });
