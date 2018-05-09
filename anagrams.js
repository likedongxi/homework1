var a = "abcd"
console.log(a)
for(var i=0; i<a.length; ++i)
{
	console.log(a[i])
}

console.log(a.length)
var c=a[0]+a[2]
console.log(c)
var c = a.substr(0,2)+a.substr(2+1,a.length) 
console.log(c)


var arr = [1, 2, 3.14, 'Hello', null, true];

console.log(arr.length)
for(var i=0; i<arr.length; ++i)
{
	console.log(arr[i])
}
i=0
console.log(a.substr(0,i)+a.substr(i+1,a.length))
i=1
console.log(a.substr(0,i)+a.substr(i+1,a.length))
i=2
console.log(a.substr(0,i)+a.substr(i+1,a.length))
i=3
console.log(a.substr(0,i)+a.substr(i+1,a.length))


str="abc"
for(var i=0; i<str.length; ++i){
	first = str[i]
	remain =  str.substr(0,i) + str.substr(i+1, str.length)
	for(var j=0; j<remain.length; ++j){
		
	}
}
function concatStr(a, arr){
	result = []
	for(var i=0; i<arr.length; ++i){
		result.push(a+arr[i])
	}
	return result
}
a="a"

arr=["bc", "cb"]
cc=concatStr(a,arr)
console.log("hello")
for(var i=0; i<arr.length; ++i)
{
	console.log(cc[i])
}
const anagram = require("./lib/anagram")
console.log("hello2")
cc=anagram("abc")
for(var i=0; i<cc.length; ++i){
	console.log("cc "+cc[i])
}
