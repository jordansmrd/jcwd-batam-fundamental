const {sum, average} = require("./sum")
const {sum2, average2} = require("./sum copy")


test("Testing sum function", () => {
    expect(sum(1,2)).toBe(3)
})

test("Testing avg function", () => {
    expect(average([5,5,5,5])).toBe(5)
})


test("Testing sum function", () => {
    expect(sum2(1,2)).toBe(3)
})

test("Testing avg function", () => {
    expect(average2([5,5,5,5])).toBe(5)
})

let obj1 = { name : "jordan", age : 25} // 2keys / 2 props // name dan age
let obj2 = { name : "jordan2", age: 25}// 2 keys / 2 props // name dan age

const intersect = require("../../day 7/exercise")
test("testing intersect", () => {
    expect(intersect(obj1,obj2) ).toStrictEqual({ age : 25})
})