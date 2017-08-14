/**
 * edit save delete a row
 */

function restoreRow(oTable, nRow) {
	var aData = oTable.fnGetData(nRow);
	var jqTds = $('>td', nRow);

	for ( var i = 0, iLen = jqTds.length; i < iLen; i++) {
		oTable.fnUpdate(aData[i], nRow, i, false);
	}

	oTable.fnDraw();
}

function editRow(oTable, nRow) {
	var aData = oTable.fnGetData(nRow);
	var jqTds = $('>td', nRow);
	jqTds[0].innerHTML = '<input type="text" value="' + aData[0] + '">';
	jqTds[1].innerHTML = '<input type="text" value="' + aData[1] + '">';
	jqTds[2].innerHTML = '<input type="text" value="' + aData[2] + '">';
	jqTds[3].innerHTML = '<a class="edit" href=""><img class="edit" src="./IMAGES/edit.png" alt="edit"></a>';

}

function saveRow(oTable, nRow) {
	var jqInputs = $('input', nRow);
	oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
	oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
	oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
	oTable.fnUpdate('<a class="edit" href=""><img class="edit" src="./IMAGES/edit.png" alt="edit"></a>',nRow, 3, false);

	oTable.fnDraw();
}

$(document)
		.ready(
				function() {
					var oTable = $('#workflow').dataTable();
					var myTable = $('#staticUsersTable').dataTable();
					var nEditing = null;
					var toDelete = null;
					$(".delete").click(function() {
						
						toDelete = $(this);
					    $('#dialog-confirm').dialog('open');
					});

					// jquery-ui confirm dialog box
					$("#dialog-confirm").dialog({
						
					   autoOpen: false,
					   resizable: false,
					   modal: true,
					   buttons: {
					        'Confirm': function() {
					        	
					        	var nRow = toDelete.parents('tr')[0];
								myTable.fnDeleteRow(nRow);
								$(this).dialog('close');
					         },
					         Cancel: function() {
					               $(this).dialog('close');
					         }
					   }
					});

					$('#new')
							.click(
									function(e) {
										e.preventDefault();

										var aiNew = oTable
												.fnAddData([
														'',
														'',
														'',
														'<a class="edit" href=""><img class="edit" src="./IMAGES/edit.png" alt="edit"></a>',
														'<a class="delete" href="#"><img class="image-workflow-table"	src="../CRCRPrototype/IMAGES/lock.png"></a>']);
										var nRow = oTable.fnGetNodes(aiNew[0]);
										editRow(oTable, nRow);
										nEditing = nRow;
									});

					$('#workflow a.delete').on('click', function(e) {
						e.preventDefault();
						var nRow = $(this).parents('tr')[0];
						oTable.fnDeleteRow(nRow);
					});
					/*$('#staticUsersTable a.delete').on('click', function(e) {
						e.preventDefault();
						var nRow = $(this).parents('tr')[0];
						myTable.fnDeleteRow(nRow);
					});*/
					$('#workflow a.edit').on(
							'click',
							function(e) {
								e.preventDefault();

								/*
								 * Get the row as a parent of the link that was
								 * clicked on
								 */
								var nRow = $(this).parents('tr')[0];
								if (nEditing !== null && nEditing != nRow) {
									/*
									 * Currently editing - but not this row -
									 * restore the old before continuing to edit
									 * mode
									 */
									restoreRow(oTable, nEditing);
									editRow(oTable, nRow);
									nEditing = nRow;
								} else if (nEditing == nRow
										&& this.innerHTML == 'Save') {
									// /* Editing this row and want to save it
									// */
									saveRow(oTable, nEditing);
									nEditing = null;
								} else {
									/* No edit in progress - let's start one */
									editRow(oTable, nRow);
									nEditing = nRow;
								}
							});
					
						$("#getName").click(function(){
							if($("#userID").val().toLowerCase()  == "uk15853"){
								$("#firstName").val("Radina");
								$("#surname").val("Tahtadzhieva");
							} else {
								$("#firstName").val("");
								$("#surname").val("");
							}
						});
						$("#getLineManagerName").click(function(){
							if($("#lineManagerId").val().toLowerCase() == "uk04455"){
								$("#lineManagerFirstName").val("Keith");
								$("#lineManagerSurName").val("Watson");
							} else {
								$("#lineManagerFirstName").val("");
								$("#lineManagerSurName").val("");
							}
						});
						$("#getSeniorManagerName").click(function(){
							if($("#seniorManagerId").val().toLowerCase() == "uk02233"){
								$("#seniorManagerFirstName").val("Andrew");
								$("#seniorManagerSurName").val("Kennington");
							} else {
								$("#seniorManagerFirstName").val("");
								$("#seniorManagerSurName").val("");
							}
						});

				});
