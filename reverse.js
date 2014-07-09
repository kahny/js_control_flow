var inputString = "building"
var reverseString = []

for (var i = inputString.length-1; i>=0; i--){
	reverseString += inputString[i]
}







/*//inefficient way:
var x = "building"
function reverse(x){
	var originalString = x.split('') 
	var reverseString = []
	for (var i=x.length-1; i>=0; i--){
		reverseString.push(originalString[i])
	}
	console.log(reverseString.join(''))
}
*/
