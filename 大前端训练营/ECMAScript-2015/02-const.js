// const name = "Joshua";
// // 常量声明过后是不可以重新赋值的
// name = "Tim";                       // TypeError: Assignment to constant variable.

// 常量要求声明的同时赋值
// const name;
// name = "Joshua";                      // SyntaxError: Missing initializer in const declaration

// 常量只是要求内层指向不允许修改
const obj = {};
// 对于数据成员的修改是没问题的
obj.name = "Joshua";

obj = {}; // TypeError: Assignment to constant variable.