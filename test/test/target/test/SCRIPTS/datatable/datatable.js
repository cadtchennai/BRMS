// CRCR Datatable stylesheet 

$(document)
		.ready(
				function() {
					$('#example')
							.dataTable(
									{

										"sPaginationType" : "full_numbers",
										"bRetrieve" : true,
										"bLengthChange" : false,
										"bShowSortArrows" : true, /*
																	 * Show
																	 * Asc/Desc
																	 * Arrows
																	 */
										"iDisplayLength" : 25, /*
																 * No of rows
																 * displayed
																 */
										"bFilter" : true, /* Table Filter on */
										"oLanguage" : {
											"sSearch" : "Filter Results"
										}, /* Change Search label to Filter */
										"bJQueryUI" : false, /*
																 * Turn JQuery
																 * UI off
																 */
										"sDom" : 'RC<"clear">lfrtip', /*
																		 * Show/Hide
																		 * Columns
																		 */
										"bAutoWidth" : true, /*
																 * Column Auto
																 * Width
																 */

										// "oColVis": { "sAlign": "right",
										// "buttonText": '<img class="settings"
										// title="Click to view column display"
										// src="../CRCRPrototype/IMAGES/settings.png"
										// alt="Settings">'},
										// } );
										
										"oColVis" : {
											"sAlign" : "right",

											// "activate": "mouseover",

											"buttonText" : '<img class="settings" title="Click to view column display" src="./IMAGES/settings.png" alt="Settings">'
										},
										
									});

				});
;

// 	
$(document).ready(function() {
	$('#workflow').dataTable({

		"sPaginationType" : "full_numbers",
		"bPaginate" : false,
		"bInfo" : false,
		"bRetrieve" : true,
		"bLengthChange" : false,
		"bShowSortArrows" : true, /* Show Asc/Desc Arrows */
		"iDisplayLength" : 25, /* No of rows displayed */
		"bFilter" : false, /* Table Filter on */
		"oLanguage" : {
			"sSearch" : "Filter Results"
		}, /* Change Search label to Filter */
		"bJQueryUI" : false, /* Turn JQuery UI off */
		"bAutoWidth" : true, /* Column Auto Width */

	});

});
;


$(document).ready(function() {
	/*$('#workflowsupervisor').dataTable({


	});*/

});
;
$(document).ready(function() {
/*	$('#workflow1').dataTable({


	});*/

});
;
// "oColVis": { "sAlign": "right",
// "buttonText": '<img class="settings" title="Click to view column display"
// src="../CRCRPrototype/IMAGES/settings.png" alt="Settings">'},
// } );

// "oColVis": { "sAlign": "right",

// "activate": "mouseover",

// "buttonText": '<img class="settings" title="Click to view column display"
// src="../CRCRPrototype/IMAGES/settings.png" alt="Settings">'},});

