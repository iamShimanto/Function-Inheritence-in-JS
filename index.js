class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, i am ${this.name}`)
    }
}
class Student extends Person{
    constructor(name, age, marks) {
        super(name, age) // parents class constructor in being called
        this.marks = marks
    }
}

class Teacher extends Person{
    constructor(name, age, subjects) {
        super(name, age) // parents class constructor is being called
        this.subjects = subjects
    }
}

let stu1 = new Student("shimanto", 23, 95)
let teac1 = new Teacher("Elias" , 28 , "FDR")

console.log(stu1.talk())
console.log(teac1.talk())
