abstract class TakePhoto {
    constructor(
        public cameraMode:string,
        public filter:string
    ) {}
    abstract getSepia():void
    getrealTime():number{
        return 8
    }
}


class Instagram extends TakePhoto {
   
    constructor (
        public cameraMode:string,
        public filter:string,
        public brust:number

        ){
            super(cameraMode,filter)
        }

        getSepia(): void {
           console.log("Sepia")
        }
    
}

const hc  = new Instagram("test", "test",3)


hc.getrealTime()
