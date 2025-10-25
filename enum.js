"use strict";
var seatChoice;
(function (seatChoice) {
    seatChoice["AISLE"] = "AISHLE";
    seatChoice["MIDDLE"] = "MIDDLE";
    seatChoice["WINDOW"] = "WINDOW";
    seatChoice["FORTH"] = "FORTH";
})(seatChoice || (seatChoice = {}));
console.log(seatChoice);
const hcSeat = seatChoice.AISLE;
