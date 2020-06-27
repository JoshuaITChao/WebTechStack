// Object.assign方法

const source1 = {
    a: 123,
    b: 123
};

const source2 = {
    b: 789,
    d: 789
}

const target = {
    a: 456,
    c: 456
}

// const ret = Object.assign(target, source1);
// console.log(ret); // { a: 123, c: 456, b: 123 }
// console.log(target) // { a: 123, c: 456, b: 123 }
// console.log(target === ret); // true

// const ret = Object.assign(target, source1, source2);
// console.log(ret);                                       // { a: 123, c: 456, b: 789, d: 789 }
// console.log(target);                                    // { a: 123, c: 456, b: 789, d: 789 }
// console.log(target === ret);                            // true



// 应用场景

function func(obj) {
    // obj.name = 'func obj';
    // console.log(obj);

    const funcObj = Object.assign({}, obj);
    funcObj.name = 'func obj';
    console.log(funcObj);

}

const obj = {
    name: 'global obj'
};

func(obj);
console.log(obj);