$(document).ready(function() {
	$.getJSON('https://json.geoiplookup.io/', function(data) {
  		 var currentState = JSON.stringify(data.region, null, 2);
  		 //console.log("Current state var: " + currentState);
		 currentState = currentState.replace('"','');
		 currentState = currentState.replace('"','');
  		 document.getElementById("title").innerHTML = currentState + "  Homeowners: Going Solar Is Now Easier Than Ever Thanks to These Policies";

});

	
});