# React Router
### react-router-dom
SPA 라우팅 과정
1. 브라우저에서 최초에 '/' 경로로 요청
2. React Web App 을 받음
3. 받은 React App 에서 '/' 경로에 맞는 컴포넌트 랜더링
4. React App 에서 다른 페이지로 이동하는 동작 수행
5. 새로운 경로에 맞는 컴포넌트 랜더링
<br />

이러한 과정은 REACT ROUTER 라이브러리가 처리한다.
<br />

App.js
```javascript
import { BrowserRouter, Route } from 'react-router-dom';

// BrowserRouter 사이에 Route를 나열해서 사용한다
// Route 컴포넌트에 경로 와 컴포넌트를 설정한다

function App() {
  return (
    <BrowserRouter>
      <Route path="경로" component={컴포넌트} />
    </BrowserRouter>
  )
}
```

### exact 속성
exact는 이하 경로를 중복 출력하지 않도록한다.
 
 ```javascript
function App() {
  return (
    <BrowserRouter>
      <Route path="경로" exact component={컴포넌트} />
    </BrowserRouter>
  )
}
 ```
<br />

# Dynanic Router
Router의 경로에 특정 값을 넣어 해당 페이지로 이동할 수 있게 하는 것을 말한다. 
<br />

App.js
```javascript
function App() {
  return (
    <BrowserRouter>
      <Route path="/page" exact component={Page} />
      <Route path="/page/:id" component={Page} />
    </BrowserRouter>
  )
}
```
<br />

Page.jsx
```javascript
export default function Profile(props) {
  // Router에 연결된 경우에는 history, location, match 3가지의 props를 받는다
  const id = props.match.params.id
  // id의 값과 id의 타입이 String인 것을 확인할 수 있다.
  console.log(id, typeof id)
  return (
    <div>
      <h1>새로운 Page 입니다!</h1>
      { id && <p>id 는 { id } 입니다</p> }
    </div>
  )
}
 ```
<br />

### Query string 형식으로 받기
query-string 이라는 패키지를 이용해 값을 얻을 수 있다 <br />

App.js
```javascript
function App() {
  return (
    <BrowserRouter>
      <Route path="/query" exact component={Query} />
    </BrowserRouter>
  )
}
``` 
<br />

Query.jsx
```javascript
import queryString from 'query-string'
// query-string 을 이용해서 쿼리스트링 값 사용

export default function Query(props) {
  // props.location.search => ?부터 정보를 가지고 있다
  const searchParams = props.location.search
  // queryString을 이용해서 파싱해 객체를 얻는다
  const query = queryString.parse(searchParams)
  return (
    <div>
      { query.name && <p>name 은 { query.name } 입니다!</p> }
    </div>
  )
}
```

예시로 localhost:3000/query?name=changyu 로 들어가게되면 query.name의 값인 changyu를 출력할 수 있다.
<br />

# Switch
- 여러 Route 중 순서대로 먼저 맞는 하나만 보여줌
- exact 를 뺄 수 있는 로직을 만들 수 있음
- 존재하지 않는 path가 있으면 보여지는 컴포넌트를 설정해서 "Not Found" 페이지를 만들 수 있음

App.js
```javascript
function App() {
  return (
    <BrowserRouter>
      <Swich>
        <Route path="/page/:id" component={Page} />
        <Route path="/page" component={Page} />
        <Route path="/query" component={Query} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Swich>
    </BrowserRouter>
  )
}
``` 

- 가장 넓은 범위를 아래로 위치하게한다.
- 단, 가장 마지막 루트경로에는 exact를 설정해준다.
- NotFound는 제일 밑에 위치, path를 지정하지 않고 NotFound를 처리하는 컴포넌트를 설정해준다.
<br />

# Link 컴포넌트
- 리액트 내부에서 이동할 때 a 태그를 이용해서 다른 페이지로 이동하게 되면 **페이지 전체**가 <br /> 새로 만들어지는 문제가 발생한다. <br />
- 이러한 문제점을 해결하기위해 react-router-dom 에서 제공하고있는 Link 컴포넌트를 사용하면 된다
<br />

