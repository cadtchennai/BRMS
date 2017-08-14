/** the pop up dialog to create /add person on the workflow tier ( assign responsibility page*/

$(function() {
	var userID = $("#userID"), username = $("#username"), reviewershop = $("#reviewershop"), 
	allFields = $([]).add(userID).add(username).add(reviewershop),
	tips = $(".validateTips");
	function updateTips(t) {
		tips.text(t).addClass("ui-state-highlight");
		
		setTimeout(function() {
			tips.removeClass("ui-state-highlight", 1500);
		}, 500);
	}

$("#workflow-form").dialog({
						autoOpen : false,
						height : 400,
						width : 400,
						modal : true,
						buttons : {
							"Add reviewer" : function() {
								//var bValid = true;
								
								allFields.removeClass("ui-state-error");
								/*bValid = bValid
										&& checkLength(userID, "user ID", 3, 16);
								bValid = bValid
										&& checkLength(username, "User Name", 6, 80);
								bValid = bValid
										&& checkLength(shop, "Shop", 5,
												16);
								bValid = bValid
										&& checkRegexp(userID,
												/^[a-z]([0-9a-z_])+$/i,
												"UserId may consist of a-z, 0-9, underscores, begin with a letter.");
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
										"UserId may consist of a-z, 0-9, underscores, begin with a letter."); */
											
								
									$("#workflow tbody").append(
											'<tr class="assign-desc">'
											+ "<td>" +userID.val()+ "</td>" 
											+ "<td>"+ username.val() + "</td>" 
											+ "<td>"+ reviewershop.val() + "</td>" 
											+ "<td>"+'<a class="edit" href=""><img class="edit" src="../CRCRPrototype/IMAGES/edit.png" alt="edit"></a>' +"</td>"
											+ "<td>"+'<a class="delete" href=""><img class="image-workflow-table" src="../CRCRPrototype/IMAGES/delete.png"></a>'+"</td>"
											+"</tr>"
																							
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
	$("#add-supervisor").button().click(function() {
		$("#workflow-form").dialog("open");
	});
});
