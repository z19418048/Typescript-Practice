"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.lastName + this.firstName;
    }
    walk() {
        console.log(this.fullName + 'is Walking');
    }
    talk() {
        console.log(this.fullName + 'is talking');
    }
}
class Student extends Person {
    constructor(id, firstName, lastName) {
        super(firstName, lastName);
        this.id = id;
    }
    study() {
        console.log(this.fullName + 'is Studying');
    }
    test() {
        this.walk();
    }
}
class Teacher extends Person {
    constructor(id, firstName, lastName) {
        super(firstName, lastName);
        this.id = id;
    }
    teach() {
        console.log(this.fullName + 'is teaching');
    }
    get fullName() {
        return this.lastName + '老师';
    }
}
class AssistantTeacher extends Person {
    get fullName() {
        return this.lastName + '助教';
    }
}
let student = new Student(1, '三', '李');
student.test();
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
//# sourceMappingURL=index.js.map