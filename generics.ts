const score : Array<number>= []
const names : Array<string>= []

function identityOne(val:boolean | number): boolean|number{
    return val
}


function identityTwo(val:any):any{
    return val
}


function identityThree<Type>(val:Type):Type{
    return val
}
identityThree(true)



function identityFour<T>(val:T):T{
    return val
}
identityFour(true)



interface Bottle {
    brand:string,
    type:number
}

identityFour<Bottle>({
    brand: "",
    type: 0
})



// generics with array

function getSearchProducts<T>(product:T[]):T{
 const myIndex = 3
 return product[myIndex]
}


// generics with class

interface Database {
    connection:string,
    username:string,
    password:string
}

function anotherFunction<T,U extends Database>(valOne:T, valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}

// anotherFunction()



