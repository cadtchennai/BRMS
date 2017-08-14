/**
 * the show/hide element in add audit page ( on top) 
 */

 $(document).ready(function(){
$("#detailbar .show").hide();
 });
 
$('#detailbar .hide').live('click', function(event) {
	$("#detailbar .hide").hide();
	$("#detailbar .show").show();
	$("#audit").hide('slide', {
		direction : 'up'
	}, 500);

});

$('#detailbar .show').live('click', function(event) {
	$("#detailbar .hide").show();
	$("#detailbar .show").hide();
	$("#audit").show('slide', {
		direction : 'up'
	}, 500);

});

	

			
		
		