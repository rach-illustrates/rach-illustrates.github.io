$(document).ready(function(){
	var images = getParams()

	for(var key in images) {
		$(key).attr("style","background-image:url('img/thanks/" + images[key] + "')")
	}
	
})

function getParams() {
	var sPageURL = window.location.search.substring(1).replace(/%23/g,"#");
	var sURLVariables = sPageURL.split('&');
	var images = {}
	for (var i = 0; i < sURLVariables.length; i++)
	{
	    var sParameterName = sURLVariables[i].split('=');
	    images[sParameterName[0]] = sParameterName[1]
	}
	return images
}