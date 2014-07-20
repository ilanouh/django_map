var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var time = 0;

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var numa = new google.maps.LatLng(48.867589, 2.349631);
  var map_options = {
    zoom: 19,
    center: numa
  }
  map = new google.maps.Map(document.getElementById('map_canvas'), map_options);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('directions_panel'));
}

function calcRoute() {
  var start = "39 rue du caire, paris, france";
  var end = document.getElementById("dest").value;
  var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING
  };

  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      time = response.routes[0].legs[0].duration.value;
    }
    else
      if (end != "")
        alert("Your route to "+ end +" cannot be established");
  });
}

function change() {
  var colors = new Array('forestgreen', 'firebrick');
  var color = (time > 1200) ? 1 : 0;
  $('body').css("background-color", colors[color]);
}

window.onload = function () {
	setInterval(change, 1);
	initialize();
  calcRoute();
}