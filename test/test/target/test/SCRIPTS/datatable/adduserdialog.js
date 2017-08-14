/**
 * POP up to create a user
 */

$(function() {
	var userID = $("#userID"), username = $("#firstName"), surname = $("#surname"), roleGrade = $("#roleGrade"), standingRole = $("#standingRole"), 
	company = $("#companyDropdown"),plantDropdown = $("#plantDropdown"),shopDropdown = $("#shopDropdown"),zone = $("#zone"),email = $("#email"),lineManager = $("#lineManagerId"),manager1 = $("#seniorManagerId"),
	allFields = $([]).add(userID).add(username).add(surname).add(roleGrade).add(standingRole).add(company).add(plantDropdown).add(shopDropdown).add(zone).add(email).add(lineManager).add(manager1),
	tips = $(".validateTips");

	var defectId = $("#defectId"),dDescription = $("#dDescription"),dCategory = $("#dCategory");
	
	var defectName = $("#defectName"),dCategory1 = $("#dCategory1"),plantDropdown1 = $("#plantDropdown1"),shopDropdown1 = $("#shopDropdown1");
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
	function checkSelection(o,n) {
		if((o.val() == "**")||(o.val() == "")) {
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
$("#dialog-form1").dialog({
						autoOpen : false,
						height : 400,
						width : 300,
						modal : true,
						buttons : {
							Cancel : function() {
								$(this).dialog("close");
							}
						},
						close : function() {
							allFields.val("").removeClass("ui-state-error");
						}
					});

	$("#create-user").button().click(function() {
		window.location.href = "createUser.html";
	});
	$("#save-user").button().click(function() {
		var bValid = true;
		tips.text("");
		allFields.removeClass("ui-state-error");
		bValid = bValid
				&& checkLength(userID, "UserID", 1, 8);
		
		bValid = bValid
				&& checkRegexp(userID,
						/^[a-z]([0-9a-z_])+$/i,
						"UserId may consist of a-z, 0-9, underscores, begin with a letter.");
		bValid = bValid && checkSelection(roleGrade,"Role");
		bValid = bValid && checkSelection(standingRole,"Standing Role");
		bValid = bValid && checkSelection(company,"Company");
		bValid = bValid && checkSelection(plantDropdown,"Plant");
		bValid = bValid && checkSelection(shopDropdown,"Shop");
		bValid = bValid && checkSelection(zone,"Zone");
		bValid = bValid
		&& checkRegexp(email,
				/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
		"Invalid Email Id");
		bValid = bValid
		&& checkLength(lineManager, "Line Manager", 1, 8);
		bValid = bValid
		&& checkLength(manager1, "Manager 1", 1, 8);
		if(bValid){
			window.location.href = "users.html";
			return true;
			} else {
			return false;
		}	
	});
	
	$("#user-edit-confirm").button().click(function() {
		var bValid = true;
		tips.text("");
		allFields.removeClass("ui-state-error");
		bValid = bValid
				&& checkLength(userID, "UserID", 1, 8);
		
		bValid = bValid
				&& checkRegexp(userID,
						/^[a-z]([0-9a-z_])+$/i,
						"UserId may consist of a-z, 0-9, underscores, begin with a letter.");
		bValid = bValid && checkSelection(roleGrade,"Role");
		bValid = bValid && checkSelection(standingRole,"Standing Role");
		bValid = bValid && checkSelection(company,"Company");
		bValid = bValid && checkSelection(plantDropdown,"Plant");
		bValid = bValid && checkSelection(shopDropdown,"Shop");
		bValid = bValid && checkSelection(zone,"Zone");
		bValid = bValid
		&& checkRegexp(email,
				/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
		"Invalid Email Id");
		bValid = bValid
		&& checkLength(lineManager, "Line Manager", 1, 8);
		bValid = bValid
		&& checkLength(manager1, "Manager 1", 1, 8);
		if(bValid){
			window.location.href = "users.html";
			return true;
			} else {
			return false;
		}	
	});
	$("#create-haulier").button().click(function() {
		window.location.href = "createHaulier.html";
	});
	$("#save-haulier").button().click(function() {
		var bValid = true;
		tips.text("");
		allFields.removeClass("ui-state-error");
		bValid = bValid
				&& checkLength(dDescription, "dDescription", 4, 50);
		if(bValid){
			window.location.href = "browseHauliers.html";
			return true;
		}else{return false;}
			
	});
	
	$("#cancel-button").button().click(function() {
		window.location.href = "browseHauliers.html";
	});
	$("#addDefectOrCategory").button().click(function() {
		$("#dialog-form1").dialog("open");
        return false;
	});
	
	$("#create-template").button().click(function() {
		window.location.href = "createTemplate.html";
	});
	$("#save-template").button().click(function() {
		var bValid = true;
		tips.text("");
		allFields.removeClass("ui-state-error");
		bValid = bValid
				&& checkLength(dDescription, "dDescription", 4, 50);
		if(bValid){
			window.location.href = "browseTemplate.html";
			return true;
		}else{return false;}
			
	});
	
	$("#cancel-button-template").button().click(function() {
		window.location.href = "browseTemplate.html";
	});
	
	$("#cancel-button-createTemplate").button().click(function() {
		window.location.href = "createTemplateNew30Min.html";
	});
	$("#cancel-button-timeslotTemplate").button().click(function() {
		window.location.href = "createTemplateNew30Min.html";
	});
	
	$("#allocate-button-createTemplate").button().click(function() {
		window.location.href = "createTemplateNewAllocate.html";
	});
	$("#deAllocate-button-createTemplate").button().click(function() {
		window.location.href = "createTemplateNewDeAllocate.html";
	});
	
	//for WHALE
	$("#back-cntrtimeslot").button().click(function() {
		window.location.href = "selectjobshape.html";
	});
	$("#back-cntrtimeslot1").button().click(function() {
		window.location.href = "browseTrailerDetails.html";
	});
	$("#create-comparebutton").button().click(function() {
		window.location.href = "manageVSLP.html";
	});
	$("#comparebutton").button().click(function() {
		window.location.href = "compareVSLP.html";
	});
	
	// for compareVSLP
	$("#view-vslp").button().click(function() {
		//window.location.href = "selectjobshape.html";
	});
	$("#view-otd").button().click(function() {
		//window.location.href = "viewOptionTakeData.html";
	});
	$("#view-ord").button().click(function() {
		//window.location.href = "compareVSLP.html";
	});
	$("#compare-vslp").button().click(function() {
		//window.location.href = "selectjobshape.html";
	});
	$("#asso-otd").button().click(function() {
		//window.location.href = "browseTrailerDetails.html";
	});
	$("#asso-ord").button().click(function() {
		//window.location.href = "compareVSLP.html";
	});
	
	$("#asso-reotd").button().click(function() {
		//window.location.href = "selectjobshape.html";
	});
	$("#asso-reord").button().click(function() {
		//window.location.href = "browseTrailerDetails.html";
	});
	
	
	
	
	
	
	
	
	
	
});
