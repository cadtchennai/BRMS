/**
 * 
 */
/**
 * POP up to evaluate crcr
 */

$(function() {
	var preventatsource = $("#preventatsource"), preventflowout = $("#preventflowout"), redirecttext = $("#redirecttext"),
	preventsourcecount= $("#preventsourcecount"), preventflowcount= $("#preventflowcount"),
	allFields = $([]).add(preventatsource).add(preventflowout).add(redirecttext).add(preventsourcecount).add(preventflowcount), 
			tips = $(".validateTips");
	function updateTips(t) {
		tips.text(t).addClass("ui-state-highlight");

		setTimeout(function() {
			tips.removeClass("ui-state-highlight", 1500);
		}, 500);
	}
	function checkLength(o, n, min, max) {

		if (o.val().length == 0
				|| (o.val().length >= max || o.val().length < min)) {
			// o.addClass("ui-state-error");
			// updateTips("Please enter the field");
			// } else if (o.val().length >= max || o.val().length < min) {
			o.addClass("ui-state-error");
			updateTips("Length of " + n + " must be between " + min + " and "
					+ max + ".");
			return false;
		} else {
			return true;
		}
	}

	function checkSelection(o,n) {

		if ((o.val() == "**") || (o.val() == "")) {
			o.addClass("ui-state-error");
			updateTips("Please select a " + n);
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

	$("#save-countermeasure")
			.button()
			.click(
					function() {
						var bValid = true;
						tips.text("");
						allFields.removeClass("ui-state-error");
						bValid = bValid
								&& checkLength(preventatsource, "Description",
										1,20);
						bValid = bValid
								&& checkRegexp(preventatsource,
										/^[a-z]([0-9a-z_])+$/i,
										"Description may consist of a-z, 0-9, underscores, begin with a letter.");

						bValid = bValid
								&& checkLength(preventflowout, "Description",
										1, 20);
						bValid = bValid
								&& checkRegexp(preventflowout,
										/^[a-z]([0-9a-z_])+$/i,
										"Description may consist of a-z, 0-9, underscores, begin with a letter.");

						if (bValid) {
							$("#dialog2").dialog("open");
							return true;
						} else {
							
							return false;
						}
					});
	
	$("#save-countermeasure2")
	.button()
	.click(
			function() {
				var bValid = true;
				tips.text("");
				allFields.removeClass("ui-state-error");
				bValid = bValid
						&& checkLength(preventatsource, "Description",
								1,20);
				bValid = bValid
						&& checkRegexp(preventatsource,
								/^[a-z]([0-9a-z_])+$/i,
								"Description may consist of a-z, 0-9, underscores, begin with a letter.");

				bValid = bValid
						&& checkLength(preventflowout, "Description",
								1, 20);
				bValid = bValid
						&& checkRegexp(preventflowout,
								/^[a-z]([0-9a-z_])+$/i,
								"Description may consist of a-z, 0-9, underscores, begin with a letter.");

				if (bValid) {
					$("#dialog2").dialog("open");
					return true;
				} else {
					return false;
				}
			});
	



$(function() {
	$("#dialog5").dialog({
		autoOpen : false,
		modal : true,
		show : {
			effect : "blind",
			duration : 1000
		},
		hide : {
			effect : "clip",
			duration : 1000
		},
		 buttons: {
			 Save: function() {
				 var bValid = true;
				 allFields.removeClass("ui-state-error");
				 bValid = bValid
				&& checkLength(redirecttext,"Comment",1,20);
					if(bValid) {
						return true;
					} else {
						return false;
					}

				 $( this ).dialog( "close" );
				 },
			 Cancel: function() {
			 $( this ).dialog( "close" );
			 }
			 }
	});
	
	$(function() {
		$("#dialog6").dialog({
			autoOpen : false,
			show : {
				effect : "blind",
				duration : 1000
			},
			hide : {
				effect : "clip",
				duration : 1000
			},
			 buttons: {
				 Cancel: function() {
				 $( this ).dialog( "close" );
				 }
				 }
		});
	});
	
	$(function() {
		$("#dialog7").dialog({
			autoOpen : false,
			show : {
				effect : "blind",
				duration : 1000
			},
			hide : {
				effect : "clip",
				duration : 1000
			},
			 buttons: {
				 Add: function() {
					 $( this ).dialog( "close" );
				 },				 
				 Cancel: function() {
					 $( this ).dialog( "close" );
				 }
				 }
		});
		/*$("#save-countermeasure2").click(function() {
			$("#dialog3").dialog("open");
		});*/
	});
	
	
});


$("#evaluate-add-validator").click(function() {
	$("#dialog7").dialog("open");
});

$("#button-redirect").click(function() {
	$("#dialog5").dialog("open");
});

$("#evaluate-approval").click(function() {
	$("#dialog6").dialog("open");
});

$("#evaluate_view_crcr").click(function() {
	window.location.href = "viewCRCR1.html";
});

$('#btnContainVerify').on('click', function(event) {
	$("#rowID").toggle();
});

$('#btnCounterVerify').on('click', function(event) {
	$("#rowID1").toggle();
});

$("#back").click(function()
		{
	window.location.href = "EvaluateCRCR.html";
		});
$("#reject-button").click(function() {
	$("#dialog5").dialog("open");
});
});


