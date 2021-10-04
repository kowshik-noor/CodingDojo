<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Time</title>
<link rel="stylesheet" href="css/style.css" />
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col">
				<h1 class="green"><c:out value="${time}"></c:out></h1>
			</div>
		</div>
	</div>
	
	<script type="text/javascript" src="js/time.js"></script>
</body>
</html>