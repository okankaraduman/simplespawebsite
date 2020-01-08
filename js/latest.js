 $.ajax({ 
        	  "url": "https://api.spacexdata.com/v3/launches/latest",
			  "method": "GET",
			  "timeout": 0
			  }).done(function (response) {
				$("#flightNumber").text(response.flight_number);
				$("#missionName").text(response.mission_name);
				$("#rocketName").text(response.rocket.rocket_name);
				$("#launchSiteName").text(response.launch_site.site_name);
				countDownDate = new Date(response.launch_date_utc);
				console.log(response);
    });

var countDownDateasString = countDownDate.toString();

document.getElementById("next").onclick = function () {
$(document).ready(function() {       

});
	window.location.href='next.html';
};

var x = setInterval(function() {

	var now = new Date().getTime(); //getting current time.

	var ourLaunchDate = countDownDate.getTime();

	var distance =  ourLaunchDate - now;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("countDown").innerHTML = days + "  " + hours + "  "
	  + minutes + " " + seconds ;

},1000);