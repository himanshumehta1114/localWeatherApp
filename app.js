
	var url = "https://fcc-weather-api.glitch.me/api/current?";
	var lat = "";
	var lon = "";
	var API = "";
	var temp = "";
	var city = "";
	var country = "";
	var desc = "";
	var tempUnit = "C";
if(navigator.geolocation){
		console.log("geo location is available");
		navigator.geolocation.getCurrentPosition(function(position){
			lat = "lat=" + position.coords.latitude;
			lon = "lon=" + positionhttps://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F50d.png?1499366021771.coords.longitude;
	
			API = url + lat + "&" + lon;
			console.log(API);
			$.getJSON(API,function(location){
				temp = location['main']['temp'];
				city = location['name'];
				country = location['sys']['country'];
				desc = location.weather[0].main;
				$("#temp").html(temp);
				$("#city").html(city);
				$("#country").html(country);
				$('#desc').html(desc);

				$("#tempUnit").click(function(){
					var currentTemp = $('#tempUnit').text();
					
				});
			});

		});
	}

