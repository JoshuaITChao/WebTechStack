// swift去掉 ++ 和 --

// 闭区间运算符
let names = ["Anna", "Alex", "Brain", "Jack"]
// i 默认是 let 如果想要修改 i 那么需要修改为 var
for i in 0...3 {
    print(names[i])
}
for var i in 0...3 {
    i += 2
    print("i = \(i)")
}

// 区间类型
let stringRange = "cc"..."ff"
print(stringRange.contains("cb"))
print(stringRange.contains("dz"))
print(stringRange.contains("fz"))



// 判断是否的ASCII字符
let character: ClosedRange<Character> = "\0"..."~"
print(character.contains("C"))
print(character.contains("G"))


// 带间隔的区间
let hours = 11
let hourInterval = 2
// tickMark的取值：从4开始，累加2，不超过11
for tickMark in stride(from: 4, to: hours, by: hourInterval) {
    print("tickMark = \(tickMark)")
}

// switch用法:必须保证处理所有情况
// fallthrough 穿透
let string = "Joshua"
switch string {
case "Joshua":
    print("Joshua")
    fallthrough
case "Jack", "Rose":
    print("Jack")
default:
    break
}

// 值绑定
let point = (1, -1)
switch point {
case let (x, y) where x == y:
    print("on the line x == y")
case let (x, y) where x == -y:
    print("on the line x == -y")
case let (x, y):
    print("(\(x), \(y) is just some arbitrary point")
}

// where用法
var nums = [10, 20, -10, -20, 30, -30]
var sum = 0;
for num in nums where num > 0 {
    sum += num
}
print("sum = \(sum)")


// 标签语句
outer: for i in 1...4 {
    for k in 1...4 {
        if k == 3 {
            continue outer
        }
        
        if i == 3 {
            break outer
        }
        
        print("i = \(i), k = \(k)")
    }
}

