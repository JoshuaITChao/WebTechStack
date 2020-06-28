// extend继承
class Person {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(`Hi, my name is ${this.name}`)
    }
}

class Student extends Person {
    constructor(name, number) {
        super(name); // 父类的构造函数
        this.number = number;
    }
    hello() {
        super.say(); // 调用父类方法
        console.log(`my school number is ${this.number}`);
    }
}

const stu = new Student('Joshua', 1234567);
stu.hello();