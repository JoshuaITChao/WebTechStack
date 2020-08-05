// Set数据结构

const st = new Set();
st.add(1).add(2).add(3).add(2);
console.log(st);


// st.forEach(element => {
//     console.log(element);
// });

// for (let i of st) {
//     console.log(i);
// }

// console.log(st.size);

// console.log(st.has(1));

// console.log(st.delete(1));
// console.log(st);

// st.clear();
// console.log(st);


// 应用场景：数组去重
const arr = [1, 2, 3, 4, 5, 4, 1];

// const ret = Array.from(new Set(arr));
// console.log('ret= ', ret);

const ret = [...new Set(arr)];
console.log('ret= ', ret);


/**
 * 弱引用版本 WeakSet
 * 差异：Set 中会对所引用的数据产生强引用
 * 即便这个数据在外部被消耗，但是由于 Set 引用了这个数据，所以依然不会被释放
 * 而 WeakSet 的特点就是不会对数据产生强引用
 * 一旦外部数据被销毁，就会被立即回收，所以不会产生内存泄露的问题
 */
