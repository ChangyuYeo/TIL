# 리덕스 미들웨어 (Redux middleware)

- 리덕스 미들웨어는 `dispatch`의 앞뒤에 코드를 추가할 수 있게 해준다.
- 미들웨어가 여러개면 미들웨어가 설정된 `순서대로` 실행하게 된다.
- 미들웨어는 두 부분으로 나뉘는데
  - 스토어를 만들 때, 미들웨어를 설정하는 부분
  - dispatch 가 호출될 때 실제로 미들웨어를 통과하는 부분
- dispatch 메소드를 통해 store로 가고 있는 액션을 가로채는 코드

<br />

store.js

```javascript
import { applyMiddleware, createStore } from "redux";
import todoApp from "redux/reducers";

function middleware1(store) {
  console.log("middleware1", 0);
  // next => 현재 미들웨어가 아닌 다음 미들웨어를 가리킴
  return (next) => {
    console.log("middleware1", 1);
    return (actions) => {
      console.log("middleware1", 2);
      const returnValue = next(actions);
      console.log("middleware1", 3);
      return returnValue;
    };
  };
}

/**
 * createStore에 두번째 인자로 applyMiddleware 함수를
 * 호출해 미들웨어를 순서대로 넣으면 된다.
 */
const store = createStore(todoApp, applyMiddleware(middleware1));

export default store;
```

실행결과

```
middleware1 0
middleware1 1
middleware1 2
middleware1 3
middleware1 2
middleware1 3
```

결과를 보면 **action이 dispatch 될 때 마다 2와 3이 콘솔에 계속 출력**되는 것을 볼 수 있다.
<br />

여러개에 미들웨어를 사용 한다면?

```javascript
function middleware1(store) {
  console.log("middleware1", 0);
  return (next) => {
    // 콘솔에 next 까지 출력해본다.
    console.log("middleware1", 1, next);
    return (actions) => {
      console.log("middleware1", 2);
      const returnValue = next(actions);
      console.log("middleware1", 3);
      return returnValue;
    };
  };
}

// middleware2 를 추가
function middleware2(store) {
  console.log("middleware2", 0);
  return (next) => {
    console.log("middleware2", 1, next);
    return (actions) => {
      console.log("middleware2", 2);
      const returnValue = next(actions);
      console.log("middleware2", 3);
      return returnValue;
    };
  };
}

// middleware1, middleware2를 넣어준다.
const store = createStore(todoApp, applyMiddleware(middleware1, middleware2));
```

실행결과

```javascript
middleware1 0
middleware2 0
// next 가 작용하여 middleware2 가 먼저 실행되었다.
middleware2 1 ƒ dispatch(action) {/* 길어서 생략 */}
middleware1 1 actions => {
      // middleware1의 리턴 값이 출력되는 것을 볼 수 있다.
      console.log('middleware2', 2);
      const returnValue = next(actions);
      console.log('middleware2', 3);
      return returnValue;
    }
middleware2 2
middleware2 3
middleware1 3
middleware1 2
middleware2 2
middleware2 3
middleware1 3
```

콘솔창에서 next에 출력 결과를 보면 dispatch가 되는 함수가 출력되는 것을 볼 수 있는데, <br />
내용을 자세하게 보면 middleware 안에 return 을 해준 함수들이 있는 것을 볼 수 있다.
