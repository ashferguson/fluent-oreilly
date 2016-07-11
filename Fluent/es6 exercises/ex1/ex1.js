//var x = 2, fns = [];
//
//(function(){
//	var x = 5;
//
//	for (var i=0; i<x; i++) {
//		// ..
//	}
//})();
//
//console.log(
//	(x * 2) === fns[x*2]()
//);
// true

 //*******  first attempt ***********

let x = 2;
var fns = [];

{
	x = 5;
	for(var i=0; i<x; i ++){
		//fns[i] =
	}
}

 //**** second attempt ********

var x = 2, fns = [];

{
	let x;
	x = 5;

	for (var i=0; i<x; i++) {
		fns[i] = function() {
			return i;  //would all print out 5
		};
	}
};

console.log(
	(x * 2) === fns[x*2]()
);
 //true

 ///*******************   CORRECT WAY  *********************


'use strict';
const x = 2;
var fns = [];

{

	let x;
	x = 5;

	for (let i=0; i<x; i++) {

		let j = i;
		fns[i] = function() {
			console.log(j);
			return j;  //would all print out 1,2,3,4,5   because there will be a new i value for each iteration
		};
	}
};

console.log(
	(x * 2) === fns[x*2]()
);
//true
