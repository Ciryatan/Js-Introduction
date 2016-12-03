'use strict' ;

var liczby = [2,3,4,5,6,7,8];

/*function getSum(a, b) {
   
	return a + b;
	
}

console.log (sum);

 var sum = 0, liczby.reduce(a, b);*/
var sum = 0;


for (var i=0; i<liczby.length; ++i) {
	sum = sum + liczby [i];
}

console.log(sum);

function sumArray () {
	var sum=0;
	for (var i=0; i<liczby.length; ++i) {
		sum += liczby[i];
	}
	return sum;
		
}

console.log(sumArray ());



//var sum = liczby.reduce(function(a, b) { return a + b; }, 0);
