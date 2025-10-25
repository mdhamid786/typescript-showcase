"use strict";
// two type of data include in array
let hamid;
hamid = { name: "hamid", id: 786 };
hamid = { username: "hamid", id: 786 };
function getDbId(id) {
    // making some API
    console.log(`Db id is ${id}`);
}
getDbId(3);
getDbId("3");
// multiple type with array
const data = [1, 2, 3];
const dat2 = ["1", "2", "3"];
const data3 = [1, 2, 3];
// still all number or string
