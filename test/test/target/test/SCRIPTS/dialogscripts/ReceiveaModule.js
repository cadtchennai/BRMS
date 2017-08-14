/**
 * vehicle enquiries JS code- show hide details for Car Seriece + Chassis or
 * Engine
 */

$(document).ready(function() {

	$('#moduleContentTable').dataTable({});
	
	document.getElementById("module").style.visibility="hidden";

	
	$('#selectMod').on('click', function(event) {
		document.getElementById("module").style.visibility="visible";
		
	});
	
	$('#acceptMod').on('click', function(event) {
		alert('Module Accepted');
		window.location.replace("./ReceiveaModule.html");
		
	});
	
	$('#acceptMod').on('click', function(event) {
		alert('Module Accepted');
		window.location.replace("./ReceiveaModule.html");
		
	});
	
	$('.add').on('click', function(event) {
		
		
		var partNo = $('#partNo').val();
		var qty = $('#qty').val();
		var netWeight = $('#netWeight').val();
		var manufUnit = $('#manufUnit').val();
		var invKey = $('#invKey').val();
		var boxNo = $('#boxNo').val();
		
		$('.moduleContentTable').fnAddData( [
		                              		partNo,
		                              		qty ,
		                              		netWeight,
		                              		manufUnit,
		                              		invKey,
		                              		boxNo,
		                              		"<center> <a id='opener' class='edit'   ><img src='IMAGES/report.png' alt='edit'></a> </center>"
		                              		] );


		
	});
	
	
	
	

});
