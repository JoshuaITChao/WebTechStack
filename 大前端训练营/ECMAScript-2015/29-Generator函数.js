// Generator函数

// function * foo() {
//     console.log('Joshua');
//     return 100;
// }
// const ret = foo();
// console.log(ret.next());

function * foo() {
    console.log('111');
    yield 100;
    console.log('222');
    yield 200;
    console.log('333');
    yield 300;
}

const generator = foo();
console.log(generator.next());      // 第一次调用，函数执行体开始执行，遇到第一个 yield 暂停
console.log(generator.next());      // 第二次调用，从暂停的位置开始执行,直到遇到 第二个 yield 暂停
console.log(generator.next());      // ...
console.log(generator.next());      // 第四次调用，已经没有需要执行的内容了，所以直接得到 undefined