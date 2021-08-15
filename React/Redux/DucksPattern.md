# Ducks Pattern

Ducks Pattern 은 리덕스를 더욱 효과적으로 사용하기 위한 패턴이다. <br />
`actionTypes, actions, reducer`를 한 곳으로 모아 하나의 모듈로 관리하는 것이 Ducks Pattern의 핵심

- [참고 문서](https://github.com/JisuPark/ducks-modular-redux)

## Ducks Pattern의 규칙

Ducks Pattern은 4가지 규칙을 따른다.

1. 항상 `reducer()`란 함수를 `export default` 를 해야한다.
2. 항상 모듈의 action 생성자들을 `함수형태로 export` 해야한다.
3. 항상 npm-module-or-app/reducer/ACTION_TYPE 형태의 action 타입을 가져야 한다.
   - type이 다른 액션의 type과 겹치지 않게하는 네임스페이스 작업
4. 어쩌면 action 타입들을 UPPER_SNAKE_CASE로 export 할 수 있다.
   - 외부 reducer가 해당 action들이 발생하는지 계속 기다리거나, 재사용할 수 있는 라이브러리로 퍼블리싱할 경우

<br />

정리하자면

1. 모듈은 리듀서 하나를 의미한다.
2. 액션을 따로 분리하지 않고 모듈안에서 관리하게 된다.
3. 모듈들을 모아서 대표되는 `root reducer`를 생성하고
4. root reducer 를 가지고 **create해서 store를 만들게 된다.**

```
src/redux
-create.js

src/redux/modules
-module1.js
-module2.js
...
-reducer.js (or index.js)

```

## Ducks Pattern 적용 예시

modules/todos.js

```javascript
// 액션 타입 정의
// npm-module-or-app/reducer/ACTION_TYPE 형태의 액션 타입
const ADD_TODO = 'react-redux-tutorial/todos/ADD_TODO'
const COMPLETE_TODO = 'react-redux-tutorial/todos/COMPLETE_TODO'

// 액션 생성 함수
export function addTodo(content) {
	return {
		type: ADD_TODO,
		content
	}
}

export function completeTodo(index) {
	return {
		type: ADD_TODO,
		index
	}
}

// 초기값
const initialStateState = []

// 리듀서
// export default function reducer
export default function reducer(state = initialStateState, action) {
	if (action.type === ADD_TODO) {
		return [
			...state,
			{ id: Math.random(), content: action.content, done: false }
		]
	}
	if (action.type === COMPLETE_TODO) {
		return state.map((todo, index) => {
			if (index === action.index) {
				return { ...todo, done: true }
			}
			return todo
		})
	}
	return state
}
```
