"use strict";
// class
class User {
    constructor(email, name) {
        this._courseCount = 1;
        this.city = "nnn";
        this.email = email,
            this.name = name;
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("couse count more than 1");
        }
        this._courseCount = courseNum;
    }
}
// object
const hamid = new User("hammk@gamil.com", "hhhbhbbh");
// hamid.city it private
hamid.email;
