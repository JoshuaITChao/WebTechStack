// 实现可迭代对象接口（Iterable）

// const obj = {
//     [Symbol.iterator]: function () {
//         return {
//             next: function () {
//                 return {
//                     value: 'Joshua',
//                     done: true
//                 }
//             }
//         }
//     }
// };


const obj = {
    store: ['foo', 'bar', 'baz'],
    [Symbol.iterator]: function () {
        let index = 0;
        const self = this;
        return {
            next: function () {
                const ret = {
                    value: self.store[index],
                    done: index >= self.store.length
                };
                index++;
                return ret;
            }
        }

    }
}


for (const item of obj){
    console.log(item);
}

