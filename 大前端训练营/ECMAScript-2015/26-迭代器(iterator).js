// 迭代器（iterator）
const st = new Set(['foo', 'bar', 'baz']);
console.log(st);

const iterator = st[Symbol.iterator]();
// console.log(iterator);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

while (true) {
    const current = iterator.next();
    if(current.done){
       break;
    }
    console.log(current.value);
}

