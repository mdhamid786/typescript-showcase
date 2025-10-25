"use strict";
// a group of constant
// that can assign a number to your string
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["MANAGER"] = 2] = "MANAGER";
})(Role || (Role = {}));
console.log(Role.MANAGER);
