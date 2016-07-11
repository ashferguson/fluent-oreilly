function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************

function getFile(file) {
	return new Promise(function(resolve, reject){
		fakeAjax(file, resolve);
	});
	// what do we do here?
}


var file1 = getFile("file1");
var file2 = getFile("file2");
var file3 = getFile("file3");
// request all files at once in "parallel"
// ???

file1
	.then(function(text){
		output(text);
		return file2;
	})
	.then(function(text){
		output(text);
		return file3;
	})
	.then(function(text){
		output(text);//this has the file3 text
		output('Complete');
	})