<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Date</title>
<link rel="stylesheet" href="css/style.css" />
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col">
				<h1 class="blue"><c:out value="${date}"></c:out></h1>
			</div>
		</div>
	</div>
	
	<script type="text/javascript" src="js/date.js"></script>
</body>
</html>