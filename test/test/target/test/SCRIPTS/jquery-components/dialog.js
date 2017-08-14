/**
 * a new Dialog definition from JQuery widget library
 */

$(function() {
	$("#dialog").dialog({
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
	$("#opener").click(function() {
		$("#dialog").dialog("open");
	});
});

$(function() {
	$("#dialog-2").dialog({
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
	$("#opener-2").click(function() {
		$("#dialog-2").dialog("open");
	});
});


$(function() {
	$("#dialog2").dialog({
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
	$("#save-countermeasure").click(function() {
		$("#dialog2").dialog("open");
	});
});

$(function() {
	$("#dialog3").dialog({
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
	$("#save-countermeasure2").click(function() {
		$("#dialog3").dialog("open");
	});
});

$(function() {
	$("#dialog4").dialog({
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
	$("#save-rootcause").click(function() {
		$("#dialog4").dialog("open");
	});
});