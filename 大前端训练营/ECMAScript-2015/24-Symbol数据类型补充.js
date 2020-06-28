// Symbol补充

// console.log(
//     // Symbol() === Symbol()            // false
//     Symbol('foo') === Symbol('foo') // false
// );

// Symbol全局注册表------------------------
// const s1 = Symbol.for('foo');
// const s2 = Symbol.for('foo');
// console.log(s1 === s2); // true


// console.log(Symbol.for(true) === Symbol.for('true')); // true


// Symbol内置常量------------------------
// console.log(Symbol.iterator); // Symbol(Symbol.iterator)
// console.log(Symbol.hasInstance); // Symbol(Symbol.hasInstance)

// const obj = {
//     [Symbol.toStringTag]: 'XObject'
// };
// console.log(obj);
// console.log(obj.toString());


// Symbol属性名获取
const obj = {
    [Symbol()]: 'symbol value',
    foo: 'normal value'
};

for (var key in obj) {
    console.log(key);
}
console.log(Object.keys(obj));
console.log(JSON.stringify(obj));

console.log(Object.getOwnPropertySymbols(obj));