a 태그 

    페이지를 전환하는 과정에서 페이지를 새로 불러오기 때문에 애플리케이션이 들고 있던 상태들을 모두 날려버리게 됨

    렌더링된 컴포넌트들도 모두 사라지고 다시 처음부터 렌더링


Link 컴포넌트

    페이지를 전환하면, 페이지를 새로 불러오지 않고 애플리케이션은 그대로유지한 상태에서 
    HTML5 History API를 사용하여 페이지의 주소만 변경

    Link 컴포넌트 자체는 a 태그로 이루어져 있지만, 페이지 전환을 방지하는 기능이 내장

    Link 컴포넌트는 porps로 to를 사용해서 경로를 지정해준다
<br />

# NavLink 컴포넌트
- react-router-dom 에서 제공하는 컴포넌트
- Link와 다르게 active를 가지고 있다
- activeClassName, activeStyle 처럼 active 상태에 대한 스타일 지정이 가능하다
- Route 의 path 처럼 동작하기 때문에 **exact**를 설정해야된다
<br />

Link와 비슷히지만 해당 nav가 활성화될 경우 styling 가능
``` javascript
<NavLink to="/about">About</NavLink> 
```
<br />

page가 활성화될 경우 추가될 className 지정
``` javascript
<NavLink to="/about" activeClassName="active">
  about
</NavLink>
```
<br />

page가 활성화 될 경우 스타일 적용
``` javascript
<NavLink
  to="/about"
  activeStyle={{
    color: "royablue"
  }}
>
About
</NavLink>
```
<br />

isActive를 이용해 Link가 active되는 추가 조건을 설정
``` javascript
<NavLink 
  to="/about?name=changyu"
  activeStyle={{
    color: "royablue"
  }} 
  isActive={(match, location) => {
    return match !== null && location.search === "?name=changyu"
  }}
>
About?name=changyu
</NavLink>
```
<br />

# history 객체
- history 객체는 Router로 사용된 컴포넌트에게 match, location 과 함께 전달되는 props 중 하나

- 리액트에서 페이지를 이동할 수 있는 이유는 react-router-dom을 이용하여 페이지의 기록을 알 수 있기 때문이다.

- history 객체를 통하여, 우리가 컴포넌트 내에 구현하는 메소드에서 라우터에 직접 접근을 할 수 있다

- history 객체를 콘솔로 찍어보면 goBack(), goForward() 등 앞/뒤로 이동할 수 있는 메소드 뿐만 아니라 다양한 메소드와 관련 객체들이 존재한다.
<br />

Login.jsx
```javascript 
export default function Login(props) {
  function login() {
    setTimeout(() => {
      props.history.push("/") // 1초 뒤에 메인 페이지로 이동
    }, 1000)
  }
  return <button onClick={login}>로그인 하기</button>
})
```
<br />

# withRouter
라우트가 아닌 컴포넌트에서 라우터에서 사용하는 객체 - location, match, history 를 사용하려면, withRouter 라는 **HoC** 를 사용해야한다

LoginButton.jsx
```javascript 
import { withRouter } from "react-router-dom"

// Router가 아닌 컴포넌트이기 때문에 props객체에는 아무것도 없는 상태
// 작성한 컴포넌트를 withRouter 인자에 넣고 실행된 결과를 사용
export default withRouter(function LoginButton(props) {
  function login() {
    setTimeout(() => {
      props.history.push("/")
    }, 1000)
  }
  return <button onClick={login}>로그인 하기</button>
})
```

Login.jsx
```javascript 
import LoginButton from "../components/LoginButton"

export default function Login() {
  return (
    <div>
      <h2>Login 페이지 입니다.</h2>
      <LoginButton />
    </div>
  )
}
```
<br />

# Redirect 컴포넌트

jsx에서 랜더링이 되면 곧바로 to로 지정한 경로로 이동하게 된다

사용방법
```javascript
import { Redirect } from 'react-router-dom'

// jsx
<Redirect to="/" />
```

App.js
```javascript
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

// isLogin의 값이 true가 되면 로그인페이지 url로 이동해도 바로 Home 페이지로 Redirectr가 된다
const isLogin = false

// component대신 render라는 porps를 사용, 함수를 지정할 수 있다
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route 
          path="/login" 
          render={() => (isLogin ? <Redirect to="/" /> : <Login />)} 
        />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
```