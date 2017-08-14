
$(document).ready(function() {  

	   
    	/* Add a click handler to the rows - this could be used as a callback */
    	$('#example tr, #example_workflow tr, #changeddeldate tr, #cancelledheldorder tr, #potentialearlydel tr, #search_built_veh tr').click( function() {
    		if ( $(this).hasClass('row_selected') )
    			$(this).removeClass('row_selected');
    		else
    			$(this).addClass('row_selected');
    	} );
    	
    	
    } );

   