// 函数参数的默认制

// function foo(enable) {
//     // 短路运算很多情况下是不适合判断默认参数的，例如 0、''、 false、 null
//     enable = enable || true;
//     console.log("foo invoke -enable: ", enable);
// }


function foo(enable = true) {
    // 短路运算很多情况下是不适合判断默认参数的，例如 0、''、 false、 null
    console.log("foo invoked -enable: ", enable);
}

foo(false);