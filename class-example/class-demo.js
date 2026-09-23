"use strict";
class User8 {
    userName;
    age;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    display() {
        console.log(`username : ${this.userName} age : ${this.age}`);
    }
}
let userF = new User8("moinul islam", 12);
userF.display();
let userF2 = new User8("rakib", 12);
userF2.display();
//inheritence 
class student extends User8 {
    studentId;
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`username : ${this.userName} age : ${this.age} studentid : ${this.studentId}`);
    }
}
let student1 = new student("moin", 15, 1555);
student1.display();
