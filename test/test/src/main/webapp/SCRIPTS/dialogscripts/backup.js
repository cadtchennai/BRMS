/**
 * 
 */

$(document).ready(function() {
	var prodCount= 1;
	var serviceCount= 1;
	var ipcCount= 1;
	
	$('.tables').hide();
	
	
	$('#choosetype').on('click', function(event) {
		var location = $(document.getElementById("part_type_id")).val();
		//
        /* don't do anything if blank option selected*/
         if( location !=null || location !=''){
             $('.content').hide();
             
             var consumer = "Consumer: <b>" +  $(document.getElementById("consumer")).val() + "<b>";
             
             document.getElementById("conlabel").innerHTML =  consumer;
 
             document.getElementById("consumerdiv").style.visibility="hidden";
             
   
             $('#'+location).show();
         }
		document.getElementById("choosetype").value = "Change Type";
		
		

	});
	
	
	$('#prod_partnumber').on('input', function(event){
		alert('hello');
	});
	
	
	$('#addservice').on('click', function(event) {
		$('#servicetable').show();
		$('#buttons').show();
		
		var x=document.getElementById('servicePartsT');
	    var new_row;
		   
	    // Random part class until DB is added Math.floor(Math.random()*100000+1)
	    

	    
	    if(serviceCount==1){
	    	x.rows[1].cells[1].innerHTML = Math.floor(Math.random()*100000+1);
	    	x.rows[1].cells[2].innerHTML = $(document.getElementById("service_partnumber")).val();
	    	x.rows[1].cells[3].innerHTML = $(document.getElementById("consumer")).val();
	    	x.rows[1].cells[4].innerHTML = $(document.getElementById("service_qty")).val();
	    	x.rows[1].cells[5].innerHTML = $(document.getElementById("service_gross")).val();
	    	
	    	serviceCount++;
	    }else if(serviceCount%2==0){
        	new_row = x.rows[1].cloneNode(true);
        	new_row.className = "even gradeA";
        	serviceCount++;
            new_row.cells[1].innerHTML =  Math.floor(Math.random()*100000+1);
 		    new_row.cells[2].innerHTML = $(document.getElementById("service_partnumber")).val();
 		    new_row.cells[3].innerHTML = $(document.getElementById("consumer")).val();
 		    new_row.cells[4].innerHTML = $(document.getElementById("service_qty")).val();
 		    new_row.cells[5].innerHTML = $(document.getElementById("service_gross")).val();
             x.appendChild( new_row );
	    }else{
	    	new_row = x.rows[1].cloneNode(true);
        	new_row.className = "odd gradeA";
	    	serviceCount++;
	    	new_row.cells[1].innerHTML =  Math.floor(Math.random()*100000+1);
 		    new_row.cells[2].innerHTML = $(document.getElementById("service_partnumber")).val();
 		    new_row.cells[3].innerHTML = $(document.getElementById("consumer")).val();
 		    new_row.cells[4].innerHTML = $(document.getElementById("service_qty")).val();
 		    new_row.cells[5].innerHTML = $(document.getElementById("service_gross")).val();
             x.appendChild( new_row );
	    }
		
		
		
		
	});
	

	
	
	$('#addipc').on('click', function(event) {
		$('#ipctable').show();
		$('#buttons').show();
		
		var x=document.getElementById('ipcPartsT');
	    var new_row;
		   
	    if(ipcCount==1){
	    	x.rows[1].cells[1].innerHTML =  Math.floor(Math.random()*100000+1);
	    	x.rows[1].cells[2].innerHTML = $(document.getElementById("ipc_partnumber")).val();
	    	x.rows[1].cells[3].innerHTML = $(document.getElementById("consumer")).val();
	    	x.rows[1].cells[4].innerHTML = $(document.getElementById("ipc_qty")).val();
	    	x.rows[1].cells[5].innerHTML = $(document.getElementById("ipc_gross")).val();
	    	
	    	ipcCount++;
	    }else if(ipcCount%2==0){
        	new_row = x.rows[1].cloneNode(true);
        	new_row.className = "even gradeA";
        	ipcCount++;

        	new_row.cells[1].innerHTML =  Math.floor(Math.random()*100000+1);
 		    new_row.cells[2].innerHTML = $(document.getElementById("ipc_partnumber")).val();
 		    new_row.cells[3].innerHTML = $(document.getElementById("consumer")).val();
 		    new_row.cells[4].innerHTML = $(document.getElementById("ipc_qty")).val();
 		    new_row.cells[5].innerHTML = $(document.getElementById("ipc_gross")).val();
             x.appendChild( new_row );
	    }else{
	    	new_row = x.rows[1].cloneNode(true);
	    	new_row.className = "odd gradeA";
	    	ipcCount++;

	    	new_row.cells[1].innerHTML =  Math.floor(Math.random()*100000+1);
 		    new_row.cells[2].innerHTML = $(document.getElementById("ipc_partnumber")).val();
 		    new_row.cells[3].innerHTML = $(document.getElementById("consumer")).val();
 		    new_row.cells[4].innerHTML = $(document.getElementById("ipc_qty")).val();
 		    new_row.cells[5].innerHTML = $(document.getElementById("ipc_gross")).val();
	            x.appendChild( new_row );
	    }
		
	});
	
	
	$('#addproduction').on('click', function(event) {
		
		
		$('#productiontable').show();
		$('#buttons').show();
		

		   var pmclass = "B";

		   
		
		    var x=document.getElementById('productionPartsT');
		    var new_row;  //
		    
		    if(prodCount==1){

		    	x.rows[1].cells[1].innerHTML = Math.floor(Math.random()*100000+1);
		    	x.rows[1].cells[2].innerHTML = $(document.getElementById("prod_partnumber")).val();
		    	x.rows[1].cells[3].innerHTML = $(document.getElementById("consumer")).val();
		    	x.rows[1].cells[4].innerHTML = pmclass + " " + $(document.getElementById("prod_partnumber")).val() + " 00003";
		    	x.rows[1].cells[5].innerHTML = $(document.getElementById("prod_qty")).val();
		    	x.rows[1].cells[6].innerHTML = $(document.getElementById("prod_gross")).val();
		    	
		    	prodCount++;
		    }else if(prodCount%2==0){
            	new_row = x.rows[1].cloneNode(true);
            	new_row.className = "even gradeA";
            	prodCount++;

            	new_row.cells[1].innerHTML =  Math.floor(Math.random()*100000+1);
     		    new_row.cells[2].innerHTML = $(document.getElementById("prod_partnumber")).val();
     		    new_row.cells[3].innerHTML = $(document.getElementById("consumer")).val();
     		    new_row.cells[4].innerHTML = pmclass + " " + $(document.getElementById("prod_partnumber")).val() + " 00003";
     		    new_row.cells[5].innerHTML = $(document.getElementById("prod_qty")).val();
     		    new_row.cells[6].innerHTML = $(document.getElementById("prod_gross")).val();
                 x.appendChild( new_row );
		    }else{
		    	new_row = x.rows[1].cloneNode(true);
		    	new_row.className = "odd gradeA";
		    	prodCount++;

		    	new_row.cells[1].innerHTML =  Math.floor(Math.random()*100000+1);
     		    new_row.cells[2].innerHTML = $(document.getElementById("prod_partnumber")).val();
     		    new_row.cells[3].innerHTML = $(document.getElementById("consumer")).val();;
     		    new_row.cells[4].innerHTML = pmclass + " " + $(document.getElementById("prod_partnumber")).val() + " 00003";
     		    new_row.cells[5].innerHTML = $(document.getElementById("prod_qty")).val();
     		    new_row.cells[6].innerHTML = $(document.getElementById("prod_gross")).val();
		            x.appendChild( new_row );
		    }
       
	});
	
	
	$('#serviceDelete').on('click', function(event) {
	
		var table = document.getElementById('servicePartsT');
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
	
	

	$('#ipcDelete').on('click', function(event) {
		
		var table = document.getElementById('ipcPartsT');
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
	
	

	$('#productionDelete').on('click', function(event) {
	
		var table = document.getElementById('productionPartsT');
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
	

	
	
	
	
	

});
