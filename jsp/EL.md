## EL

- EL은 JSP의 표현식을 대신하여, 좀 더 알아보기 편한 표현으로 바꾸어 쓸 수 있도록 만들어진 것
- 즉, EL이란 JSP에서 스크립팅을 쓰지 않고 저장된 값을 출력 할 수 있는 기술

| ㅤ                       | 형식                                            | 예                                     |
| ------------------------ | ----------------------------------------------- | -------------------------------------- |
| 세션에 값 저장           | session.setAttribute("세션\_속성\_이름", "값"); | session.setAttribute("userId", "lee"); |
| 세션 속성 값 읽어서 출력 | <%=session.getAttribute("세션\_속성\_이름")%>   | <%=session.getAttribute("userId")%>    |
| EL을 사용한 읽기         | \$\{출력할\_값\}                                | ${userId}                              |

<br />

사용 예시

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<% session.setAttribute("age", 20); %>

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  나이: ${age} <br />

  5년 뒤 나이: ${age + 5} <br/ >
  5년 전 나이: ${age - 5} <br/ >

  나이가 20살인가요?: ${age == 20} <br />
</body>
</html>
```

<br />

### EL이 접근 가능한 JSP 내장 객체

1. pageContext
   - 하나의 JSP 프로그램이 실행될 때 생성되었다가, 그 프로그램 실행이 끝날 때 삭제됨.
   - 여기에 값을 저장하면 해당 JSP 프로그램 안에서만 그 값이 남아있음
2. request
   - JSP 프로그램 실행 요청을 받았을 때 생성되었다가, 그 요청을 모두 처리했을 때 삭제됨.
   - JSP의 포워드 태그를 사용하지 않은 경우는 pageContext와 생명주기가 비슷하지만 `포워드 사용시 달라짐`
3. session
   - 한 사용자가 웹 사이트에 접속하여 세션이 수립되었을 때 생성되고, 세션이 종료되었을 때 삭제됨.
   - 세션은 일정 시간 동안 사용자가 아무런 요청을 하지 않으면 종료됨
4. application
   - 웹 애플리케이션이 서비스를 시작할 때 생성되고, 서비스 종료될 때 삭제됨.
   - 웹 애플리케이션 서비스를 시작하는 것은 서블릿 컨테이너인 톰캣이 시작될 때이므로, <br />
     `톰캣이 시작될 때 생성되고, 톰캣이 종료될 때 삭제된다고 생각해도 무방`

<br />

## 포워드, 리다이렉트

### 리다이렉트 (Redirect)

- 클라이언트가 새로 페이지를 요청한 것과 같은 방식으로 페이지가 이동된다.
- request, response가 유지되지 않는다. (새로 생성됨)
- 이동된 url이 화면에 보인다
- `response.sendRedirect("이동할\_페이지");`

### 포워드 (Forward)

- request, response가 유지된다. (request 스코프에 담긴 값이 유효하다.)
- 이동된 url이 화면에 안보인다.
- 액션 태그: `<jsp:forward page="이동할\_페이지\_URL"/>`
- 자바 코드: `request.getRequestDispatcher("이동할\_URL").forward(request, response);`

<br /><br />

## 자바 빈(Java Bean)

- DTO처럼 모든 멤버 변수가 다 `private`로 되어있고, `getter와 setter` 메서드들이 있는 클래스
- 웹 애플리케이션의 구조 측면에서, 사용 목적에 따라 얘기할 때 `DTO`라고 불렀다.
- 자바 언어 측면에서는, 이렇게 데이터 저장을 위해 만든, getter와 setter 메서드들이 있는 클래스를 `자바 빈(java bean)`이라고 부른다.
- 그리고 이런 자바 빈에서 저장하려고 하는 값을 속성이라고 한다.
- 속성명은 private 멤버 변수가 아니라, `getter/setter`를 보고 결정된다.

```java
// 메소드 이름에서 get/set을 떼고, 첫 글자를 소문자로 바꾼 것이 속성명
// 속성명은 abc가 아니라, name
private String abc;
public String getName() {
  return name;
}
public void setName(String name) {
  this.name = name;
}
```

> 자바 빈이 내장 객체에 저장되어 있을 때, <br />
> EL은 다음과 같이 해서 그 값을 출력할 수 있다. <br />`${빈_이름.속성}`

<br />

사용 예시

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="com.bean.ex.*" %>
<%
  Score score = new Score();
  score.setName("이진수");
  score.setKor(85);
  score.setEng(76);

  request.setAttribute("score1", score);
%>

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Insert title here</title>
</head>
<body>
  <!-- 기존 게시판에서 값 출력할 때 사용한 방식 -->
  이름: <%=score.getName() %> <br />
  국어: <%=score.getKor() %> <br />
  영어: <%=score.getEng() %> <br />
  <hr />
  <!-- 내장객체 속성으로 지정한 값을, 표현식으로 출력하는 방식 -->
  이름: <%=((Score)request.getAttribute("score1")).getName()%> <br />
  국어: <%=((Score)request.getAttribute("score1")).getKor()%> <br />
  영어: <%=((Score)request.getAttribute("score1")).getEng()%> <br />
  <hr />
  <!-- 내장객체 속성으로 지정한 값을, EL로 출력하는 방식 -->
  이름: ${score1.name} <br />
  국어: ${score1.kor} <br />
  영어: ${score1.eng} <br />
</body>
</html>
```

실행 결과

```
이름: 이진수
국어: 85
영어: 76

이름: 이진수
국어: 85
영어: 76

이름: 이진수
국어: 85
영어: 76
```
