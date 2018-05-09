const anagram = require("../lib/anagram")

describe("anagram", ()=> {

    it("should return [] when input 1", ()=> {
        expect(anagram()).toEqual([])
    })
    it("should return [] when input 1", ()=> {
        expect(anagram("a")).toEqual(["a"])
    })
	//
    it("should return [] when input 1", ()=> {
        expect(anagram("ab")).toEqual(["ab","ba"])
    })
    it("should return [] when input 1", ()=> {
        expect(anagram("abc")).toEqual(["abc","acb",
		"bac","bca",
		"cab","cba" ])
    })
})
