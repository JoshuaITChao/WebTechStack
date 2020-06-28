// Symbol数据类型

// 场景一：扩展对象，属性名冲突问题
// shared.js--------------------
const cache = {};

// a.js-------------------------
cache['a_foo'] = Math.random();

// b.js-------------------------
cache['b_foo'] = '123';

console.log(cache);


//---------------华丽的分割线-------------------
const sy = Symbol();
console.log(sy); // Symbol()
console.log(typeof sy); // symbol

// 两个Symbol()永远不会相等
console.log(Symbol() === Symbol()); // false


// Symbol描述文本
console.log(Symbol('foo')); // Symbol(foo)
console.log(Symbol('bar')); // Symbol(bar)
console.log(Symbol('bdz')); // Symbol(bdz)

// 使用 Symbol 用作对象的 key 目的为了不重复
const obj = {};
obj[Symbol()] = '123';
obj[Symbol()] = '456';
console.log(obj);

// 也可以在计算属性中使用
const obj2 = {
    [Symbol()]: 123
};
console.log(obj2);


//---------------华丽的分割线-------------------
// 案例2：Symbol 模拟实现私有成员
// a.js---------------------
const name = Symbol();
const person = {
    name: 'Joshua',
    say() {
        console.log(this);
        console.log(this['name']);
    }
};

// 对外只暴露person

// b.js---------------------
// 由于无法创建出来和 Symbol() 一样的值
// 因此无法访问到 person 中[私有]成员
console.log(person[Symbol()]);
person.say();