/**
 * let 声明的成员只会在所声明的块中生效
 */
// if (true) {
//     // var foo = 'LJN';
//     let foo = "LJN2";
//     console.log(foo);
// }


/**
 * let 在 for 循环中的使用
 */
// for (var i = 0; i < 3; i++) {
//     for (var i = 0; i < 3; i++) {
//         console.log(i);
//     }

//     console.log("内存循环结束 i = ", i);
// }

// for (var i = 0; i < 3; i++) {
//     for (let i = 0; i < 3; i++) {
//         console.log(i);
//     }

//     console.log("内存循环结束 i = ", i);
// }


/**
 * let 应用场景：循环绑定事件，事件处理函数中获取正确索引 
 */
// var elements = [{}, {}, {}];
// for (var i = 0; i < elements.length; i++) {
//     elements[i].onclick = function() {
//         console.log(i);
//     }
// }
// elements[0].onclick();      // 输出结果：3

// 解决办法1：
// var elements = [{}, {}, {}];
// for (var i = 0; i < elements.length; i++) {
//     elements[i].onclick = (function(i) {
//         return function() {
//             console.log(i);
//         }
//     })(i);
// }
// elements[0].onclick(); // 输出结果：0

// 解决办法2：通过let的方式解决
// for (let i = 0; i < elements.length; i++) {
//     elements[i].onclick = function() {
//         console.log(i);
//     }
// }
// elements[0].onclick();      // 输出结果：0


/**
 * for循环产生两层作用域
 */

// for (let i = 0; i < 3; i++) {
//     let i = 'foo';
//     console.log(i);
// }

// // 底层实现伪代码
// let i = 0;
// if(i < 3){
//     let i = "foo";
//     console.log(i);
// }
// i++;

/**
 * let修复了变量提升问题
 */
// console.log(foo);                // undefined
// var foo = "LJN";


// console.log(foo);
// let foo = "LJN";                    // ReferenceError: Cannot access 'foo' before initialization