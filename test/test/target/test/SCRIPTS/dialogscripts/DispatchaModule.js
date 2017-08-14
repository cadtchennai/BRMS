/**
 * 
 */

$(document).ready(function() {
	
	var modCount= 1;
	document.getElementById("moduleTabel").style.visibility = "hidden";
	
	$('#addModule').on('click', function(event)  {
		
		if($(document.getElementById("haulier")).val() != ''){
		document.getElementById("haullabel").innerHTML= 'Haulier: <b>' + $(document.getElementById("haulier")).val() + "</b>" ;
		document.getElementById("selectDiv").style.visibility = "hidden";
		
		if($(document.getElementById("ModuleID")).val() != ''){
			
			
			
			if($('#vehicleID').val() != ''){

			document.getElementById("moduleTabel").style.visibility = "visible";
			$('#vehicleID').replaceWith('<label><b>'+$('#vehicleID').val() + '</b></label>');
				
		    var x = document.getElementById('allModules');
		    var new_row; 
		    
		    if(modCount==1){
               
		    	x.rows[1].cells[1].innerHTML = $(document.getElementById("ModuleID")).val();
		    	modCount++;
		    	
		    	
		    	$('option:selected', $('#ModuleID')).remove();
		    	
		    }else if(modCount%2==0){
            	new_row = x.rows[1].cloneNode(true);
            	new_row.className = "even gradeA";
            	modCount++;


     		    new_row.cells[1].innerHTML = $(document.getElementById("ModuleID")).val();

                 x.appendChild( new_row );
                 $('option:selected', $('#ModuleID')).remove();
               
		    }else{
		    	new_row = x.rows[1].cloneNode(true);
		    	new_row.className = "odd gradeA";
		    	modCount++;


     		    new_row.cells[1].innerHTML = $(document.getElementById("ModuleID")).val();
     		   $('option:selected', $('#ModuleID')).remove();
     		
     		   
		            x.appendChild( new_row );
		    }
			
			}else{
				alert("Please enter vehicle ID");
			}
			
			
		}else{
			alert("Please select module");
		}
		
		
		}else{
			alert("Please Select Haulier");
		}
		 
	});
	
	$('#delete').on('click', function(event) {
		var table = document.getElementById('allModules');
        var rowCount = table.rows.length;

   
        for(var i=0; i<rowCount; i++) {
            var row = table.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            if(null != chkbox){
            	if( true == chkbox.checked) {
            	
                table.deleteRow(i);
                rowCount--;
                i--;
            }else{
          
            }
          }
        }
        var grey = true;
        for(var i=0; i<rowCount; i++) {
        	var row = table.rows[i];
            if(grey){
            	row.className = "even gradeA";
            	grey = false;
            }else{
            	row.className = "odd gradeA";
            	grey= true;
            }
        }
	});
	
	
	
	$('#dispatch').on('click', function(event) {
		alert('Modules Dispatched. Your shipment ID is AB12678');
		window.location.replace("./Home.html");


	});
	
	
});
