// for number
function addTwo(num: number) {
  return num + 2;
}
addTwo(5);

// for string
function getUpper(val: string) {
  return val.toUpperCase();
}
getUpper("ghggghgh");

// multiple value
function signUpUser(name: string, email: string, isPaid: boolean) {}
signUpUser("hamid", "hamid@gmail.com", true);

// login user

let loginUser = (name: string, email: string, isPaid: boolean = true) => {
  if (isPaid === void 0) {
    isPaid = false;
  }
};
loginUser("hamid", "hamida@gmail.com");



// arrow function

const getHello = (s:string):string =>{
    return ""
}

getHello("wsnjsw")



// mapping array
const heros = ["splender","car", "maroti"]
// const heros = [1,2, 3]


heros.map((hero):string=>{
    return `hero is ${heros}`
})



function consoleError(errormsg: string):void{
console.log(errormsg)
}

function handleError(errormsg: string):never{
    throw new Error(errormsg)
    }
    

export {};
