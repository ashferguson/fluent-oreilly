//function upper(strings,...values) {
//
//}
//
//var name = "kyle",
//	twitter = "getify",
//	classname = "es6 workshop";
//
//console.log(
//`Hello ____ (@____),
//welcome to the ____!`
//);
//
//



///////

function upper(strings,...values) {
	var str = "";
	for(var i = 0; i < strings.length; i ++){
		if( i >0) str += values[i-1].toUpperCase();
		str += strings[i];
	}
	return str;
}

var name = "kyle",
	twitter = "getify",
	classname = "es6 workshop";

console.log(upper `Hello ${name} (@${twitter}),welcome to the ${classname}!`);