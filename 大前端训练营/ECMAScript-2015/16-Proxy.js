// Proxy对象

// const person = {
//     name: 'Joshua',
//     age: 20
// }

// const personProxy = new Proxy(person, {
//     // 监视属性的读取
//     get(target, property) {
//         // console.log(target);
//         // console.log(property);
//         // return 100;

//         return property in target ? target[property] : 'default';
//     },
//     // 监听属性的设置
//     set(target, property, value) {
//         if (property === 'age') {
//             if (!Number.isInteger(value)) {
//                 throw new TypeError(`${value} is not an int`);
//             }
//         }
//         target[property] = value;
//         console.log(target, property, value);
//     }
// });

// personProxy.age = 100;
// personProxy.gender = true;

// console.log(personProxy.name);
// console.log(personProxy.age);
// console.log(personProxy.xxx);


/**
 * Proxy 对比 Object.defineProperty()
 * 
 * 优势一：Proxy可是监测读写以外的操作
 */
// const personProxy2 = new Proxy(person, {
//     deleteProperty(target, property) {
//         console.log('delete property: ', property); // delete property:  name
//         delete target[property];
//     }
// });

// delete personProxy2.name
// console.log(person) // { age: 100, gender: true }

/**
 * 优势二：Proxy可以很方便的监听数组的操作
 */

// const list = [];

// const listProxy = new Proxy(list, {
//     set(target, property, value) {
//         console.log(target, property, value);
//         target[property] = value;
//         // 表示设置成功
//         return true;
//     }
// });

// listProxy.push(100);
// listProxy.push(200);
// console.log(list);


/**
 * 优势三：Proxy不需要侵入对象
 */
const person = {};
Object.defineProperty(person, 'name', {
    get() {
        console.log('name被访问了');
        return person._name;
    },
    set(value) {
        console.log('name被设置了');
        person._name = value;
    }
});

person.name = "Joshua";
console.log(person);
console.log(person.name);


// Proxy方式更为合理
const person2 = {
    name: 'Joshua',
    age: 28
}

const personProxy = new Proxy(person2, {
    get(target, property) {
        console.log('get', property)
        return target[property]
    },
    set(target, property, value) {
        console.log('set', property, value)
        target[property] = value
    }
});

personProxy.name = 'Joshua';

console.log(personProxy.name);