/**
 * 
 */

$(document).ready(function() {
	
	$('#awaitingRecipt').dataTable({"bFilter": false,"bInfo": false,"bPaginate": false,});
	
	$('#bumperTable');
	
	$('#recentlyDispatched').dataTable({"bFilter": false,"bInfo": false,"bPaginate": false,});
	

	
	$('#addModule').on('click', function(event)  {
		
		
		
	});
	
	var myOnClick = function(event) {
		var self = $(event.target);

		var row   = $(self).parents('tr')[0];
		var remove = $('<a class="minus"><img class="home" src="IMAGES/minus.png" alt="Home">');
		
		
		var newRow = $('<tr><td colspan="10" class="display"'
				   	+'style="border-bottom:1px solid grey;'
					+ 'border-left:1px solid grey;'
					+'border-right:1px solid grey; padding:1em 3em 1em 3em;">'
					+'<table class="display">'
					
					+'<tr class="odd gradeA"><th align="left" bgcolor="white">&nbsp;&nbsp;</th><th align="left" bgcolor="white">&nbsp;&nbsp;</th><th align="left" bgcolor="white">&nbsp;&nbsp;</th><th align="left">&nbsp;&nbsp;Select</th>'
					+'<th align="left">&nbsp;&nbsp;Job Id</th><th align="left">&nbsp;&nbsp;Shape Id</th><th align="left">&nbsp;&nbsp;Data Note</th>'
					+'<th align="left">&nbsp;&nbsp;Design Note</th><th align="left">&nbsp;&nbsp;Engineer</th><th align="left">&nbsp;&nbsp;Spec Note</th>'
					+'<th align="left">&nbsp;&nbsp;Release date</th><th align="left">&nbsp;&nbsp;Job Type</th>'
					+'<th align="left">&nbsp;&nbsp;Function Code</th><th align="left">&nbsp;&nbsp;Project</th>'
					+'<th align="left">&nbsp;&nbsp;Shape workflow status</th></tr>'
					+'<tr ><td></td><td></td> <td></td> <td><input type="checkbox"></td> <td>22A7</td> <td>24010 4EAOA</td> <td></td> <td>TFP916</td>'
					+'<td>P SMith</td> <td>475E-31</td> <td></td> <td>Formal Spec N</td> <td>G24EAOA</td> <td>475E</td> <td>Ready For VSLP Comparison</td> </tr>'
					/*+'<tr ><td>MOLU8031111</td> <td>12</td> <td>IPC</td>        <td>39</td></tr>'
					+'<tr ><td>MOLU8071069</td> <td>17</td> <td>IPC</td>        <td>100</td></tr>'
					+'<tr ><td>TRIU4743748</td> <td>20</td> <td>Service</td>    <td>67</td></tr>'
					+'<tr ><td>ZMFU8451318</td> <td>20</td> <td>Production</td> <td>66</td></tr>'*/
					
					+'<tr><td></td><td></td> <td></td> <td><input type="checkbox"></td> <td>22A7</td> <td>24010 4EAOB</td> <td></td> <td>TFP916</td>'
					+'<td>P SMith</td> <td>475E-31</td> <td></td> <td>Formal Spec N</td> <td>G24EAOB</td> <td>475E</td> <td>Ready For VSLP Comparison</td> </tr>'
					+'<tr><td></td><td></td> <td></td> <td><input type="checkbox"></td> <td>22A7</td> <td>24010 4EAOO</td> <td></td> <td>TFP972</td>'
					+'<td>J Code</td> <td>475E-31</td> <td></td> <td>Formal Spec N</td> <td>G24EAOO</td> <td>475E</td> <td>Ready For VSLP Comparison</td> </tr>'
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


