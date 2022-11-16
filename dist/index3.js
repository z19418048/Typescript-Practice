"use strict";
class GoogleCalender {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
    login() {
        throw new Error("Method not implemented.");
    }
    addEvent() {
    }
    removeEvent() {
    }
    sync() {
        console.log('');
    }
}
let googleCalender = new GoogleCalender('个人', '123');
googleCalender.addEvent();
console.log(googleCalender);
//# sourceMappingURL=index3.js.map