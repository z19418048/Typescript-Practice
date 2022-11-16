// interface Person {
//     name:string
// }
class Person {
    constructor(public name: string){
    }
    say(){
        console.log('说什么');
    }
}

class Customer extends Person {
    override say(){
        console.log('客户说什么');
        
    }
}
function echo<T extends Person>(person: T){
    return person.say()
}

echo(new Person('子龍'))