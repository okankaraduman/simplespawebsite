var settings = {
  "url": "https://api.spacexdata.com/v3/launches/next",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
	$("#tahmin").text(response);
	console.log(response.data);
});