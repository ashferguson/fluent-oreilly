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

var responses = {};

function handleReponse(url, response){
	if(!(url in responses)){
		 responses[url]  = response;
	}
	var urls = ["file1", "file2", "file3"];

	for(var i=0; i<url.length; i++){
		if(urls[i] in responses){
			if(responses[urls[i]] !== true){
				output(responses[urls[i]]);
				responses[urls[i]] = true;
			}
		}
		return;
	}
	output("Complete");
}


function getFile(file) {
	fakeAjax(file,function(text){
		handleReponse(file, text);
	});
}

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
