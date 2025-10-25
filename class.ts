// class
class User {
    public email:string
    name:string
    private city:string="nnn"
    constructor(email:string, name:string){
        this.email = email,
        this.name = name
    }
}


// object
const hamid = new User("hammk@gamil.com","hhhbhbbh")
// hamid.city it private
hamid.email