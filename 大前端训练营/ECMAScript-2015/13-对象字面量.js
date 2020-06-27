// 对象字面量

const bar = '345';

const obj = {
    foo: 123,
    // bar: bar,
    // 属性名称和变量名称一致，可以省去属性名称
    bar,
    // method1: function() {
    //     console.log("method1");
    // }
    // 方法可以省略 : function
    method1() {
        console.log("method1");
        // 这种方法就是普通的函数，同样影响 this 指向
        console.log(this);
    },
    // Math.random(): 123       // 不允许
    // 通过[]让表达式的结果作为属性名称
    [Math.random]: 123
};

console.log(obj);
obj.method1();