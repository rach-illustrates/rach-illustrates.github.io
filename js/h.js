/* Hoverboard JS */
$(document).ready(function(){
	var imgRoot = "img/board/"
	var images = {
		"#chassis": {
			current: 0,
			images: ["Chasis_1.png", "Chasis_2.png", "Chasis_3.png"]
		},
			"#propeller": {
			current: 0,
			images: ["Propellers_1.png", "Propellers_2.png", "Propellers_3.png"]
		},
			"#turbine": {
			current: 0,
			images: ["Turbine_1.png", "Turbine_2.png", "Turbine_3.png"]
		},
			"#gauge": {
			current: 0,
			images: ["Pressure_gauge_1.png", "Pressure_gauge_2.png", "Pressure_gauge_3.png"]
		},
			"#wings": {
			current: 0,
			images: ["Wings_1.png", "Wings_2.png", "Wings_3.png"]
		},
			"#footholds": {
			current: 0,
			images: ["Footholds_1.png", "Footholds_2.png", "Footholds_3.png"]
		}
	}	

	$(".button").on("click",function(e){
		var target = $(this).data("target")

		var imgObj = images[target]
		imgObj.current++

		if(imgObj.current === imgObj.images.length)
			imgObj.current = 0

		var imgPath = imgRoot + imgObj.images[imgObj.current]
		$(target).attr("style","background-image: url('" + imgPath +"')")
	})

	$("#submit").click(function(){
		var getData = GetURLParameter("outfit")
		var data = "?"
		var addAmpersand = false
		for(var key in images) {
			if(addAmpersand)
				data += "&"
			else
				addAmpersand = true

			data += key + "=" + images[key].images[images[key].current]
		}
		data = data.replace(/#/g,"%23")
		var pagePath = window.location.pathname.split("/")
		pagePath.pop()
		pagePath = pagePath.join("/")
		var newURL = window.location.protocol + "//" + window.location.host + pagePath
		window.location.href = newURL + "/thankyou.html" + data
	})

	//Pre-load base chassis
	$("#chassis").attr("style","background-image: url('" + imgRoot + images["#chassis"].images[0] + "')")
})

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}