/**
 * vehicle enquiries JS code- show hide details for Car Seriece + Chassis or
 * Engine
 */

$(document).ready(function() {
	$("#v1 tbody").hide();
	$("#v0 tr#vehiclemsg").hide();
	$("#achivement_div").hide();
	
	
	
	$('#vetbutton').on('click', function(event) {
		$("#v1 tbody").show();
		$("#v0 tr#vehiclemsg").show();
		
		var e = document.getElementById("csenquiry");
		var strUser = e.options[e.selectedIndex].value;
		var td = document.getElementById("severity");
	    
	    
		document.getElementById("vetbutton").value = "Select New";
	    document.getElementById("rfsa-id").innerHTML = strUser;
	    
	    if (document.getElementById("rfsa-id").innerHTML == "SR947" || document.getElementById("rfsa-id").innerHTML == "SR949" || document.getElementById("rfsa-id").innerHTML == "SR951"){
	    	document.getElementById("severity").innerHTML = "High";
	    	td.style.color="red";
	    	
	    	
	    }else{
	    	document.getElementById("severity").innerHTML = "Low";
	    	td.style.color="black";
	    	
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
