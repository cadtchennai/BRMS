/**
 * Add audit POP ups 
 */

$(document).ready(function() {
	$("#audit tbody").hide();
	
	$('#search_audit').on('click', function(event) {
		$("#audit tbody").show();
	});
	

});
