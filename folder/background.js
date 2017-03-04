var messages = [];

$(function(){
	$.get('https://twitter.com/i/notifications',function(data){
		//console.log(data);

		var htmldata = data;
		$data = $(htmldata).find('.global-nav-inner').eq(0);

		$('body').append($data);

		for(i=0; i<$data.find('li.me').length; i++){
			//messages[i]=($($data).find('li.me').eq(i).find('div.stream-item-activity-line').text()).replace(/\n/g, '').trim();
						messages[i]=($data).find('li.me').eq(0);
		}

		console.log(messages); 

	});
});


