<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page import="org.kie.api.task.model.TaskSummary"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Login</title>
</head>
<body>
<c:if test="${requestScope.BPMSTaskComplete!=null}">
<h3>${BPMSTaskComplete }</h3>
</c:if>
<h1>Interview Process Flow</h1>
<h3>Login as bpmsAdmin to submit your resume</h3>
<form name="details" action="RolesAction">
UserRole<input type="text" name="userRole">
<input type="submit" value="Login" name="action">
</form>
</body>
</html>