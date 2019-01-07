var myArr = [1, 5, 12, 4, 3]; 
var anotherArr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var ourArr = [3, 10, 17];

function avg (arr) {
	var sum = 0;
	var quantity = arr.length;
	for (var i = 0; i < arr.length; i++){
		sum += arr[i];
	
	}
	return sum / quantity;
}


console.log(avg(myArr));
console.log(avg(anotherArr));
console.log(avg(ourArr));