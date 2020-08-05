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

// 弱引用版本 WeakMap
// 差异就是 Map 中会对所使用到的数据产生引用
// 即便这个数据在外面被消耗，但是由于 Map 引用了这个数据，所以依然不会回收
// 而 WeakMap 的特点就是不会产生引用，
// 一旦数据销毁，就可以被回收，所以不会产生内存泄漏问题。