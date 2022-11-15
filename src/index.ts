class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.lastName + this.firstName
    }
    protected walk(): void{
        console.log(this.fullName + 'is Walking');
    }
    talk(): void{
        console.log(this.fullName + 'is talking');
        
    }
}

class Student extends Person{
    public id: number
    constructor(id: number, firstName: string, lastName: string) {
        super(firstName, lastName)
        this.id = id
    }
    study(): void{
        console.log(this.fullName + 'is Studying');
    }
    test(): void{
        this.walk()
    }
}

class Teacher extends Person{
    id: number;
    constructor(id: number, firstName: string, lastName: string){
        super(firstName, lastName)

        this.id = id
    }
    teach(): void{
        console.log(this.fullName + 'is teaching');
    }
    override get fullName() {
        return this.lastName + '老师'
    }
}

class AssistantTeacher extends Person {
    override get fullName(): string {
        return this.lastName + '助教'
    }
}
let student = new Student(1, '三', '李')
student.test()
// const student = new Student(1, '三', '张')
// const teacher = new Teacher(101,'江', '战')
// const assistantTeacher = new AssistantTeacher('二', '王')

// function printNames(people: Person[]){
//     for(const person of people){
//         console.log(person.fullName);
//     }
// }

// printNames([
//     student,
//     teacher,
//     assistantTeacher
// ])


//开闭原则 ： 类应该对扩展开放，修改封闭

