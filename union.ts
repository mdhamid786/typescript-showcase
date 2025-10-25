// two type of data include in array

// let score:number  | string = 33

// score = 44
// score="njjdnnj"

// type user = {
//     id:number,
//     name: string,
// }

// type Admin = {
//     id:number,
//     username: string,
// }

// let hamid : user | Admin = {name:"hamid", id:786}
// hamid ={username:"hamid", id:786}

// Remove or rename the existing declaration of User type
type user = {
  id: number;
  name: string;
};
type Admin = {
  id: number;
  username: string;
};
let hamid: user | Admin;
hamid = { name: "hamid", id: 786 };
hamid = { username: "hamid", id: 786 };

function getDbId(id: number | string) {
  // making some API
  console.log(`Db id is ${id}`);
}
getDbId(3);
getDbId("3");

// multiple type with array
const data: number[] = [1, 2, 3];
const dat2: string[] = ["1", "2", "3"];
const data3: string[] | number[] = [1,2,3];
// still all number or string
