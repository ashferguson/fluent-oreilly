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

//function getFile(file) {
//	// what do we do here?
//	return function(cb){
//		fakeAjax(file,cb); //this is lazy! woudnl't get requeest file 2 till file 1 was return
//	};
//
//}

function getFile(file) {

	var val, fn;

	fakeAjax(file, function(resp){
		if(fn) fn(resp);
		else val = resp;
	});

	return function(cb){
		if(val) cb(val);
		else fn = cb;
	};

}


// request all files at once in "parallel"
// ???

var th1 = getFile("file1");
var th2 = getFile("file2");
var th3 = getFile("file3");

th1(function(text1){    //unwrapping value of th1
	output(text1);
	th2(function(text2){
		output(text2);
		th3(function (text3) {
			output(text3);
			output('Complete');
		}) ;
	});
}) ;