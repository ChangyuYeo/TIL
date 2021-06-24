# 리액트 기본 개념 정리
리액트의 주요 기본 개념을 공부하고 정리..!
<br />
## 📌 Index <br />
1. [JSX 란?](#jsx_란?)
<br /><br />

# JSX 란?
보통의 JSX 문법은
```javascript
const element = <h1>Hello, world!</h1>
```
처럼 문자열도, HTML도 아닌 모양이다.
<br />
JSX는 자바스크립트의 확장한 문법이며, `React 엘리먼트`를 생성한다.
<br /><br />

## JSX 없는 React
React를 사용할 때 꼭 JSX 사용하지 않아도 코드를 작성할 수 있다. <br />
빌드 환경에서 따로 컴파일 설정을 하고 싶지 않을 때 JSX 없이 사용하는 게 편리할 수도 있다.
<br />
하지만 그럼에도 JSX 많은 장점들이 있어 JSX를 사용하는 것이 좋다.
<br /><br />

## JSX 표현식
JSX는 자바스크립트를 품고 있기 때문에 변수를 선언해 html 태그 안에 사용이 가능하다.

```javascript
const name = 'Jebong'
const element = <h1>Hello, {name}</h1>
```

위 처럼 JSX의 **중괄호** 안에는 자바스크립트의 표현식을 넣어서 사용할 수 있다.
<br />
JSX의 가독성을 좋게 하기 위해 여러 줄로 나누고, 자동으로 세미콜론 삽입을 피하기 위해 괄호로 묶어준다.
<br /><br />

## JSX attribute
- JSX는 HTML보다 Javascript에 더 가깝기 때문에, HMTL의 속성 이름을 `카멜케이스`로 작성하여 사용해야 된다.
- 자바스크립트에서 예약어로 사용되는 속성명들을 조심해야 하는데,
- class는 `className`, for 은 `htmlFor`로 사용하면 된다.
- 또한 속성은 항상 쌍따옴표를 감싸야 하며,
- 태그는 항상 닫혀있어야 된다. 즉, 반드시 `클로징 태그`를 사용해야 된다.
<br /><br />
