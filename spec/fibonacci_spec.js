const fibonacci = require("../lib/fibonacciKeli")

describe("fibonacci", ()=> {

    it("should return 1 when input 1", ()=> {
        expect(fibonacci(1)).toBe(1)
    })
    it("should return 1 when input 2", ()=> {
        expect(fibonacci(2)).toBe(1)
    })
    it("should return 2 when input 3", ()=> {
        expect(fibonacci(3)).toBe(2)
    })
    it("input 4, should return 3", ()=> {
        expect(fibonacci(4)).toBe(3)
    })
    it("input 5, should return 5", ()=> {
        expect(fibonacci(5)).toBe(5)
    })
    it("input 6, should return 8", ()=> {
        expect(fibonacci(6)).toBe(8)
    })
    it("input 7, should return 13", ()=> {
        expect(fibonacci(7)).toBe(13)
    })
})
