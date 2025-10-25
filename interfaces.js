"use strict";
const hamid = {
    dbId: 0,
    email: "ali@gmail.com",
    userId: 3,
    googleId: "dhde3",
    startTrail: () => {
        return "trial started";
    },
    getCoupon: (name, off) => {
        return 10;
    }
};
hamid.email = "new@gmail.com";
class instagram {
    constructor(cameraMode, filter, brust) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
    }
}
class Youtube {
    constructor(cameraMode, filter, brust, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
        this.short = short;
    }
    createStory() {
        console.log("Story was created ");
    }
}
