$(document).ready(function(){
	var $btn = $("#btn"),
		$list = $("#list");
		clicks = ASQ.react.of(),
		msgs = ASQ.react.of(),
		next;

	$btn.click(function(evt){
		// TODO
		clicks.push(evt);

	});

	msgs = sample(clicks, 1000);



	msgs.val(function(){
		$list.append("Clicked! <br");
	});

	function sample(st, delay){
		var sampled = ASQ.react().of(),
			latest;
		st.val(function(msg){
			latest = msg;
		});

		setInterval(function(){
			if(latest){
				sampled.push(latest);
				latest = null;
			}

		},delay);

		return sampled;
	};

	// TODO: setup sampled sequence, populate $list
});
