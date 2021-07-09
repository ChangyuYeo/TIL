# 리액트 기본 개념 정리
리액트의 주요 기본 개념을 공식문서를 통해 공부하고 정리..!
<br />
## 📌 Index <br />
1. [JSX](#jsx)
1. [Component](#Component)
1. [Props](#props)
1. [State](#State)
1. [LifeCycle](#LifeCycle)
1. [Event](#Event)
<br />

# JSX
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

---
<br />

# Component
Component를 통해 UI를 **재사용이 가능한** 각각의 조각으로 나누고, 각 조각을 개별적으로 사용할 수 있다.
<br />

컴포넌트는 함수를 만들어 정의할 수 있다.
```javascript
function MyName(props) {
  return <h1>Hello, {props.name}</h1>
}
```
React 엘리먼트는 사용자 정의 컴포넌트로도 표현할 수 있다.

```javascript
const element = <MyComponent name="jebong" />
```

## 컴포넌트 사용시 주의점
Raact는 소문자로 시작하는 컴포넌트를 DOM 태그로 처리하기 때문에,
<br />
`<MyComponent />` 형식으로 컴포넌트를 나타내야 한다.
<br /><br />

---
<br />

# Props
`Props`는 부모 컴포넌트가 자식 컴포넌트에 값을 전달할 때 사용되는 객체이며  **읽기 전용** 이다.

> 입력 값을 바꾸려 하지 않고 항상 동일한 입력값에 대해 동일한 결과를 반환하는 함수를 `순수 함수`라고 하는데, <br />
> 모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 `순수 함수`처럼 동작해야 한다.
<br />

Props 사용 예시

```javascript
import React from 'react'

// 자식 컴포넌트 Props를 받아 이름을 출력하는 중
const Props = ({ name }) => {
	return <div>이름: {name}</div>
}

// 부모 컴포넌트 자식 컴포넌트에게 Props를 전달한다.
const App = () => <Props name="Jebong" />

export default App
```
<br />

---
<br />

# State
- `State`는 `Props` 처럼 렌더링 결과물에 영향을 주는 데이터들을 가지고 있는 객체이다.
- Props는 컴포넌트에 전달되는 반면, State는 변수처럼 컴포넌트 안에서 관리하는 차이점이 있다.

## State 사용시 주의점
1. 직접 state를 수정하면 안된다.
    - 직접 state의 값을 수정할 수 있지만, 컴포넌트를 다시 랜더링 하지 않기 때문이다. 
    - 대신 `setState()` 메소드를 사용해서 수정한다.

2. state의 업데이트는 `비동기적`일 수도 있다.

3. state의 업데이트는 `병합`이 된다.
    - `setState()`를 호출할 때 react는 제공한 객체를 현재 state로 병합하게 된다.
    - 별도의 `setState()`를 호출하면 변수를 독립적으로 관리할 수 있게 된다.

4. state의 **데이터는 아래로 흐른다.**
    - state는 `로컬 또는 캡슐화` 라고 불리는데, state를 관리하고 있는 컴포넌트 <br />
    이외에는 **어떠한 컴포넌트에도 접근할 수 없다.**
    - 컴포넌트는 자신의 state를 자식 컴포넌트에게 props로 전달 해 줄수 있는데, <br /> 
    이를 `하향식(top-down)` 또는 `단방향식 데이터 흐름` 이라고 한다.
    - 오직 자신의 아래에 있는 컴포넌트에만 영향을 미친다.
<br />

state를 이용해 시간을 보여주는 예제
```javascript
import React, { useEffect, useState } from 'react'

function Clock() {
	const [date, setDate] = useState(new Date())

	const tick = () => {
		setDate(new Date())
	}

	useEffect(() => {
		const interval = setInterval(() => {
			tick()
		}, 1000)
		return () => clearInterval(interval)
	}, [date])

	return <h2>{date.toLocaleTimeString()}</h2>
}

export default Clock
```
<br />

---
<br />

# LifeCycle
React 컴포넌트에는 생명주기가 있으며, 특정 시점에서 코드를 실행할 수 있다.
<br />

## componentDidMount()
- 컴포넌트가 마운트 된 직후에 호출된다.
- 마운트는 컴포넌트의 인스턴스가 생성되어 DOM의 부착되는시점을 말한다.
- DOM 노드가 있어야 하는 초기화 작업시 사용하게 된다.
- 또한 외부에서 네트워크 요청을 통해 데이터를 불러오는경우에도 사용된다.
<br />

## componentDidUpdate()
- 컴포넌트가 업데이트 된 직후에 호출된다. (최초 랜더링시에는 호출되지 않는다.)
- 컴포넌트가 업데이트 되었을 때 DOM을 조작하거나 props를 비교해서 해당 요청을 보내는 작업시 사용하게 된다.
<br />

## componentWillUnmount()
- 마운트가 해제되어 제거되기 직전에 호출된다.
- 타이머 제거, 네트워크 요청 취소, 마운트에서 연결된 데이터 해제할 때 사용된다.
- 컴포넌트가 마운트 해제 되고 나면 다시 마운트가 되지 않기 때문에 `Unmount 내에서는 setState()를 호출하면 안된다.`
<br />

실제 호출 시점 출력해보기
```javascript
import React, { Component } from 'react'

export default class LifeCycle extends Component {
	constructor(props) {
		super(props)
		console.log('constructor')
		this.state = { date: new Date() }
	}

	componentDidMount() {
		console.log('componentDidMount')
		this.timerID = setInterval(() => this.tick(), 1000)
	}

	componentDidUpdate() {
		console.log('componentDidUpdate')
	}

	componentWillUnmount() {
		console.log('componentWillUnmount')
		clearInterval(this.timerID)
	}

	tick() {
		console.log('tick')
		this.setState({ date: new Date() })
	}

	render() {
		console.log('render')
		return <h2>{this.state.date.toLocaleTimeString()}</h2>
	}
}
```
<br /><br />

---
<br />

# Event
React 엘리먼트는 `합성 이벤트(SynthenticEvent)`를 이용해서 이벤트로 처리할 수 있다.
<br />
React에서 Event를 작성하는 몇가지 규칙이있는데,
- 소문자가 아닌 카멜케이스로 작성한다.
- 문자열이 아닌 함수로 전달한다.

```javascript
// 기존 HTML
<div onclick="onClickBtn()">Button</div>

// React
return <div onClick={onClickBtn}>Button</div>
```
<br />

기존 HTML과 또 다른 차이점은 기본 동작을 방지 하는 법이 다른데 React 에서는 `preventDefault`를 사용해야 된다. 
<br />

## 이벤트의 This
전달된 이벤트에서 This를 호출한 경우의 This는 Undefined가 되는데, 
<br />
JavaScript에서 클래스 메서드는 기본적으로 바인딩되어 있지 않기 때문이다.
<br />

## 이벤트 버블링
이벤트 헨틀러는 이벤트 버블링 단계에서 호출이 되는데, 
<br />
캡처 단게에서 이벤트를 등록하고 싶다면 이벤트 이름에 `Captrue`를 붙히면 된다.
<br />
(이벤트는 캡처링 후에 버블링이 일어난다.)
<br />

```javascript
import React from 'react'

function Event() {
	const onClickBtn = e => {
		console.log('onClickBtn')
	}

	const onClickCaptureBtn = () => {
		console.log('onClickCaptureBtn')
	}

	const onClickCaptureBtn2 = () => {
		console.log('onClickCaptureBtn2')
	}

	const onClickBubble = () => {
		console.log('onClickBubble')
	}

	return (
		<div onClickCapture={onClickCaptureBtn}>
			{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
			<div onClickCapture={onClickCaptureBtn2} onClick={onClickBubble}>
				<button onClick={onClickBtn} type="button">
					버튼
				</button>
			</div>
		</div>
	)
}

export default Event
```