/**
 * vehicle enquiries JS code- show hide details for Car Seriece + Chassis or
 * Engine
 */

$(document).ready(function() {
	$("#v1 tbody").hide();
	$("#v0 tr#vehiclemsg").hide();
	$("#achivement_div").hide();
	$("#edit-rfsa-input").hide();
	$("#edit-rfsa-container").hide();
	
	
	
	$('#vetbutton').on('click', function(event) {
		$("#v1 tbody").show();
		$("#edit-rfsa-input").hide();
		$("#v0 tr#vehiclemsg").show();
		
		$("#edit-rfsa-container").show();
		
		var e = document.getElementById("csenquiry");
		var strUser = e.options[e.selectedIndex].value;
		var td = document.getElementById("severity");
	    
	    
		document.getElementById("vetbutton").value = "Select New";
	    document.getElementById("rfsa-id").innerHTML = strUser;
	    document.getElementById("severity").innerHTML = "Low";
	    
	    if(document.getElementById("severity").innerHTML = "High"){
	    td.style.color="red";
	    }
		
	});
	
	$('#achievements_button').on('click', function(event) {
		$("#v1 tbody").hide();
		$("#v0 tr#vehiclemsg").hide();
		$("#vetbutton").hide();
		$("#achievements_button").hide();
		$("#achivement_div").show();
		
	});

});
