// Generator应用

// 案例一：发号器
function * createIdMaker() {
    let id = 1;
    while (true){
        yield id++;
    }
}

const idMaker = createIdMaker();
console.log(idMaker.next());
console.log(idMaker.next());
console.log(idMaker.next());
console.log(idMaker.next());
console.log(idMaker.next());

// 案例二：使用 Generator 函数实现 iterator 方法
const todos = {
    life: ['吃饭', '睡觉', '打豆豆'],
    learn: ['语文', '数学', '外语'],
    work: ['喝茶'],
    [Symbol.iterator]: function * () {
        const all = [...this.life, ...this.learn, ...this.work]
        for (const item of all) {
            yield item
        }
    }
}

for (const item of todos) {
    console.log(item)
}