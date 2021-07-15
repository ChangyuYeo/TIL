# HOC
### Higher-Order Components, 고차 컴포넌트
- 컴포넌트 로직을 `재사용, 재활용` 하기 위한 React의 고급 기술
- React API와는 전혀 관련이 없다
- 리액트의 구성적 특성에서 나오는 패턴
<br />

### HOC의 형식
<컴포넌트>를 인자로 받아 <새로운 컴포넌트>를 리턴하는 `함수`

```javascript
HOC = function('컴포넌트') { return '새로운 컴포넌트'; }
```
<br />

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
#### `Cross-Cutting Concerns` 에 고차 컴포넌트 사용하기

횡단 관심사(Cross-Cutting Concerns) 란?
> 예를 들면 입금, 출금, 이체 등 하나의 기능 자체를 관심이라 표현하며, 이를 핵심관심사항 이라고 한다.<br />결국에는 어떤 일들을 비슷한 흐름으로 할 건데 어떤 시점에 비슷한 일을 하는 것들을 모아서 페이지별로 같은 일을 하는 시점 <br />즉 모든 핵심관심사항에 공통적으로 들어가는 코드가 `횡단 관심사`이라고 부른다

<p align="center">
  <img width="80%" style="margin:30px 0" src="./img/Cross-Cutting Concerns.jpg" alt="횡단 관심사 필기">
</p>

#### 1. Original Component를 변경하지 말자
- HOC에 인자로 들어가는 컴포넌트를 변경하지 않는다
- 상속대신 `Composition`을 사용한다

Composition?
> Original Component를 받아서 여러컴포넌트에 조합처럼 컴포넌트를 놓고 통채 컴포넌트를 리턴하는 방식
<br />

#### 2. Pass unrelated Props(래핑된 컴포넌트를 통해 관련없는 Props 전달)
HOC 는 component 에 기능을 추가하는데 그 `contract` 를 변경해서는 안 된다. <br />
HOC 로부터 반환되는 component 는 wrapped component 와 비슷한 인터페이스를 가지고 있어야 한다.

- 고차 컴포넌트는 정의(contract)를 변경해서는 안된다.
- 고차 컴포넌트에서 반환된 컴포넌트는 래핑된 컴포넌트와 비슷한 인터페이스가 있어야함
- 고차 컴포넌트는 특정 관심사와 관련이 없는 props를 활용해야 한다.
<br />

#### 3. Maximizing Composability (조합 가능성 최대화 하기)
어떤 구성품안에 조합처럼 넣는 행동을 최대화 하기 <br />
일반적으로 고차 컴포넌트는 추가 인수를 허용한다
<br />

#### 4. Easy Debugging을 위한 디스플레이 네임 작성
- 디버깅을 쉽게 하려면 HOC의 결과임을 알리는 디스플레이 네임을 작성해야 된다
- 가장 일반적인 방법은 HOC의 이름으로 내부 컴포넌트명을 감싸는 방법이 있다 
- HOC의 이름이 withRouter이고, HOC 내부의 컴포넌트의 이름이 LoginButton 인 경우, 디스플레이 네임은 withRouter(LoginButton)을 사용하면 된다
<br />

### HOC 주의할 점
- 고차 컴포넌트를 사용할 때 render Method 에서 사용하면 안된다
- Static Methods는 반드시 따로 복사해서 넣는다
- Refs는 전달되지 않는다 (`React.forwardRef` 라는 기능을 사용하면 해결된다)