interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}


const hamid: User = {
    dbId: 0,
    email: "ali@gmail.com",
    userId: 3,
    googleId: "dhde3",
    startTrail: (): string => {
        return "trial started"
    },
    getCoupon: (name: "hamid10", off: 10) => {
        return 10
    }
}


hamid.email = "new@gmail.com"
// hamid.dbId=033


// interface vs type


interface TakePhoto {
    cameraMode: string
    filter: string
    brust: number
}

interface Story {
    createStory(): void
}

class instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public brust: number,
    ) { }

}



class Youtube implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public brust: number,
        public short: string
    ) { }

    createStory(): void {
        console.log("Story was created ")
    }

}

