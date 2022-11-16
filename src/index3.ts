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

interface CloudCalender extends Calendar{
    sync():void
}
interface Account {
    name: string;
    password: string;
    login(): void
}
class GoogleCalender implements CloudCalender, Account{
    constructor(public name:string, public password:string){
    }
    login(): void {
        throw new Error("Method not implemented.");
    }
    addEvent(): void {
    }
    removeEvent(): void {
    }
    sync(): void {
        console.log('');
        
    }
}

let googleCalender = new GoogleCalender('个人','123')
googleCalender.addEvent()
console.log(googleCalender);
