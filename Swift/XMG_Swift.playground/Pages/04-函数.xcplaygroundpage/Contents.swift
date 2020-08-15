// 函数文档注释
/// 求和【 概述 】
///
/// 将2个整数想相加【 更详细的描述 】
///
/// - Parameter v1: 第一个整数
/// - Parameter v2: 第二个整数
/// - Returns: 2个整数的和
///
/// - Note：传入2个整数即可【 批注 】

func sum(v1: Int, v2: Int) {
    v1 + v2
}


// 多返回值-元组
func calculate(v1: Int, v2: Int) -> (sum: Int, difference: Int, average: Int) {
    let sum = v1 + v2
    return (sum, v1 - v2, (v1 + v2) >> 1)
}
let result = calculate(v1: 20, v2: 10)
print(result.sum)
print(result.difference)
print(result.average)


// 参数标签
func gotoWork(at time: String) {
    print("this time is \(time)")
}

gotoWork(at: "08:00")



func sum2(_ v1: Int, _ v2: Int) -> Int {
    v1 + v2
}

sum2(10, 20)



// 默认参数
func check(name: String = "nobody", age: Int, job: String = "none") {
    print("name = \(name), age = \(age), job = \(job)")
}

check(name: "Jack", age: 20, job: "IT");
check(name: "Rose", age: 30)
check(age: 50, job: "Batman")
check(age: 69)


// 可变参数
// 一个函数最多有一个可变参数，而且可变参数后面的参数不能省略参数标签
func foo(_ nums: Int...) -> Int {
    var total = 0
    for num in nums {
        total += num
    }
    return total
}
print(foo(10, 20, 30, 40))


// 输入输出参数
// inout 本质：地址传递
// inout参数不能由默认值
// inout参数只能传入可以被多次赋值的
var number = 10;
func add(_ num: inout Int) {
    num = 20;
}
add(&number)
print("number = \(number)")

// 交换两个值
func swapValues(_ v1: inout Int, _ v2: inout Int) {
    let tmp = v1;
    v1 = v2;
    v2 = tmp;
    
    // 更优雅的
    // (v1, v2) = (v2, v1)
}
var num1 = 10
var num2 = 20
swap(&num1, &num2)
print("num1 = \(num1)")
print("num2 = \(num2)")


// 函数重载（与返回值无关）
// 规则
// 函数名相同
// 参数个数不同、参数类型不同、参数标签不同


// 别名
typealias Byte = Int8
typealias Short = Int16
typealias Long = Int64

typealias Date = (year: Int, month: Int, day: Int)
func test(_ date: Date) {
    print(date.0)
    print(date.year)
}
test((2020, 08, 10))


// Void -> ()
typealias Void = ()


// 函数嵌套
func forward(_ forward: Bool) -> (Int) -> Int {
    func next(_ input: Int) -> Int {
        input + 1
    }
    func previous(_ input: Int) -> Int {
        input - 1
    }
    return forward ? next : previous
}

forward(true)(3)
forward(false)(4)

