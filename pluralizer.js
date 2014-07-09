/*Take an input like

thing = "cat"
count = "5"
and output the pluralized form of the word like "5 cats" or "1 dog"..*/

function pair(item, number){
	if(number==1){
		console.log(number + " " +item)
	}
	else {
		console.log(number + " " + item + "s")
	}
}