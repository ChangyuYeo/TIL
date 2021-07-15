# 제어 컴포넌트 (Controlled Component)
<b>상태를 가지고 있는 엘리먼트 에서 엘리먼트</b>는 일반적으로 사용자의 입력을 기반으로 자신의 state를 관리하고 업데이트한다 <br />
React에서는 변경할 수 있는 state가 일반적으로 컴포넌트의 state 속성에 유지되며 setState()에 의해 업데이트된다 <br />

우리는 React state를 `single source of truth`로 만들어 두 요소를 결합할 수 있어 폼을 렌더링하는 React 컴포넌트는 <br />
폼에 발생하는 사용자 입력값을 제어한다 <br />
이러한 방식으로 React에 의해 값이 제어되는 입력 폼 엘리먼트를 `Controlled Component` 라고 한다.

<br />

## 상태를 가지고 있는 엘리먼트
- input
- select
- textarea
- ...
<br />

## 엘리먼트의 '상태'를 누가 관리하느냐에 따라서
- 엘리먼트를 가지고 있는 컴포넌트가 관리 `Controlled`
- 엘리먼트의 상태를 관리하지 않고, 엘리먼트의 참조만 컴포넌트가 소유 `Uncontrolled`
<br />

## Controlled Component 예시
ControlledComponent.jsx
```javascript
import React from 'react'

// state의 value 값과 input의 value이 완벽하게 같다
class ControlledComponent extends React.Component {
  state = {
    value: ""
  }
  render() {
    const { value } = this.state
    return (
      <div>
        <input value={ value } onChange={ this.change } />
        <button onClick={ this.click }>전송</button>
      </div>
    )
  }

  change = e => {
    console.log(e.target.value)
    this.setState({ value: e.target.value })
  }

  // 엘리먼트의 value값과 똑같은 결과가 나온다
  click = () => console.log(this.state.value)
}

export default ControlledComponent
```

- 제어 컴포넌트를 사용하면, input의 값은 항상 React state에 의해 결정된다 
- 코드를 조금 더 작성해야 한다는 의미이지만, 
- 다른 UI 엘리먼트에 input의 값을 전달하거나 다른 이벤트 핸들러에서 값을 재설정할 수 있다
<br />

# 비제어 컴포넌트 (UnControlled Component)
HTML의 태그 중에서는 태그 자체적으로 상태를 갖는 경우가 있는데 <br />
입력 폼에서 값을 입력하면 해당 값은 입력 폼 내부의 상태로 관리된다.
<br />

## UnControlled Component 예시
UnControlledComponent.jsx
```javascript
import React from 'react'

class UnControlledComponents extends React.Component {
  render() {
    return (
      <div>
        <input id="my-input" />
        <button onClick={ this.click }>전송</button>
      </div>
    )
  }

  click = () => {
    // input 엘리먼트의 현재 상태 값 (value) 를 꺼내서 전송한다
    const input = document.querySelector("#my-input")
    console.log(input.value)
  }
}

export default UnControlledComponents
```
위에 방법은 가상 DOM이 아닌 실제 DOM을 사용하기 때문에 React에서는 지양한다 <br />
여기서 Reference 라는 기술을 이용한 방식을 써보면

UnControlledComponent.jsx 수정
```javascript
import React from 'react'

class UnControlledComponents extends React.Component {
  // input 엘리먼트을 보관하고 있을 Reference 생성
  // 최초에 inputRef가 createRef로 생겨났을때는 {current: null} 인 모습일 것이다
  inputRef = React.createRef()

  render() {
    return (
      <div>
        <input ref={ this.inputRef } />
        <button onClick={ this.click }>전송</button>
      </div>
    )
  }

  // 한번이라도 랜더가 된 후에 inputRef의 상태는 {current: input} 이다
  // 이때 input은 실제 input이다
  componentDidMount() {
    console.log("componentDidMount", this.inputRef)
  }

  click = () => console.log(this.inputRef.current.value)
}

export default UnControlledComponents
```

위 코드를 보면 useState 등 컴포넌트 단위의 상태를 활용하지 않고도 태그의 참조(ref)를 활용해 입력 폼의 상태에 접근할 수 있다.  <br />
다만 컴포넌트의 상태가 변해야 재렌더링을 수행하는 리액트는 이를 인식하지 못해 <span style="color:crimson">데이터와 UI의 동기가 이루어지지 않게 된다</span>
