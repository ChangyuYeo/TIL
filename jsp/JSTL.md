# JSTL (Jsp Standard Tag Library)

- HTML 태그와 자바 코드들이 섞여 있으면 코드의 가독성이 떨어지기 때문에,
- 이러한 단점을 보완하고자 만들어진 태그 라이브러리가 JSTL
- JSTL을 사용하려고 하는 JSP 프로그램의 선두에 다음과 같은 지시자를 적어주어야 한다.

```java
// JSTL은 5개의 라이브러리로 구성되어 있는데,
// 그 중에서 코어(Core) 라이브러리를 사용하겠다고 이야기하는 것
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
```

사용 예시

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
	request.setAttribute("name", "박길동");
	request.setAttribute("money", 100000);
	request.setAttribute("dataList", new String[] {"a", "b", "c"});
	request.setAttribute("age", 20);
%>

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
</head>
<body>
	<!-- JSTL if  -->
	<c:choose>
		<c:when test="${name == '홍길동'}">
			이름은 ${name} 입니다! <br />
		</c:when>
		<c:otherwise>
			저는 홍길동이 아니에요!<br />
		</c:otherwise>
	</c:choose>

	<!-- JSTL choose -->
	<!-- if - else 또는 if - else if - else 구조를 구현 -->
	<c:choose>
		<c:when test="${money >= 10000}">
			돈이 많아요!
		</c:when>
		<c:when test="${money > 0}">
			돈이 적어요!
		</c:when>
		<c:otherwise>
			돈이 없어요!
		</c:otherwise>
	</c:choose>
	<br /><br />

	<!-- JSTL forEach : 카운터 변수를 사용하는 반복문 -->
	<c:forEach var="count" begin="0" end="30" step="3">
		${count}
	</c:forEach>
	<br />

	<!-- JSTL forEach : 배열 또는 리스트를 순회하는 반복문 -->
	<c:forEach var="data" items="${dataList}">
		${data}
	</c:forEach>
	<br /><br />

	<!-- age 값이 20 이상이면 “성인입니다.” 그렇지 않으면 “미성년입니다.” 를 출력 -->
	<c:choose>
		<c:when test="${age >= 20}">
			성인입니다.
		</c:when>
		<c:otherwise>
			미성년입니다.
		</c:otherwise>
	</c:choose>
</body>
</html>
```
