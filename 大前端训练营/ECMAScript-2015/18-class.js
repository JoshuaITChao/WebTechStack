// class 关键词

// class之前
// function Person(name) {
//     this.name = name;
// }
// Person.prototype.say = function() {
//     console.log(`Hi, my name is ${this.name}`);
// }


// class之后
class Person {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(`Hi, my name is ${this.name}`);
    }
}


const p = new Person('Joshua');
p.say();