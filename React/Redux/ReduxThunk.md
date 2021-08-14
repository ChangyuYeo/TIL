# ReduxThunk

- redux-thunk 는 리덕스의 미들웨어 라이브러리 이다.
- 리덕스를 만든 사람이 만들었으며,
- 리덕스에서 `비동기 처리`를 위한 라이브러리 이다.
- **액션 생성자를 활용**하여 비동기 처리를 하며,
- 액션 생성자가 단순히 액션 객체를 리턴하지 않고, **함수를 리턴 (dispatch)**할 수 있다.

```
npm i redux-thunk
```

미들웨어 설정 (store.js)

```javascript
import { applyMiddleware, createStore } from "redux";
import todoApp from "redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// redux-devtools 을 사용하기 위해 composeWithDevTools 라이브러리 사용
const store = createStore(todoApp, composeWithDevTools(applyMiddleware(thunk)));

export default store;
```

리덕스의 미들웨어는 함수이기 때문에 `redux-thunk`로 부터 미들웨어 함수를 import 하여
applyMiddleware() 함수 안으로 넣어주면 된다.
<br />

redux-thunk 사용 예시 (actions/users.js)

```javascript
import axios from "axios";
import { GET_USERS_FAIL, GET_USERS_START, GET_USERS_SUCCESS } from "redux/type";

// 데이터 요청 시작을 알리는 액션
function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}

// 데이터 요청 성공 시 데이터를 저장하는 액션
function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
}

// 데이터 요청 실패 시 error를 반환하는 액션
function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}

// redux-thunk를 이용해 함수를 dispatch
function getUsersThunk() {
  // async/await를 사용해도 상관이 없다.
  return async (dispatch) => {
    try {
      dispatch(getUsersStart());
      const { data } = await axios.get(`https://api.github.com/users`);
      dispatch(getUsersSuccess(data));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
}

export { getUsersThunk };
```
