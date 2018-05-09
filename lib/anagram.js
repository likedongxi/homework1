function concatStr(a, arr){
	result = []
	for(var i=0; i<arr.length; ++i){
		result.push(a+arr[i])
	}
	return result
}
function anagram(str){
	var result = []
	if(!str){
		return result
	}
	
	if(str.length == 1){
		result.push(str);
		return result
	}
	if(str.length == 2){
		return [str[0]+str[1], str[1]+str[0]]
	}
	if(str.length >=3){
		for(var i=0; i<str.length; ++i){
			first = str[i]
			remain =  str.substr(0,i) + str.substr(i+1, str.length)
			console.log("remain="+remain)
			for(var j=0; j<remain.length; ++j){
				tmp = concatStr(first, anagram(remain))
				// debug
				for(var i=0; i<tmp.length; ++i){
					console.log("tmp[%d]",i)
					console.log(tmp[i])
				}
				// end of debug
				result.push(tmp)
			}
		}
		return result
	}
}
module.exports = anagram
