/* abstract class Calendar{
    constructor(public name:string){
    }
    alert(){
        console.log('sdsds');
        
    }
    abstract addEvent():void 
    abstract removeEvent():void 
} */
interface Calendar {
    name:string
    addEvent():void 
    removeEvent():void 
}

class GoogleCalender implements Calendar{
    constructor(public name:string){
    }
    addEvent(): void {
    }
    removeEvent(): void {
    }
}

let googleCalender = new GoogleCalender('个人')
googleCalender.addEvent()