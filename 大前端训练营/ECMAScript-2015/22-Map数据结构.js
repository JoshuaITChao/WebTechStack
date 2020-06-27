// Map数据结构
const obj = {};
obj[true] = 'true';
obj[123] = '123';
obj[{ a: 1 }] = 'object';
obj[{ b: 2 }] = 'object2';

console.log(obj);
console.log(Object.keys(obj));
console.log(obj['[object Object]']);


const mp = new Map();
const joshua = { name: 'Joshua' };
mp.set(joshua, 90);

console.log(mp);
console.log(mp.get(joshua));

// mp.has()
// mp.delete()
// mp.clear()

mp.forEach((value, key) => {
    console.log(key, value);
});