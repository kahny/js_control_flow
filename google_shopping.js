var data = require("./products.json")

// Write your solutions below

//console.log(data["items"]);


console.log("\n\n\nThe kind of results you're are dealing are shopping#products. Go through the items and find all results that have kind of shopping#product. How many are there? Where else is this count information stored in the search results?")


console.log("The kind of results you're are dealing are shopping#products. Go through the items and find all results that have kind of shopping#product. How many are there? Where else is this count information stored in the search results?")
var instances = 0;

var items = data['items'];

for (i = 0; i < items.length; i += 1) {
if (items[i]['kind'] === 'shopping#product') {
instances += 1;
}
}

console.log(data["items"]);
console.log(instances);

console.log ("There are 25 instances of shopping#product, you can also see thiss number in the products.json file on top ")


console.log("\n\n\n2.) Find all items with a backorder availability in inventories.")
var items = data['items'];

for (var i = 0; i < items.length; i++) {
if (items[i]['product']['inventories'][0]['availability'] === 'backorder'){
console.log(items[i]['product']['title'])
}
}


console.log("\n\n\n3.) Find all items with more than one image link.")


var items = data['items'];

for (var i = 0; i < items.length; i++) {
if (items[i]['product']['images'].length>1){

console.log(items[i]['product']['title'])
}
}



console.log("\n\n\n4.) Find all canon products in the items (careful with case sensitivity).")

var items = data['items'];

for (var i = 0; i < items.length; i++) {
if (items[i]['product']['brand'] === 'Canon'){
console.log(items[i]['product']['title'])
}
}


console.log("\n\n\n5.) Find all items that have product author name of eBay and are brand Canon)")

var items = data['items'];

for (var i = 0; i < items.length; i++) {
if ((items[i]['product']['author']['name'].split(" -")[0] === 'eBay') && (items[i]['product']['brand'] === 'Canon')){
console.log(items[i]['product']['title'])
}
}


console.log("\n\n\n6.) Print all the products with their brand, price, and a image link")

var items = data['items'];

for (var i = 0; i < items.length; i++) {
	var itemBrand = items[i]['product']['brand']
	var itemPrice = items[i]['product']['inventories'][0]['price']
	var itemImage = items[i]['product']['images'][0]['link']

console.log(itemBrand + "\n\n" + itemPrice + "\n\n" + itemImage)

}




