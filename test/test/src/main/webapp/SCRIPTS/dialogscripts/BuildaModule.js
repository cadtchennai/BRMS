/**
 * 
 */

$(document).ready(function() {
	var prodCount= 1;
	var serial = 10098001;
	
	$('#partTable').dataTable({"bFilter": false,"bInfo": false,"bPaginate": false,});

	document.getElementById("alltable").style.visibility="hidden";
	document.getElementById("buttons").style.visibility="hidden";
	document.getElementById("all").style.visibility="hidden";
	
	$('#choosetype').on('click', function(event) {
		var modtype = $(document.getElementById("type")).val();
		
		var consumer = $(document.getElementById("consumer")).val();
		
		//
        /* don't do anything if blank option selected*/
         if( consumer !=null && consumer !='' ) {
             var consumer = "Consumer: <b>" +  $(document.getElementById("consumer")).val() + "<b>";
             
             document.getElementById("conlabel").innerHTML =  consumer;
             document.getElementById("consumerdiv").style.visibility="hidden";
             
             
             
             
             document.getElementById("all").style.visibility="visible";
         }else{
        	 alert('Please Select From Dropdowns');
         }
		document.getElementById("choosetype").style.visibility="hidden";
		
		

	});
	


	
	$('#addall').on('click', function(event) {
		
		
		document.getElementById("all").style.visibility="visible";
		document.getElementById("buttons").style.visibility="visible";
		
		document.getElementById("alltable").style.visibility="visible";
		


		    var x=document.getElementById('partTable');
		    var new_row;  //
		    
		    if(prodCount==1){

		    	x.rows[1].cells[1].innerHTML = serial;
		    	x.rows[1].cells[2].innerHTML = $(document.getElementById("prod_partnumber")).val();
		    	x.rows[1].cells[4].innerHTML = $(document.getElementById("prod_qty")).val();
		    	x.rows[1].cells[5].innerHTML = $(document.getElementById("prod_gross")).val();
		    	x.rows[1].cells[3].innerHTML = $(document.getElementById("RAN")).val();
		    	
		    	serial++;
		    	prodCount++;
		    }else if(prodCount%2==0){
            	new_row = x.rows[1].cloneNode(true);
            	new_row.className = "even gradeA";
            	prodCount++;

            	
            	
            	new_row.cells[1].innerHTML = serial;
     		    new_row.cells[2].innerHTML = $(document.getElementById("prod_partnumber")).val();
                new_row.cells[4].innerHTML = $(document.getElementById("prod_qty")).val();
     		    new_row.cells[5].innerHTML = $(document.getElementById("prod_gross")).val();
     		   new_row.cells[3].innerHTML = $(document.getElementById("RAN")).val();
                 x.appendChild( new_row );
                 
                 serial++;
		    }else{
		    	new_row = x.rows[1].cloneNode(true);
		    	new_row.className = "odd gradeA";
		    	prodCount++;

		    	new_row.cells[1].innerHTML =  serial;
     		    new_row.cells[2].innerHTML = $(document.getElementById("prod_partnumber")).val();
     		    new_row.cells[4].innerHTML = $(document.getElementById("prod_qty")).val();
     		    new_row.cells[5].innerHTML = $(document.getElementById("prod_gross")).val();
     		   new_row.cells[3].innerHTML = $(document.getElementById("RAN")).val();
		            x.appendChild( new_row );
		            
		            serial++;
		    }
       
	});
	



	$('#allDelete').on('click', function(event) {
	
		var table = document.getElementById('partTable');
        var rowCount = table.rows.length;
            
        for(var i=0; i<rowCount; i++) {
       
        	var row = $(table.rows[i]);   
            var chkbox = row.cells[0].childNodes[0];
            
            if(null != chkbox){
            	if( true == chkbox.checked) {
            	
                table.deleteRow(i);
                
           
                
                rowCount--;
                i--;
                
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
	

	$('#create').on('click', function(event) {
		alert('Module Created. Your Module ID is MOLU8030265. Labels now printing!');
		window.location.replace("./BuildaModule.html");
	});
	
	
	
	

});
