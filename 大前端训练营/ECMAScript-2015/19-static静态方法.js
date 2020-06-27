// static 静态方法

class Person {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(`Hi, my name is ${this.name}`)
    }

    static create(name) {
        return new Person(name);
    }
}

const joshua = Person.create('Joshua');
joshua.say();