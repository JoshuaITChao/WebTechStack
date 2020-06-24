// 箭头函数

// function inc(number) {
//     return number + 1;
// }

// 最简方式
// const inc = n => n + 1;


// 完整参数列表,函数体多条语句，返回值仍需 return
// const inc = (n, m) => {
//     console.log("inc invoked");
//     return n + m + 1;
// }
// console.log(inc(100))

const arr = [1, 2, 3, 4, 5, 6, 7];
const ret = arr.filter(function(value) {
    return value % 2;
});
console.log(ret);
console.log(arr);

// 常用场景
arr.filter(i => i % 2);