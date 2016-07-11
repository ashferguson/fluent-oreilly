$(document).ready(function(){
	var $btn = $("#btn"),
		$list = $("#list");
	clicks = ASQ.csp.chan();
	messages = ASQ.csp.chan();

	$btn.click(function(evt){
		ASQ.csp.putAsync(clicks,evt);
	});

	// Hint: ASQ().runner( .. )
	ASQ.runner(
		ASQ.csp.go(function* (){
			var latest;

			setInterval(function(){
				if(latest){
					ASP.csp.putAsync(messages,latest);
					latest = null;
				}
			},1000);




			while(true){
				latest =  yield ASQ.csp.take(clicks); //blocking

			}

		}),

	ASQ.csp.go(function* (){
		   while(true){
			   yield ASP.csp.take(messages);  //we don't care what the message is here
			   $list.append("CLICKED?<br>");
		   }
	});









	);

	// TODO: setup sampling go-routine and
	// channel, populate $list
});
