//Hardcode an array of words. Have a variable maxLength, and push those words to only to an array filter long words

var array = ["I", "was", "a", "sentence"]
var maxLength = 8 
var maxLengthArray = []


for (var i=0; i<array.length; i++){
	if (array[i].length < maxLength){
		maxLengthArray.push(array[i])
	}
}


