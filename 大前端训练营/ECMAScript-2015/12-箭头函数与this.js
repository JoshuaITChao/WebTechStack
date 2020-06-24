// 箭头函数与this
// 箭头函数不会改变this指向

const person = {
    name: "Joshua",
    // sayHi: function () {
    //     // 正常打印 hi, my name is Joshua
    //   console.log(`hi, my name is ${this.name}`);  
    // },
    sayHi: () => {
        // 因为箭头函数不会改变this的指向，所有打印结果为 hi, my name is undefined
        console.log(`hi, my name is ${this.name}`);
    },
    sayHiAsync: function() {
        console.log(`async hi, my name is ${this.name}`);

        // const _this = this;
        // setTimeout(function() {
        //     console.log(_this);
        //     console.log(_this.name);
        // }, 1000);

        setTimeout(() => {
            console.log(this);
            console.log(this.name);
        }, 1000);
    }
};

// person.sayHi();

person.sayHiAsync();