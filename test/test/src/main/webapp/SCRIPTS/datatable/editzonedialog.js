/**
 * POP up to edit a zone
 */

$(function() {
	var comCod = $("#comCod"), plantCod = $("#plantCod"), shopCod = $("#shopCod"),zoneCod=$("#zoneid"), desc = $("#desc"), 
	allFields = $([]).add(comCod).add(plantCod).add(shopCod).add(desc).add(zoneCod),
	
	tips = $(".validateTips");
	function updateTips(t) {
		tips.text(t).addClass("ui-state-highlight");
		
		setTimeout(function() {
			tips.removeClass("ui-state-highlight", 1500);
		}, 500);
	}
	function checkLength(o, n, min, max) {
		if (o.val().length > max || o.val().length < min) {
			o.addClass("ui-state-error");
			updateTips("Length of " + n + " must be between " + min + " and "
					+ max + ".");
			return false;
		} else {
			return true;
		}
	}
	function checkRegexp(o, regexp, n) {
		if (!(regexp.test(o.val()))) {
			o.addClass("ui-state-error");
			updateTips(n);
			return false;
		} else {
			return true;
		}
}
	

	
	
$("#dialog-form1").dialog({
						autoOpen : false,
						height :300,
						width : 300,
						modal : true,
						buttons : {
							"Save" : function() {
								var bValid = true;
								
								allFields.removeClass("ui-state-error");
								bValid = bValid
										&& checkLength(comCod, "com Cod", 1, 2);
								bValid = bValid
										&& checkLength(plantCod, "plant Cod", 1,2);
								bValid = bValid
										&& checkLength(shop, "Shop", 1,
												2);
								bValid = bValid
										&& checkRegexp(desc,
												/^[a-z]([0-9a-z_])+$/i,
												"Description may consist of a-z, 0-9, underscores, begin with a letter.");
								// From jquery.validate.js (by joern),
								// contributed by Scott Gonzalez:
								// http://projects.scottsplayground.com/email_address_validation/
								bValid = bValid
										&& checkRegexp(username,
												/^[a-z]([0-9a-z_])+$/i, 
										"UserId may consist of a-z, 0-9, underscores, begin with a letter.");
								bValid = bValid
										&& checkRegexp(shop,
												/^[a-z]([0-9a-z_])+$/i, 
										"UserId may consist of a-z, 0-9, underscores, begin with a letter."); 
												
								
									$("#somethingelse tbody").append(
											"<tr >" + "<td>"  
											+ "<td>"+ comCod.val() + "</td>" 
											+ "<td>"+ plantCod.val() + "</td>" 
											+ "<td>" + shopCod.val()+ "</td>"  
											+ "<td>" + desc.val()+ "</td>" 
											+ 
											"</tr>"
																				
									);
									$(this).dialog("close");
								
							},
							Cancel : function() {
								$(this).dialog("close");
							}
						},
						close : function() {
							allFields.val("").removeClass("ui-state-error");
						}
					});
	$("#edit-zone").click(function() {
		$("#dialog-form1").dialog("open");
		
		
		// var x=document.getElementById('comCod1').innerText;
		//alert(x);

		comb= $("#comCod2").html(); 
		$("#compid").val(comb);
		plant= $("#plantCod2").html(); 
	    $("#planid").val(plant);
	     shop1= $("#shopsCod2").html(); 
	     $("#shopid1").val(shop1);
	     zon1= $("#zoneCod2").html(); 
	     $("#zoneid1").val(zon1);
	     descrps= $("#descrip2").html(); 
         $("#descrp1").val(descrps);
         
         
         
         
	//alert(document.getElementById('comCod1').value);
		  
		  
		//alert($("#comCod1").val());
	

	});
	
});
