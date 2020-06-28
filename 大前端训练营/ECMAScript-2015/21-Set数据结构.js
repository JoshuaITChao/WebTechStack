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