// Reflect

// const obj = {
//     foo: '123',
//     bar: '456'
// };

// const proxy = new Proxy(obj, {
//     get(target, property) {
//         console.log("watch logic~");
//         return Reflect.get(target, property);
//     }
// });

// console.log(proxy.foo);

const obj = {
    name: 'Joshua',
    age: 28
};

// 使用Reflect之前的操作
console.log('name' in obj);
console.log(delete obj['age']);
console.log(Object.keys(obj));

// Reflect封装了一套对API的操作
console.log(Reflect.has(obj, 'name'));
console.log(Reflect.deleteProperty(obj, 'age'));
console.log(Reflect.ownKeys(obj));