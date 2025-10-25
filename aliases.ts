
  
type User = {
    name:string,
    email:string,
    isActive:boolean
}

function createUser(User:User):User{
return {name:"", email:"", isActive:true}
}


function createUser1(user:User){
    console.log("my name is hamid" + user.name)
    }


createUser({name:"", email:"", isActive:true})

export {}