<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<script type="text/javascript">
    function checkPrice() {
       /*  var ddlPassport = document.getElementById("ddlPassport");
        var dvPassport = document.getElementById("dvPassport");
        
        dvPassport.value=ddlPassport.value;
        */
        
        var select = document.getElementById('cmbitems');
        var input = document.getElementById('txtprice');
        select.onchange = function() {
            input.value = select.value;
        }
       
    }
</script>
<!-- <span>Do you have Passport?</span>
    <select id = "ddlPassport" onClick = "ShowHideDiv()">
        <option value="N">No</option>
        <option value="Y">Yes</option>            
    </select>
<hr />
<div id="dvPassport" >
    Passport Number:
    <input type="text" id="txtPassportNumber" />
</div> -->







<select name="cmbitems" id="cmbitems" onClick="checkPrice()">
    <option value="price1">blue</option>
    <option value="price2">green</option>
    <option value="price3">red</option>
</select>

<input type="text" name="txtprice" id="txtprice" >

</body>
</html>