$(document).ready(
			function() {
					$('#example_yourcrcr')
							.dataTable(
									{

										"sPaginationType" : "full_numbers",
										"bRetrieve" : true,
										"bLengthChange" : false,
										"bShowSortArrows" : true, /*
																	 * Show
																	 * Asc/Desc
																	 * Arrows
																	 */
										"iDisplayLength" : 25, /*
																 * No of rows
																 * displayed
																 */
										"bFilter" : true, /* Table Filter on */
										"oLanguage" : {
											"sSearch" : "Filter Results"
										}, /* Change Search label to Filter */
										"bJQueryUI" : false, /*
																 * Turn JQuery
																 * UI off
																 */
										"sDom" : 'RC<"clear">lfrtip', /*
																		 * Show/Hide
																		 * Columns
																		 */
										"bAutoWidth" : true, /*
																 * Column Auto
																 * Width
																 */
										// "aoColumnDefs": [{ "bVisible": false,
										// "aTargets": [0] }],
										// "aoColumnDefs": [{ "bVisible": false,
										// "aTargets":[10] }],
										"aoColumns" : [ null, null, {"bVisible" : false}, null, null, {
											"bVisible" : false},
											{"bVisible" : false}, {
											"bVisible" : false
										}, {
											"bVisible" : false
										}, {
											"bVisible" : false
										}, {
											"bVisible" : false
										}, null, null ],
										// "oColVis": { "sAlign": "right",
										// "buttonText": '<img class="settings"
										// title="Click to view column display"
										// src="../CRCRPrototype/IMAGES/settings.png"
										// alt="Settings">'},
										// } );
										"oColVis" : {
											"sAlign" : "right",
											// "activate": "mouseover",
											"buttonText" : '<img class="settings" title="Click to view column display" src="./IMAGES/settings.png" alt="Settings">'
										},
									});
					var userTable =	$('#staticUsersTable')
					.dataTable(
							{
								"sPaginationType" : "full_numbers",
								"bPaginate" : true,
								"bInfo" : true,
								"bRetrieve" : true,
								
								"bLengthChange" : true,
								"bShowSortArrows" : true, /* Show Asc/Desc Arrows */
								"iDisplayLength" : 10, /* No of rows displayed */
								"bFilter" : true, /* Table Filter on */
								"bScrollCollapse": true,
								"sScrollX": "100%",
								"sScrollY": "100%",
								"oLanguage" : {
									"sSearch" : "Filter Results",
									"sLengthMenu": "Show _MENU_ records per page",
									//"sZeroRecords": "Nothing found - sorry",
									"sInfo": "Showing _START_ to _END_ of _TOTAL_ records",
									"sInfoEmpty": "Showing 0 to 0 of 0 records",
									"sInfoFiltered": "(filtered from _MAX_ total records)",
									"sAlign" : "right",
								}, /* Change Search label to Filter */
								"bJQueryUI" : false, /* Turn JQuery UI off */
								"sDom" : '<"right"RC><"top"fl><"bottom"tip><"clear">',
								"bAutoWidth" : true, /* Column Auto Width */
								"oColVis" : {
									"sAlign" : "right",
									//"activate": "mouseover",
									"buttonText" : '<img class="settings" title="Click to view column display" src="./IMAGES/settings.png" alt="Settings">'
								},
								"oColReorder": {
						            "iFixedColumns": 1
						        },
							});
					$("tfoot input").keyup( function () {
						// Filter on the column (the index) of this element 
						userTable.fnFilter( this.value, $("tfoot input").index(this) );
					} );
					
					
					// * Support functions to provide a little bit of 'user friendlyness' to the textboxes in 
					// * the footer
					 
					$("tfoot input").each( function (i) {
						asInitVal[i] = this.value;
					} );
					
					$("tfoot input").focus( function () {
						if ( this.className == "search_init" )
						{
							this.className = "";
							this.value = "";
						}
					} );
					
					$("tfoot input").blur( function (i) {
						if ( this.value == "" )
						{
							this.className = "search_init";
							this.value = asInitVal[$("tfoot input").index(this)];
						}
					} );

				});
;

$(document).ready( function() {$('#achievemnettable')
							.dataTable(
									{

										"sPaginationType" : "full_numbers",
										"bRetrieve" : true,
										"bLengthChange" : false,
										"bShowSortArrows" : true, /*
																	 * Show
																	 * Asc/Desc
																	 * Arrows
																	 */
										"iDisplayLength" : 25, /*
																 * No of rows
																 * displayed
																 */
										"bFilter" : true, /* Table Filter on */
										"oLanguage" : {
											"sSearch" : "Filter Results"
										}, /* Change Search label to Filter */
										"bJQueryUI" : false, /*
																 * Turn JQuery
																 * UI off
																 */
										"sDom" : 'RC<"clear">lfrtip', /*
																		 * Show/Hide
																		 * Columns
																		 */
										"bAutoWidth" : true, /*
																 * Column Auto
																 * Width
																 */
										// "aoColumnDefs": [{ "bVisible": false,
										// "aTargets": [0] }],
										// "aoColumnDefs": [{ "bVisible": false,
										// "aTargets":[10] }],
										"aoColumns" : [  null, null, null, null, {"bVisible" : false}, {"bVisible" : false}, {"bVisible" : false},  null,null ,null ],
										// "oColVis": { "sAlign": "right",
										// "buttonText": '<img class="settings"
										// title="Click to view column display"
										// src="../CRCRPrototype/IMAGES/settings.png"
										// alt="Settings">'},
										// } );
										"oColVis" : {
											"sAlign" : "right",
											// "activate": "mouseover",
											"buttonText" : '<img class="settings" title="Click to view column display" src="./IMAGES/settings.png" alt="Settings">'
										},
									});

				});
