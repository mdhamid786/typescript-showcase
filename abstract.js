"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getrealTime() {
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, brust) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const hc = new Instagram("test", "test", 3);
hc.getrealTime();
