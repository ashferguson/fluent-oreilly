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
// The old-n-busted callback way

function getFile(file) {
	return new Promise(function(resolve){
		fakeAjax(file,resolve);
	});
}

// Request all files at once in
// "parallel" via `getFile(..)`.
//
// Render as each one finishes,
// but only once previous rendering
// is done.

// ???

["file1", "file2", "file3"]
	.map(getFile) //iterate over list and create a 1 to 1 mapping
    .reduce(function(chain, pr){    //call a predicate and return back composed value at each step
		return chain.then(function(){
			return pr;
		})
			.then(output);
	}, Promise.resolve()) //creates a resolved promise
	.then(function(){
	   output('Complete');
	});