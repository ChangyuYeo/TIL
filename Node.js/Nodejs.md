# NodeJS에 대한 간단한 정리
NodeJS란? 
<br />
<img src="./img/Nodejs01.PNG" alt="NodeJS의 설명" style="margin:40px 0"> 
<br />
Chrome V8 Javascript 엔진으로 빌드된 Javascript 런타임이다.
<br /><br />

<h2>HTML</h2>
HTML은 웹페이지를 만들 때 사용하는 언어

```HTML
<div id="container">Hello World!</div>
```
<br />

<h2>JavaScript</h2>
그리고 HTML과 함께 사용하던 언어가 JavaScript 이다 
<br />
JavaScript는 웹페이지를 움직이게 만들 때 사용하는데

```javascript
document.getElementById('container').innerHTML = 'Hello javascript!';
```

보통 이런식으로 사용되며 HTML을 조작해서 내용을 바꾸거나 클릭하면 움직이게 만드는게 가능하다
<br /><br />

<h2>V8 자바스크립트 엔진</h2>
자바스크립트 해석엔진인 V8이라는 프로그램은 크롬브라우저의 자바스크립트 해석엔진이다. 
<br />
성능이 너무 뛰어난 나머지 V8엔진을 따로 출시하게 되는데 이것이 Node.js이다 
<br /><br />

<h2>NodeJS</h2>
간단하게 말해 자바스크립트를 브라우저 말고도 로컬 PC에서도 실행시켜줄 수 있는 런타임 이다
<br /><br />

# Node.js의 특징
Non-blocking I/O 라는 장점 때문에 많이들 사용한다 
<br />
(요청이 많거나 오래걸리는 요청이 있어도 멈추가나 요청 대기시간이 없음) 
<br />

## Node.js 장점
- 매우 빠른 고성능 서버
  - 비동기 처리를 이용하기 때문에 퍼포먼스가 증가한다
- 한가지 언어로 개발 할 수 있다
  - javascript를 이용해서 서버-클라이언트 모드를 개발할 수 있다
- 프론트엔드 개발자들도 서버 개발을 할 수 있다
  - 즉 하나의 어플리케이션을 혼자 개발 할 수 있다
- 많은 커뮤니티들이 활성화 되어 있다

## Node.js 단점
- 싱글스레드이기 때문에 하나의 작업 에서 시간이 많이 걸리면 전체 시스템의 성능이 낮아진다
- 코드의 자독성이 좋지않아 유지보수가 어렵다
- 컴파일시 에러확인이 불가능하다