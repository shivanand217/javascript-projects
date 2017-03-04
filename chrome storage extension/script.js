

window.onload = function(){

	document.getElementById('save').onclick = function(){

		var value = document.getElementById('saveLine').value;
		//alert(value);

		// now using chrome storage API
		chrome.storage.sync.set({'myLine': value}, function(){
			alert("success");
		});

		// now getting data from chrome storage
		document.getElementById('get').onclick() = function(){
			
		chrome.storage.sync.get('myLine',function(data){
			alert(data.myLine);
		});
	}
	}
}