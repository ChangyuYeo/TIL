# 서블릿(Servlet)

- 서블릿 컨테이너(톰캣) 위에서 동작하는 자바 프로그램
- 확장자가 .java인 자바 클래스 형태

서블릿의 기본틀

```java
package com.servlet.exam;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/HelloWorld")
public class HelloWorld extends HttpServlet {
  private static final long serialVersionUID = 1L;

  public HelloWorld() {
    super();
  }

  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // HTML을 출력하는 코드
    response.getWriter().append("Served at: ").append(request.getContextPath());
  }

  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    doGet(request, response);
  }
}
```

- 모든 서블릿은 **HttpServlet 클래스를 상속받아야 한다.**
- `WebServlet annotation`
  - 어떤 요청이 들어왔을 때 이 서블릿이 실행될지를 알려준다.
  - 다음과 같은 URL이 실행된다.
  - 단, WebServlet에 `"/"`를 지정했을 때는 이 웹 애플리케이션에 대한 **모든 요청**을 이 서블릿이 받아 처리하게 된다.

<br />

서블릿에서 HTML 출력을 하는 코드 패턴

```java
response.setContentType("text/html; charset=utf-8");
PrintWriter out = response.getWriter();
out.println("<html>");
out.println("<head>");
// 중략...
```

<br />

## MVC

- Model
  - 데이터, 그리고 그 데이터를 관리하고 처리하는 로직들의 묶음이다.
  - 컨트롤러는 사용자 요청을 받으면, 해당 요청을 처리할 코드를 Model 안에서 찾아 실행한다.
  - 이 코드는 요청 처리의 결과로 Controller에게 데이터를 반환할 수 있다.
- View
  - 사용자한테 보여질 출력 화면들의 묶음이다.
  - 화면에 표시되어야 하는 데이터는 Controller로부터 전달받는다.
- Controller
  - Model과 View의 상호작용을 관리한다.
  - 사용자의 요청을 받으면, 이를 처리할 코드를 Model에서 찾아 실행하고, 사용자에게 보여주어야 할 화면을 View에서 골라 실행한다.
  - 이때 Model이 반환한 데이터가 있으면, View에게 전달하여 그 데이터가 화면에 출력될 수 있도록 한다.

> 이렇게 소프트웨어를 3개의 구성 요소로 나누어 만들면, 데이터처리, 사용자가 보는 페이지, 그리고 이들에 대한 제어, 이 세 종류의 코드들이 각각의 구성 요소에 모여있게 됨 <br />
> 이것은 프로그램을 작성할 때나 유지 보수할 때 많은 장점이 있어서, 대규모의 비즈니스 애플리케이션을 만들 때는 MVC 패턴을 적용하는 것이 당연하게 여겨지고 있다.

<br />

컨트롤러의 기본 사용 예시

```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
  // URL에서 프로젝트 이름 뒷 부분의 문자열 얻어내기
	String uri = request.getRequestURI();
	String conPath = request.getContextPath();
	String com = uri.substring(conPath.length());
	String view = null;

	if (com.equals("/a") || com.equals("/")) {
		view = "a.jsp";
	} else if (com.equals("/b")) {
		view = "redirect:b.jsp";
	} else if (com.equals("/c")) {
		view = "redirect:c.jsp";
	} else if (com.equals("/d")) {
		view = "d.jsp";
	} else {
		response.getWriter().append("404 Not Found!");
	}

	// view가 redirect: 으로 시작하는지 검사해서 분기처리 startsWith() 메소드 사용
	if (view.startsWith("redirect:")) {
		response.sendRedirect(view.substring(9));
	} else {
		request.getRequestDispatcher(view).forward(request, response);
	}
}
```