;





// add shop

var asInitVals = new Array();
$(document).ready(
		function() {
				$('#staticShopsTable')
						.dataTable(
								{

									"sPaginationType" : "full_numbers",
									"bPaginate" : true,
									"bInfo" : true,
									"bRetrieve" : true,
									"bLengthChange" : true,
									"bShowSortArrows" : true, /* Show Asc/Desc Arrows */
									"iDisplayLength" : 4, /* No of rows displayed */
									"bFilter" : true, /* Table Filter on */
									"oLanguage" : {
										"sSearch" : "Filter Results"
									}, /* Change Search label to Filter */
									"bJQueryUI" : false, /* Turn JQuery UI off */
									"sDom" : 'RC<"clear">lfrtip',
									"bAutoWidth" : true, /* Column Auto Width */
									"oColVis" : {
										"sAlign" : "right",
										//"activate": "mouseover",
										"buttonText" : '<img class="settings" title="Click to view column display" src="./IMAGES/settings.png" alt="Settings">'
									}
									
								});
				/*$("tfoot input").keyup( function () {
									// Filter on the column (the index) of this element 
									oTable.fnFilter( this.value, $("tfoot input").index(this) );
								} );
								
								
								// * Support functions to provide a little bit of 'user friendlyness' to the textboxes in 
								// * the footer
								 
								$("tfoot input").each( function (i) {
									asInitVals[i] = this.value;
								} );
								
								$("tfoot input").focus( function () {
									if ( this.className == "search_init" )
									{
										this.className = "";
										this.value = "";
									}
								} );
								
								$("tfoot input").blur( function (i) {
									if ( this.value == "" )
									{
										this.className = "search_init";
										this.value = asInitVals[$("tfoot input").index(this)];
									}
								} );*/
							

			});





var asInitVal = new Array();
$(document).ready(
		function() {
				$('#staticZonesTable')
						.dataTable(
								{

									"sPaginationType" : "full_numbers",
									"bPaginate" : true,
									"bInfo" : true,
									"bRetrieve" : true,
									"bLengthChange" : true,
									"bShowSortArrows" : true, /* Show Asc/Desc Arrows */
									"iDisplayLength" : 4, /* No of rows displayed */
									"bFilter" : true, /* Table Filter on */
									"oLanguage" : {
										"sSearch" : "Filter Results"
									}, /* Change Search label to Filter */
									"bJQueryUI" : false, /* Turn JQuery UI off */
									"sDom" : 'RC<"clear">lfrtip',
									"bAutoWidth" : true, /* Column Auto Width */
									"oColVis" : {
										"sAlign" : "right",
										//"activate": "mouseover",
										"buttonText" : '<img class="settings" title="Click to view column display" src="./IMAGES/settings.png" alt="Settings">'
									}
									

								});
				
				             /* $("tfoot input").keyup( function () {
									 Filter on the column (the index) of this element 
=======
								});/*$("tfoot input").keyup( function () {
									 Filter on the column (the index) of this element 
>>>>>>> .r193
									oTable.fnFilter( this.value, $("tfoot input").index(this) );
								} );
								
								
								 * Support functions to provide a little bit of 'user friendlyness' to the textboxes in 
								 * the footer
								 
								$("tfoot input").each( function (i) {
									asInitVal[i] = this.value;
								} );
								
								$("tfoot input").focus( function () {
									if ( this.className == "search_init" )
									{
										this.className = "";
										this.value = "";
									}
								} );
								
								$("tfoot input").blur( function (i) {
									if ( this.value == "" )
									{
										this.className = "search_init";
										this.value = asInitVal[$("tfoot input").index(this)];
									}
								} );*/
			});
;


