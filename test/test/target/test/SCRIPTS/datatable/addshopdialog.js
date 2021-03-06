/**
 * POP up to create a shop
 */

$(function() {
	var comCod = $("#comCod"), plantCod = $("#plantCod"), shopCod = $("#shopid"), desc = $("#desc"), 
	allFields = $([]).add(comCod).add(plantCod).add(shopCod).add(desc),
	tips = $(".validateTips");
	function updateTips(t) {
		tips.text(t).addClass("ui-state-highlight");
		
		setTimeout(function() {
			tips.removeClass("ui-state-highlight", 1500);
		}, 500);
	}
	function checkLength(o, n, min, max) {
		
		if(o.val().length==0  || (o.val().length >= max || o.val().length < min)) 
		{
			o.addClass("ui-state-error");
			//updateTips("Please enter the field");
		//} else if (o.val().length >= max || o.val().length < min) {
			//o.addClass("ui-state-error");
			updateTips("Length of " + n + " must be between " + min + " and "
					+ max + ".");
			return false;
		} else {
			return true;
		}
	}
	function checkSelection(o,n) { 
		
        if((o.val() =="**")||(o.val() == "")) { 
                o.addClass("ui-state-error"); 
                updateTips("Please select a "+n); 
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
	$("#dialog-form").dialog({
		autoOpen : false,
		height : 300,
		width : 300,
		modal : true,
		buttons : {
			   "Save" : function() {
				var bValid = true;
				
				allFields.removeClass("ui-state-error");
				bValid = bValid
				&& checkSelection(comCod,
						"Company");
				bValid = bValid
				&& checkSelection(plantCod,
						"plant");
				bValid = bValid
				&& checkLength(shopCod, "Shop Code", 1,3);
				bValid = bValid
				&& checkRegexp(shopCod,
						/^[0-9]+$/i,
						"Shop Code consist only numbers");
				bValid = bValid
						&& checkLength(desc, "Description", 1,20);
				
				bValid = bValid
						&& checkRegexp(desc,
								/^[a-z]([0-9a-z_])+$/i,
								"Description may consist of a-z, 0-9, underscores, begin with a letter.");
				// From jquery.validate.js (by joern),
				// contributed by Scott Gonzalez:
				// http://projects.scottsplayground.com/email_address_validation/
				/*bValid = bValid
						&& checkRegexp(username,
								/^[a-z]([0-9a-z_])+$/i, 
						"UserId may consist of a-z, 0-9, underscores, begin with a letter.");
				bValid = bValid
						&& checkRegexp(shop,
								/^[a-z]([0-9a-z_])+$/i, 
						"UserId may consist of a-z, 0-9, underscores, begin with a letter."); */
								
				if(bValid) {
					
					$("#somethingelse tbody").append(
							"<tr >"   
							+ "<td>"+ comCod.val() + "</td>" 
							+ "<td>"+ plantCod.val() + "</td>" 
							+ "<td>" + shopCod.val()+ "</td>"  
							+ "<td>" + desc.val()+ "</td>" 
							+ "</tr>"									
					);
					$(this).dialog("close");
					return true;
				} else {
					return false;
				}
					
					
				
			},
			Cancel : function() {
				$(this).dialog("close");
			}
		},
		close : function() {
			allFields.val("").removeClass("ui-state-error");
		}
	});
$("#create-shop").button().click(function() {
//$("#dialog-form").dialog("open");
window.location.href = "createShop.html";
});

$("#save-shop").button().click(function() {
	var bValid = true;
	tips.text("");
	allFields.removeClass("ui-state-error");
	bValid = bValid && checkSelection(comCod,"Company");
	bValid = bValid && checkSelection(plantCod,"Plant code");
	bValid = bValid
	&& checkLength(shopCod, "Shop Code", 1,3);
	bValid = bValid
	&& checkRegexp(shopCod,
			/^[0-9]+$/i,
			"Shop Code consist only numbers");
	bValid = bValid
			&& checkLength(desc, "Description", 1,20);
	bValid = bValid
			&& checkRegexp(desc,
					/^[a-z]([0-9a-z_])+$/i,
					"Description may consist of a-z, 0-9, underscores, begin with a letter.");
	if(bValid){
		window.location.href = "shops.html";
		return true;
		} else {
		return false;
	}	
});
$("#cancel-button").button().click(function() {
	//$("#dialog-form").dialog("open");
	window.location.href = "shops.html";
});
$("#edit-shop").click(function() {
	window.location.href = "editUser.html";
	
//$("#dialog-form1").dialog("open");
});

$("#shop-edit-confirm").button().click(function() {
	var bValid = true;
	tips.text("");
	allFields.removeClass("ui-state-error");
	
	bValid = bValid
			&& checkLength(desc, "Description", 1,20);
	bValid = bValid
			&& checkRegexp(desc,
					/^[a-z]([0-9a-z_])+$/i,
					"Description may consist of a-z, 0-9, underscores, begin with a letter.");
	if(bValid){
		window.location.href = "shops.html";
		return true;
		} else {
		return false;
	}	
});

});
