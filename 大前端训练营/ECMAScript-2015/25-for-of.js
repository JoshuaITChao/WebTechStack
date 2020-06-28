// for...of循环

const arr = [100, 200, 300, 400];

// for (const item of arr){
//     console.log(item);
// }

// for...of 循环可以代替数组的 forEach 方法
// arr.forEach(item => {
//     console.log(item);
// });

// for (const item of arr){
//     console.log(item);
//     if(item > 100){
//         break;
//     }
// }

// forEach 无法跳出循环，必须通过 some 或者 every 方法
// arr.forEach()       // 不能跳出循环
// arr.some()
// arr.every()


// 遍历 Set 与遍历数组相同
// const st = new Set(['foo', 'bar']);
// for (const item of st){
//     console.log(item);
// }


// 遍历 Map 可以配合数组结构语法，直接获取键值
// const mp = new Map();
// mp.set('foo', 123);
// mp.set('bzr', 456);
//
// for (const [key, value] of mp){
//     console.log(key, value);
// }


// 普通对象不能通过 for...of 编列
// const obj = { 'foo': 123, 'bar': 456 };
// for (const item of obj){
//     console.log(item);
// }