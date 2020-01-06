
 $.ajax({ 
        	  "url": "https://api.spacexdata.com/v3/launches/latest",
			  "method": "GET",
			  "timeout": 0
			  }).done(function (response) {
				$("#flightNumber").text(response.flight_number);
				$("#missionName").text(response.mission_name);
				$("#rocketName").text(response.rocket.rocket_name);
				$("#launchSiteName").text(response.launch_site.site_name);
				console.log(response);
    });

document.getElementById("next").onclick = function () {
$(document).ready(function() {       

});
	window.location.href='next.html';
};