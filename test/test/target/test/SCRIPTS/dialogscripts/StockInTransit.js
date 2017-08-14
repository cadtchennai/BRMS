/**
 * 
 */

$(document).ready(function() {
	
	$('#modTable').dataTable({"bFilter": false,"bInfo": false,"bPaginate": false,});
	
	$('#ModuleTable').dataTable();
	

	
	$('#addModule').on('click', function(event)  {
		
		
		
	});
	
	var myOnClick = function(event) {
		var self = $(event.target);

		var row   = $(self).parents('tr')[0];
		var remove = $('<a class="minus"><img class="home" src="IMAGES/minus.png" alt="Home">');
		
		
		var newRow = $('<tr><td colspan="8" class="stock-model-group-data"'
				   	+'style="border-bottom:1px solid grey;'
					+ 'border-left:1px solid grey;'
					+'border-right:1px solid grey; padding:1em 3em 1em 3em;">'
					+'<table class="display table-editor">'
					+'<tr class="odd gradeA"><th>Module ID</th>'
					+'<th>No. of Boxes</th><th>Module Type</th><th>Gross Weight (kg)</th></tr>'
					+'<tr ><td>MOLU8030265</td> <td>20</td> <td>Production</td> <td>52</td> </tr>'
					+'<tr ><td>MOLU8031111</td> <td>12</td> <td>IPC</td>        <td>39</td></tr>'
					+'<tr ><td>MOLU8071069</td> <td>17</td> <td>IPC</td>        <td>100</td></tr>'
					+'<tr ><td>TRIU4743748</td> <td>20</td> <td>Service</td>    <td>67</td></tr>'
					+'<tr ><td>ZMFU8451318</td> <td>20</td> <td>Production</td> <td>66</td></tr>'
			    	+'</table></td></tr>');
		 $(row).after(newRow);
		 
		 self.replaceWith(remove);
		 
		 remove.click(function(){
			 var add= $("<a class='add'><img class='home' src='IMAGES/plus.png' alt='Home'>"); 
				$(this).replaceWith(add);
				
				var next = $(this).parent('tr').next();
				newRow.remove();
				add.click(function(event) {
		           myOnClick(event);
	            });
		 });
	};
	
	$('table .add').on('click', function(event) {
		myOnClick(event);
	});
	
	

	
});


