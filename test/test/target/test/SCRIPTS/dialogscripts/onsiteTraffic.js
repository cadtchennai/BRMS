/**
 * 
 */

$(document).ready(function() {
	
	$('#modTable').dataTable({"bFilter": false,"bInfo": false,"bPaginate": false,});
	
	//$('#modTable2').dataTable({"bFilter": true,"bInfo": false,"bPaginate": false,});
	
	$('#SuppInvDiv').hide();
	

	$('#selectType').on('click', function(event)  {
		if($(document.getElementById("haulier_type_id")).val()!='**'){

			if($(document.getElementById("supplier_type_id")).val()=='**'){
				alert("Please Select Supplier");
				return false;
			}
			else if ($(document.getElementById("scheme_type_id")).val()=='**'){
				alert("Please Select Scheme"); return false;
			}
			//else { document.getElementById("SuppHeader").innerHTML ='<strong>' + $(document.getElementById("haulier_type_id")).val() + '</strong>'; }
			
			
			
		$('#SuppInvDiv').show();
		
		}else if($(document.getElementById("haulier_type_id")).val()=='**'){
			alert("Please Select Haulier"); return false;
		}
		else if($(document.getElementById("supplier_type_id")).val()=='**'){
			alert("Please Select Supplier"); return false;
		}else if ($(document.getElementById("scheme_type_id")).val()=='**'){
			alert("Please Select Scheme"); return false;
		}else {
			alert("Please Select Haulier"); return false;
		}
		
	});
	
	$('#selectTypeWH').on('click', function(event)  {
		if($(document.getElementById("haulier_type_id")).val()=='**'){

					alert("Please Select Warehouse Location"); return false;
		}
		
	});
	
	$('#selectTypeCT').on('click', function(event)  {
		if($(document.getElementById("container_type_id")).val()=='**'){

					alert("Please Select Container"); return false;
		}
		
	});
	var myOnClick = function(event) {
		var self = $(event.target);

		var row   = $(self).parents('tr')[0];
		var remove = $('<a class="minus"><img class="home" src="IMAGES/minus.png" alt="Home">');
		
		
		var newRow = $('<tr><td colspan="7" class="stock-model-group-data"'
				   	+'style="border-bottom:1px solid grey;'
					+ 'border-left:1px solid grey;'
					+'border-right:1px solid grey; padding:1em 3em 1em 3em;">'
					+'<table class="display table-editor">'
					+'<tr class="odd gradeA"><th>Module ID</th>'
					+'<th>No. of Boxes</th><th>Module Type</th><th>Gross Weight (kg)</th></tr>'
					+'<tr ><td>20123456 0010123 2013115 115307</td> <td>20</td> <td>Production</td> <td>52</td> </tr>'
					+'<tr ><td>20123456 0010123 2013115 115535</td> <td>12</td> <td>IPC</td>        <td>39</td></tr>'
					+'<tr ><td>20123456 0010123 2013115 115656</td> <td>17</td> <td>IPC</td>        <td>100</td></tr>'
					+'<tr ><td>20123456 0010123 2013115 120333</td> <td>20</td> <td>Service</td>    <td>67</td></tr>'
					+'<tr ><td>20123456 0010123 2013115 120424</td> <td>20</td> <td>Production</td> <td>66</td></tr>'
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


