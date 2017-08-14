<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
        <%@ page import="com.techm.jbpm.TaskBean" %>  
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Rule Application</title>
</head>

<script>

function myFunctions(processInstanceid) {
	   
	   
    var a= document.getElementById("processInstanceId");
    a.value=processInstanceid;
    alert("Process Started!"+a.value);
    //document.getElementById("btn"+processInstanceid).disabled = 'true';
}

function myFunction1(processInstanceid) {
	//alert("Process Value!"+ processInstanceid);

var a= document.getElementById("processInstanceId");
	
		a.value=processInstanceid;
		alert("Process Value!"+ a.value);

}
 
</script>
<body>
<form name="details" action="HelloWorld">

<c:if test="${requestScope.SEApproveReject!=null}">
<h3>${SEApproveReject }</h3>
</c:if>

<c:if test="${requestScope.PEApproveReject!=null}">
<h3>${PEApproveReject }</h3>
</c:if>

<c:if test="${requestScope.PESubmit!=null}">
<h3>${PESubmit }</h3>
</c:if>

<c:if test="${requestScope.SENEApproveReject!=null}">
<h3>${SENEApproveReject }</h3>
</c:if>


User Role<input type="text" name="userRole"><br><br>
<table>
					 <c:if test="${requestScope.TaskBeans!=null}">

						<thead>
							<tr>
								<th>Task Id</th>
								<th>Task Name</th>
								<th>Process Instance Id</th>
								<th>Select</th>
								<th>Function Code</th>								
								<th>Give Away Tech</th>
								<th>Give Away Comm</th>
								<th>Harness Name</th>
								<th>Oncost</th>
								
							</tr>
							
						</thead>
						<tbody>
						<c:forEach items="${TaskBeans}" var="TaskBean"> 
	

							<tr class="odd gradeA">			 
								<td>${TaskBean.taskId}</td> 
								<td>${TaskBean.taskName}</td> 
								<td>${TaskBean.processInstanceId}</td> 
								<!-- <td><input type="checkbox"/></td>
								<td id="subId1">G24020</td>								
								<td><select><option value="yes">Yes</option><option value="No">No</option></select></td>
								<td><select><option value="yes">Yes</option><option value="No">No</option></select></td>
								<td>EG1_H</td>								
								<td id="subId">$0.16</td>
								<td><select><option value="yes">Yes</option><option value="No">No</option></select></td>	 -->
								<td>
								<input type="hidden" name="processInstanceId" id="processInstanceId"/>
								</td>
								
								<td><input type="submit" name="action" value="Start" id="btn${TaskBean.processInstanceId}" onclick="myFunctions(${TaskBean.processInstanceId})"></td> 
								<td><input type="submit" name="action" value="Complete" id="Complete${TaskBean.processInstanceId}" onclick="myFunction1(${TaskBean.processInstanceId});" ></td>
			
															
								
								<td><input type="submit" value="Reject" name="action" onclick="myFunction1(${TaskBean.processInstanceId});"></td>
								
								
								<td> <c:if test="${requestScope.TaskBeansPE!=null}"><input type="submit" value="Cancel" name="action" onclick="myFunction1(${TaskBean.processInstanceId});"></c:if></td>
							
							
							</tr>
							</c:forEach>
						</tbody>
						</c:if>
						
					 <c:if test="${requestScope.TaskBeansPESubmit!=null}">

						<thead>
							<tr>
								<th>Task Id</th>
								<th>Task Name</th>
								<th>Process Instance Id</th>
								<th>Select</th>
								<th>Function Code</th>								
								<th>Give Away Tech</th>
								<th>Give Away Comm</th>
								<th>Harness Name</th>
								<th>Oncost</th>
								
							</tr>
							
						</thead>
						<tbody>
						<c:forEach items="${TaskBeansPESubmit}" var="TaskBean"> 
	

							<tr class="odd gradeA">			 
								<td>${TaskBean.taskId}</td> 
								<td>${TaskBean.taskName}</td> 
								<td>${TaskBean.processInstanceId}</td> 
								<!-- <td><input type="checkbox"/></td>
								<td id="subId1">G24020</td>								
								<td><select><option value="yes">Yes</option><option value="No">No</option></select></td>
								<td><select><option value="yes">Yes</option><option value="No">No</option></select></td>
								<td>EG1_H</td>								
								<td id="subId">$0.16</td>
								<td><select><option value="yes">Yes</option><option value="No">No</option></select></td>	 -->
								<td>
								<input type="hidden" name="processInstanceId" id="processInstanceId"/>
								</td>	
								<td><input type="submit" value="Submit" name="action" onclick="myFunction1(${TaskBean.processInstanceId});"></td>
							</tr>
							</c:forEach>
						</tbody>
						</c:if>
						
					</table>
						
						
</form>
</body>
</html>