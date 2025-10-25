 // class
class User {

    private _courseCount =1 

    public email:string
    name:string
    private city:string="nnn"
    constructor(email:string, name:string){
        this.email = email,
        this.name = name
    }

    get getAppleEmail():string {
        return `apple ${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }

    set courseCount(courseNum){
        if (courseNum<=1) {
            throw new Error ("couse count more than 1")
        }
        this._courseCount = courseNum
    }
}





// object
const hamid = new User("hammk@gamil.com","hhhbhbbh")
// hamid.city it private
hamid.email