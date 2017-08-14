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
		$("#achievements_button").hide();
		$("#vetbutton").hide();
	});
	
	$('#achievements_button').on('click', function(event) {
		$("#v1 tbody").hide();
		$("#v0 tr#vehiclemsg").hide();
		$("#vetbutton").hide();
		$("#achievements_button").hide();
		$("#achivement_div").show();
		
		$("vehicle-data").text( "James Maddison" );  // $("csenquiry").val()
	});

});
