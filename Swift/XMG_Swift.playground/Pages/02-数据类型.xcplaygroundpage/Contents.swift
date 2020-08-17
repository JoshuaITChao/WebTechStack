/************************************字符串和字符相关操作******************************************/
let greeting = "Guten Tag!"
// G
print(greeting[greeting.startIndex])
// !
print(greeting[greeting.index(before: greeting.endIndex)])
// u
print(greeting[greeting.index(after: greeting.startIndex)])
// a
let index = greeting.index(greeting.startIndex, offsetBy: 7)
print(greeting[index])

for index in greeting.indices {
    print("\(greeting[index])", terminator: " ")
}

print()


// 插入和删除
var welcome = "hello"
welcome.insert("!", at: welcome.endIndex)
print(welcome)

welcome.insert(contentsOf: " there", at: welcome.index(before: welcome.endIndex))
print(welcome)


welcome.remove(at: welcome.index(before: welcome.endIndex))
print(welcome)
let range = welcome.index(welcome.endIndex, offsetBy: -6)..<welcome.endIndex
welcome.removeSubrange(range)
print(welcome)

// 子字符串
// SubString 会重用原字符串 String 的一部分字节空间,达到性能优化
// 注意 String 和 SubString 都遵守 StringProtocol 协议，这意味着操作字符串的函数使用 StringProtocol 会更加方便
var greeting2 = "Hello, world!"
let index2 = greeting2.firstIndex(of: ",") ?? greeting2.endIndex
let beginning = greeting2[..<index2]
print(beginning)

greeting2.remove(at: greeting2.index(after: greeting2.startIndex))

// 将结果转换为 String 以便长期存储
let newString = String(beginning)
print(newString)


// 字符的 Unicode 表示形式
let dogString = "Dog‼🐶"

for codeUnit in dogString.utf8 {
    print("\(codeUnit)", terminator: " ")
}
print("")

for codeUnit in dogString.utf16 {
    print("\(codeUnit)", terminator: " ")
}
print("")


/************************************集合相关操作******************************************/
// 1.数组
// 创建一个空数组
var someInts = [Int]()
print("someInts is of type [Int] with \(someInts.count) items")
// someInts里面包含一个 Int 值
someInts.append(3)
// someInts是一个空数组，但是仍然是[Int]类型
someInts = []

// 创建一个带有默认值的数组
// threeDoubles 是一种 [Double] 数组，等价于 [0.0, 0.0, 0.0]
var threeDoubles = Array(repeatElement(0.0, count: 3))

// 通过两个数组相加创建一个数组
var anotherThreeDoubles = Array(repeatElement(2.5, count: 3))
var sixDoubles = threeDoubles + anotherThreeDoubles
print("sixDoubles = \(sixDoubles)")

// 通过字面量构建数组
var shopList: [String] = ["Eggs", "Mail"]

// 插入
shopList.insert("Joshua", at: 0)
print("insert shopList: \(shopList)")

// 删除
shopList.remove(at: 0)
shopList.removeLast()
print("remove shopList: \(shopList)")

// 数组的遍历
for item in shopList {
    print("item: \(item)")
}

for (index, value) in shopList.enumerated() {
    print("index: \(index)  value: \(value)")
}


// 2.集合
// 集合用来存储相同类型并且没有顺序的值，注意：swift 中的 Set 类型被桥接到 Foundation 的 NSSet 类

// 创建和构造一个空的集合类型
var letters = Set<Character>()
print("letters is of type Set<Character> with \(letters.count) items.")

letters.insert("a")
print(letters)

// letters 是一个空的 Set，但是它依然是 Set<Character> 类型的
letters = []

// 用数组字面量创建集合
var favoriateGenres: Set<String> = ["Rock", "Classical", "Hip hop", "Rock"]
print("favoriateGenres: \(favoriateGenres)")

// 访问和修改一个集合
print("I have \(favoriateGenres.count) favorite music genres")

if favoriateGenres.isEmpty {
    print("As far as music goes, I`m no picky")
}else{
    print("I have particular music perferences")
}

// 添加元素
favoriateGenres.insert("Jazz")

// 删除元素
if let removeGenre = favoriateGenres.remove("Rock") {
    print("\(removeGenre), I`m over it")
} else {
    print("I never much cared for that")
}

// 包含某个元素
if favoriateGenres.contains("Funk") {
    print("I get up on the good foot.")
} else {
    print("It`s too funky in here")
}

// 遍历一个集合
for genre in favoriateGenres {
    print("\(genre)")
}

// 集合的操作
// intersection：交集
// symmetricDifference：差集
// union：并集
// subtracting：方法根据不在另一个集合中的值创建一个新的集合
let oddDigits: Set = [1, 3, 5, 7, 9]
let evenDigits: Set = [0, 2, 4, 6, 8]
let singleDigitPrimeNumbers: Set = [2, 3, 5, 7]

print("union: \(oddDigits.union(evenDigits).sorted())")
print("intersection: \(oddDigits.intersection(evenDigits).sorted())")
print("subtracting: \(oddDigits.subtracting(singleDigitPrimeNumbers).sorted())")
print("symmetricDifference: \(oddDigits.symmetricDifference(singleDigitPrimeNumbers).sorted())")


// 集合类型的哈希值
// 一个类型为了存储在集合中，该类型必须是可哈希化的，也就是该类型必须提供一个方法来计算他的哈希值，哈希值是一个 Int 类型的，相同对象的哈希值必须相同
// 可以使用自定义的类型作为集合值的类型或者字典键的类型，首先需要自定义类型遵守 Swift 标准库的 Hashable 协议，实现返回值为 Int 的可读属性 hashValue,同时 Hashable 协议遵守 Equatable 协议，所以遵守 Hashable 协议的类型必须提供一个 "是否相等" 的实现




// 3.字典
// 创建一个空字段
var nameOfInterges = [Int: String]()
nameOfInterges[16] = "sixteen"
print("\(nameOfInterges)")

nameOfInterges = [:]
print("\(nameOfInterges)")

// 用字面量创建字典
var airports: [String: String] = ["YYZ": "Toronto Pearson", "DUB": "Dublin"]
print("\(airports)")

// 访问和修改字典
print("The dictionary of airports contains \(airports.count) items.")

if airports.isEmpty {
    print("The airports dictionary is Empty")
} else {
    print("The airports dictionary is no Empty")
}

airports["LHR"] = "LHR"

// update(_:forKey:) 更新字典中的值，注意此方法会返回旧值
let upV = airports.updateValue("Dublin Airport", forKey: "LHR")
print(upV)

if let oldValue = airports.updateValue("ZHSwift", forKey: "LHR") {
    print("The old value for LHR was \(oldValue)")
}

// 注意：字典的获取值是可选类型

// 字典的遍历  可以通过 keys / values 获取对应的值
for (airportCode, airportName) in airports {
    print("\(airportCode) : \(airportName)")
}

// 通过字典构建数组
let airportCodes = [String](airports.keys)
print("airportCodes: \(airportCodes)")
let airportNames = [String](airports.values);
print("airportNames: \(airportNames)")
