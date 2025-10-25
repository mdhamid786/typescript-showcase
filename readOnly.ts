  
type User = {
    readonly _id:string, //read only not change
    name:string,
    email:string,
    isActive:boolean,
    creditCardDetails?:Number
}


let myUser:User = {
    _id: "122",
    name: "h",
    email: "",
    isActive: false,
    creditCardDetails: 2
}

type cardNumber = {
    cardnumber:string
}

type cardDate = {
    carddate:string
}

type CardDetails = cardNumber & cardDate & {
    cvv:number
}


myUser.email = "dhehdehh"
// myUser._id = "ss"  //read only not change