//var numbers = {
//	// ..
//};
//
//// should print 0..100 by 1s
//for (let num of numbers) {
//	console.log(num);
//}
//
//// should print 6..30 by 4s
//for (let num of /*..*/) {
//	console.log(num);
//}

/* CORRECT ANSWER */

var numbers = {
	*[Symbol.iterator]({start=0, increment=1, max=100}={}) {
	for(let i = start; i <=max; i=i+increment){
		yield i;
	}
}
};


// should print 0..100 by 1s
for (let num of numbers) {
	console.log(num);
}

// should print 6..30 by 4s
for (let num of numbers[Symbol.iterator]({
	start: 6,
	max: 30,
	incrememt: 4,
})) {
	console.log(num);
}