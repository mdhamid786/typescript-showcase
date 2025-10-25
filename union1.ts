// declare value that can be one of the several type


let data :number | string;


function combine (a:number | string,b:number |string){
   
    if (typeof a === "number" && typeof b === "number") {
        return a+b;
    } else {
      return a.toString() + b.toString()  
    }
}

console.log(combine(10,20))
console.log(combine("10","20"))



// let dataval:any = "10"  