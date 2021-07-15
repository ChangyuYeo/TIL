# HOC
### Higher-Order Components, 고차 컴포넌트
- 컴포넌트 로직을 `재사용, 재활용` 하기 위한 React의 고급 기술
- React API와는 전혀 관련이 없다
- 리액트의 구성적 특성에서 나오는 패턴
<br />

### HOC의 형식
> <컴포넌트>를 인자로 받아 <br />
<새로운 컴포넌트>를 리턴하는 `함수`

```javascript
HOC = function('컴포넌트') { return '새로운 컴포넌트'; }
```

컴포넌트는 props를 UI로 변환하는 반면에, 
고차 컴포넌트는 컴포넌트를 새로운 컴포넌트로 변환

> props -> `컴포넌트` -> UI <br />
컴포넌트 -> `HOC` -> 새로운 컴포넌트
<br />

### HOC의 예시
withRouter 함수를 사용 <br />
(보통 with가 붙은 함수가 HOC인 경우가 많다) 
<br />

```javascript 
import React from "react"
import { withRouter } from "react-router-dom"

const LoginButton = props => {
  console.log(props)
  function login() {
    setTimeout(() => {
      props.history.push("/")
    }, 1000)
  }
  return <button onClick={ login }>로그인 하기</button>
})

export default withRouter(LoginButton)
```
- withRouter는 Router가 아닌 컴포넌트에게 Router 특성을 부여한다.
- LoginButton컴포넌트를 인자로넣고 withRouter 함수를 실행해서 그결과를 export default를 한다.
- LoginButton은 props값을 사용할 수 있는 새로운 컴포넌트가 된다
<br />

### HOC 사용하는 법
#### 횡단 관심사(Cross-Cutting Concerns)
> 예를 들면 입금, 출금, 이체 등 하나의 기능 자체를 관심이라 표현하며, 이를 핵심관심사항 이라고 한다.<br />결국에는 어떤 일들을 비슷한 흐름으로 할 건데 어떤 시점에 비슷한 일을 하는 것들을 모아서 페이지별로 같은 일을 하는 시점 <br />즉 모든 핵심관심사항에 공통적으로 들어가는 코드가 `횡단 관심사`이라고 부른다

<img src="./img/Cross-Cutting Concerns.jpg">
-
-
-
-