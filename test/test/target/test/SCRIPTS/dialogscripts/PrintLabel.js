/**
 *
 */

$(document).ready(function() {

	$(document.getElementById('BoxLabelDiv')).hide();
	$(document.getElementById('ModuleLabelDiv')).hide();

	
	
	$(document.getElementById('selectType')).on('click', function(event) {
		
		var location = $(document.getElementById("part_type_id")).val();
		
         if( location == '2'){
           
        	 $(document.getElementById('BoxLabelDiv')).show();
        		$(document.getElementById('ModuleLabelDiv')).hide();
             
         }else if ( location == '1'){
        	 $(document.getElementById('BoxLabelDiv')).hide();
        		$(document.getElementById('ModuleLabelDiv')).show();
        	 
         }

	});
	

});
