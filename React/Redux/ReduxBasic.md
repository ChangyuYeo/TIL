# 리덕스 (Redux)

## 액션 (Action)

- 리덕스에서의 액션은 `객체(Object)` 이다.
- 두 가지 형태가 있는데

```javascript
{ type: 'TEST' } // payload가 없는 액션
{ type: 'TEST', params: 'hello' } // payload가 있는 액션
```

- type은 필수 프로퍼티이며, type은 보통 문자열로 전달해준다.
- 액션은 스토어에 전달이 되면 스토어에 있는 상태를 변경하는 용도로 사용이 된다.

<br />

### 액션 생성자 (Action Creator)

- 액션을 생성하는 함수를 `액션 생성자 (Action Creator)` 라고 하는데,
- 함수를 통해 액션을 생성해서, **액션 객체를 리턴**해 준다.

```javascript
createTest("test"); // { type: 'TEST', params: 'test' } 가 리턴된다.
```

<br />

### 액션의 역할?

- 액션 생성자를 통해 만들어진 액션은 리덕스 스토어에 보내지게 된다.
- 리덕스 스토어가 액션 객체를 받으면 **스토어의 상태 값이 변경** 되는데
- 변경된 상태 값에 의해 `상태를 이용하고 있는 컴포넌트가 변경` 하게 된다.
- 액션은 스토어에 보내는 **일종에 input** 이라 생각하면 된다.

<br />

### 액션을 만들 떄?

- 액션의 타입을 정의하여 변수로 빼기
  필수는 아니지만 타입을 문자열로 하게되면 실수를 유발할 가능성이 크기 때문에 <br />
  미리 정의한 변수를 사용해 편리하게 사용이 가능해 진다.

- 액션 객체를 만들어 내는 함수를 만들 떄
  하나의 액션 객체를 만들기 위해 하나의 함수를 만들어내고, <br />
  액션의 타입은 **미리 정의한 타입 변수**로 부터 가져와서 사용하면 된다.

간단한 사용 예시

```javascript
// 액션의 타입을 상수화
const ADD_TODO = "ADD_TODO";

// todo를 받아서 state를 갱신
function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

export { ADD_TODO, addTodo };
```

<br />

## 리듀서 (Reducers)

- 액션을 주면 그 액션이 적용되어 달라지거나 달라지지 않는 결과를 만들어주는 `함수`
- 리듀서는 함수이며 `Pure Function` 이다.
- 리듀서는 `Immutable` 해야 하는데, 리듀서를 통해 state 가 달라졌음을 리덕스가 인지할 수 있기 때문이다.

```javascript
function reducers(previousState, action) {
  return newState;
}
```

- 액션을 받아 state를 리턴하는 구조
- 인자로 들어오는 previousState 와 리턴되는 newState 는 `다른 참조를 가지도록 해야된다.`

> previousState.push() 같은 객체의 레퍼런스가 변경되지 않는 코드는 <br />
> 리덕스가 인지하지 못하기 때문에 사용하면 안됀다.

사용 예시

```javascript
import { ADD_TODO } from "redux/actions";

const todo = [];

// state의 초기값 설정
function todoApp(previousState = todo, action) {
  // type이 ADD_TODO 라면? state 배열에 아이템 추가
  if (action.type === ADD_TODO) {
    return [...previousState, action.todo];
  }
  return previousState;
}

export { todoApp };
```

<br />

## createStore

- 리덕스의 함수이며, 스토어를 만드는 함수이다.
- 스토어를 만들게 되면, 스토어안에 있는 상태와 상태를 변경하는 액션을 <br />
  보내서 각종 상태를 관리를 할 수 있게 된다.

```typescript
// createStore의 함수는 총 3개의 인자를 받는다.
createStore<S>(reducer: Reducer<S>, preloadedState: S, enhancer?: StoreEnhancer<S>): Store<S>
```

<br />

사용 예시

```javascript
import { createStore } from "redux";
import { todoApp } from "redux/reducers";

// createStore 의 첫번째 인자값으로 만들어둔 리듀서가 들어간다.
const store = createStore(todoApp);

export default store;
```

index.js 에서 store 를 console.log로 출력해보면?

```javascript
{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}
// 또한 store.getState() 를 console.log 로 출력해보면
[]  // console.log(store.getState())
// 빈 배열이 출력하게 되는데 이것은 리듀서에서 초기값을 설정한 state가 출력되는 것이다.
```

이런 결과가 나타난다.

### store 함수

| 함수                                          | 설명                                                     |
| --------------------------------------------- | -------------------------------------------------------- |
| store.getState()                              | 현재 스토어에 state를 가져온다.                          |
| store.dispatch(액션 또는 액션생성자())        | 액션을 인자로 넣어서 스토어에 state를 변경한다.          |
| const unsubscribe = store.subscribe(() => {}) | unsubscribe 을 리턴하며, unsubscribe() 실행 시 구독 제거 |

총 정리 (index.js)

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import store from "redux/store";
import { addTodo } from "redux/actions";

// 스토어에 변경사항을 구독한다
// 스토어에 상태가 바뀌면 안에 함수가 실행하게 된다.
const unsubscribe = store.subscribe(() => {
  console.log(store.getState()); // store에 저장된 값들이 결과가 출력된다.
});

// dispatch 를 이용해서 액션을 스토어에 보내기
store.dispatch(addTodo("잠자기"));
store.dispatch(addTodo("일어나기"));
store.dispatch(addTodo("밥먹기"));
// unsubscribe() 이후로는 콘솔에 출력이 되지 않지만, 실제 state에는 저장이 된다.
unsubscribe();
store.dispatch(addTodo("또 잠자기"));
store.dispatch(addTodo("또 일어나기"));
store.dispatch(addTodo("또 밥먹기"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```
