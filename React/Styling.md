# Style Loaders
## Loaders(로더)
- 로더는 모듈의 소스 코드에서 적용되는 변환이다.
- import나 로드를 통해 파일들을 전처리 할 수 있다. 
- 프론트엔드 빌드 과정을 처리하는 강력한 방법을 제공한다.

Create React App은 js, jsx 확장자인 경우에 import를 하게 되면 webpack을 통해 파일 확장자에 맞는 babel-loader를 <br />
사용하여 babel config를 통해 어떤 문법을 번역할건지 결정하게 된다 <br /><br />
만약 css, scss 등 확장자의 경우에는 **style-loader** 이 동작하게 된다. <br />
<br /><br />

---

## CRA 에서의 webpack
Create React App 안에 있는 webpack 설정이 파일 확장자에 맞는 로더에게 위임을 해주는 역할을 한다.
<br />

### webpack 구조 보기
1. Create React App 으로 react 프로젝트를 실행하고
1. npm run eject 을 입력하면 웹팩 구조를 볼 수 있다
1. config안에 webpack.config.js을 보면

```javascript
// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
```
61행 부터 스타일 파일에 관한 정규표현식을 볼 수 있다
<br />

CSS (webpack.config.js)
```javascript
{
  test: cssRegex,
  exclude: cssModuleRegex,
  use: getStyleLoaders({
    importLoaders: 1,
    sourceMap: isEnvProduction
      ? shouldUseSourceMap
      : isEnvDevelopment,
  }),
  // Don't consider CSS imports dead code even if the
  // containing package claims to have no side effects.
  // Remove this when webpack adds a warning or an errthis.
  // See https://github.com/webpack/webpack/issues/6571
  sideEffects: true,
}
```

CSS Module (webpack.config.js)
```javascript
{
  test: cssModuleRegex, // /\.module\.css$/
  use: getStyleLoaders({
    importLoaders: 1,
    sourceMap: isEnvProduction && shouldUseSourceMap,
      modules: true,
      getLocalTdent: getCSSModuleLocalIdent,
  }),
},
```
설정을 보면 css인 확장자는 StyleLoaders를 사용하게 설정이 되어있다
<br /><br />

---

## CSS module
### 일반적인 css의 단점
- 리액트에서는 컴포넌트 아키텍쳐를 이용하기때문에 컴포넌트 간의 의존성을 최소화하고 내부 응집도를 높히는게 좋다
- css, scss import할 경우에는 전역적으로 스타일들이 순서만 다르게 들어갈 뿐이라 스코프가 오염될수있는 단점이 있다

### css-module
- css-module이란 webpack을 이용해 모듈을 import할때 모듈을 오염되지 않게 도움을 주는 기능이 추가된 형태에 css 이다
- css-module을 이용하면 클래스명이 충돌하는 단점을 극복할 수 있다.
- css-module은 간결한 클래스명을 이용해서 컴포넌트 단위로 스타일을 적용할 때 좋다.

<a href="https://create-react-app.dev/docs/adding-a-css-modules-stylesheet"> 참고 자료 </a>

css-module 사용법
```javascript
import styles from './App.module.css'

// 콘솔에 출력을 해보면
console.log(styles) 

// [filename]_[classname]__[hash]
// 이러한 형태에 styles의 객체가 나온다
{
  App: "App_App__1Bpra"
  App-logo-spin: "App_App-logo-spin__1XkhX"
  header: "App_header__3yaKd"
  link: "App_link__flb19"
  logo: "App_logo__3f5KB"
}
// 해당 객체에서 key값을 className으로 사용하면 스타일을 사용할 수 있다
function App() {
  return (
    <div className={styles['App']}>
      <header className={styles['header']}></div>
    </div>
  );
}

export default App;
```



<br /><br />

---

## classnames 라이브러리
- classname을 쉽게 사용하기 위한 라이브러리
- 서로 다른 효과를 갖고 있는 css를 하나의 컴포넌트에 적용하는데 사용한다.

classnames 설치
```
npm install classnames
```

classnames 사용방법
```javascript
import React from 'react'
import styles from './Button.module.css'
// bind를 사용하면 해당 클래스의 실제 클래스를 가져올 수 있다
import classNames from 'classnames/bind'

// cx에 할당한다
const cx = classNames.bind(styles)

// 콘솔을 확인해보면 실제 class 값이 출력되는 것을 알 수 있다
console.log(cx("button", "loading"))

class Button extends React.Component {
  render() {
  console.log(classNames("one", "two")) // one two 출력
  console.log(classNames("one", "two", "three")) // one two three 출력

  // one 만 출력, 객체의 키가 true면 출력 false면 출력을 안한다
  console.log(classNames({ one: true }, { two: false })) 
  // two 1 출력, false한 값은 출력이 안 되는 것을 알 수 있다
  console.log(classNames(null, false, 'two', undefined, 0, 1, { three: null }))
  // 실제 class 값을 출력한다
  console.log(classNames(styles['button'], styles['loading']))
  }
}

export default Button
```

### css moduules 에서 활용해보면

classNames 설치 전의 모습

Button.jsx
```javascript
import React from 'react'
import styles from './Button.module.css'
// 중략

  <button 
    onClick={this.startLoading} 
    className={ 
      this.state.loading
      ? `${styles["button"]} ${styles["loading"]}`
      : styles["button"]
    }
    {...this.props} 
  />

// 중략
```

classNames 설치 후의 모습

Button.jsx
```javascript
import React from 'react'
import styles from './Button.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
// 중략

  <button 
    onClick={this.startLoading} 
    className={ cx('button', { loading }) }
    {...this.props} 
  />

// 중략
```
classNames 사용 비교 <a href="./src/components/classnames.md">자세히 보기</a>

- bind를 해주지 않으면 css.을 계속 붙여 줘야 한다
- template literal를 마구 마구 쓰지 않아도 된다
- cx으로 한 번 감싸주고, string 표시와 쉼표로 이름을 구분하면 된다.


<br /><br />

---

## SASS(SCSS)
Sass는 CSS 전처리기로서
- 복잡한 작업을 쉽게 할 수 있게 해주고, 
- 코드의 재활용성을 높여줄 뿐 만 아니라, 
- 코드의 가독성을 높여주어 유지보수를 쉽게해준다.

node-sass패키지를 설치
```
npm install node-sass
```

CRA에는 Sass를 위한 빌드 시스템이 구축되어 자동으로 Sass파일이 CSS파일로 컴파일이 된다
App.css를 App.scss로 리팩토링을 해본다 
<br />

App.scss
```Scss
.App {
  text-align: center;
  .logo {
    height: 40vmin;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
  .logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  
  .header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  .link {
    color: #61dafb;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
```
<br /><br />

---
## CSS in JS
이름처럼 CSS코드를 자바스크립트 파일안에서 작성하는 방식이다.<br />
자바스크립트 내에서 관리하기 때문에 내부응집도가 올라가고, 동적으로 CSS를 변경하기도 쉽다

### Styled Components 라이브러리
Styled Components는 CSS-in-JS 라이브러리 중에서도 가장 널리 사용되고 있는 라이브러리

패키지 설치

```
npm install styled-components
```

사용방법<br />

styled-components 패키지에서 styled 함수를 import 를 한다 <br />
styled는 Styled Components의 가장 중요한 한데, <br />
HTML 엘리먼트나 React 컴포넌트에 원하는 스타일을 적용하기 위해서 사용이 된다 <br />

StyledButtom.jsx
```javascript
import styled, { css } from 'styled-components'

// <button> HTML 엘리먼트에 대한 스타일 정의
// primary props를 받을 때 스타일 지정 (css)
const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid royalblue;
  color: royalblue;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;

  ${props => 
    props.primary && 
    css`
    background: royalblue;
    color: white;
  `}
`

export default StyledButton
```

- App.js에서 StyledButtom.jsx를 import하고 코드를 수정
- styled.button(HTML 엘리먼트 스타일링, 해당 태그명의 속성에 접근 -> button 지정)
- 바로 뒤에 템플릿 리터럴를 이용해 사이에 스타일을 지정해준다.

> styled 힘수는 결국 해당 스타일이 적용된 HTML 엘리먼트나 React 컴포넌트를 리턴 <br />
각 JavaScript 파일마다 고유한 CSS를 부여해주기 때문에, 각 React 컴포넌트에 완전히 격리된 스타일을 적용할 수 있게 된다

<br />

### as props
이미 지정한 스타일을 다른 태그로 쓰고싶으면?

```javascript
<StyledButton as="a" href="/">버튼</StyledButton>
```

이런식으로 props를 as로 줘서 button태그를 a태그로 바꿔 사용할 수도 있다
<br /><br />

또한 as는 특정 엘리먼트에도 지정할 수 있는데, 특정 컴포넌트를 지정해서 컴포넌트에 스타일을 지정하는것도 가능하다

```javascript
// 중략

const UppercaseButton = props => (
  <button {...props} children={props.children.toUpperCase()} />
)

<StyledButton as={ UppercaseButton }>button</StyledButton>

// 중략
```

기존버튼기능에 원하는기능을 추가해서 지정할 수 있다
<br />

as props를 사용하지않고도 구현이 가능한 방법이 있다

```javascript
// 중략

const MyButton = props => (
  <button className={props.className} children={`MyButton ${props.children}`} />
)

const StyledMyButton = styled(MyButton)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${props => props.color || "royalblue"};
  color: ${props => props.color || "royalblue"};
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;

  :hover {
    border: 2px solid crimson;
    color: crimson;
  }

  ::before {
    content: "@";
  }
`;

// 중략

<StyledMyButton>버튼</StyledMyButton>
<StyledMyButton color="blueviolet">버튼</StyledMyButton>

// 중략
```

- as를 사용할 때와는 다르게 {...props} 부분을 className={props.className} 로 바꿔준다
- props로 들어오는 값도 스타일 안에서 사용이 가능하다
<br /><br />

### GlobalStyle 전역 스타일링

createGlobalStyle 함수로 생성한 전역 스타일 컴포넌트를 애플리케이션의 최상위 컴포넌트에 추가해주면 하위 모든 컴포넌트에 해당 스타일이 일괄 적용된다

```javascript
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  buutton {
    color: khaki
  }
`;

//애플리케이션의 최상위 컴포넌트에 추가
<GlobalStyle />
// 중략
```

### 속성을 미리 설정하여 사용하기
StyledA.jsx
```javascript
import styled from "styled-components"

// color를 props로 받아서 props.color를 보여준다
// target을 attrs를 이용해서 기본세팅을 해준다
const StyledA = styled.a.attrs(props => ({
  target: "_BLANK"
}))`
  color: ${props => props.color}
`

export default StyledA
```

App.js
```javascript
import StyledA from './components/StyledA'

<StyledA href="https://google.com">태그</StyledA>
```

위와 같이 target 속성을 미리 세팅을 하여 사용할 수가 있다
<br /><br />

---

## React Shadow

<h3>Shadow DOM</h3>
어떤 html 안에 본래 html 과 영향을 주지않은 별도의 html 덩어리 라고 생각하면 된다 <br />
React는 스타일이 오염되는 근본적인 문제가 있는데 Shadow DOM을 이용해서 완전히 해결을 할 수가 있다

<br />
react-shadow 라이브러리 설치

```
npm i react-shadow
```
<br />

사용 방법

1. react-shadow 를 root 로 import 한다 
1. root.div태그를 만들어서 최상위 컴포넌트로 만들어 내용을 감싼다
1. 스타일을 주기위에 root.div 컴포넌트 최하위에 `<style type="text/css">{styles}</style>` 로 스타일을 지정해준다
1. const styles 를 만들어 템플릿 기호안에 원하는 스타일을 지정해준다

기존 App.js에 Shadow DOM을 이용
```javascript
import logo from './logo.svg';
import root from 'react-shadow';

const styles = `
// 원하는 스타일 작성
`;

function App() {
  return (
    <root.div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <style type="text/css">{styles}</style>
    </root.div>
  );
}

export default App;
```
<br />
Shadow DOM 단점

- 스타일이 공통적으로 사용하는 부분이 있기 마련인데 반복적으로 넣어줘야 된다는 단점이 있다
- 외부와 내부가 완전히 차단되어 있기 때문에 DOCUMENT에 지정돼있는 값을 받아서 상대적으로 표현할 때 제한이 있다
<br /><br />

---

## Ant Design 라이브러리

패키지 설치
```
npm install antd
```
<a href="https://ant.design/docs/spec/introduce">Ant Desingn </a>홈페이지에서 원하는 컴포넌트를 가져와서 사용하면 된다
<br />

```javascript
import "antd/dist/antd.css"; // 전역 스타일 추가 in index.js
import { Calendar } from 'antd'; // 리액트 컴포넌트 in App.js
```

사용방법<br />
index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css" // css 파일중에 제일 위에서 import를 해준다 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

```


예를 들어 antd에 Calendar 컴포넌트를 사용하고 싶다면 <br />
App.js
```javascript
import './App.css';
import { Calendar } from 'antd';

function App() {
  return (
    <div className="App">
        <Calendar />
    </div>
  );
}

export default App;
```

### Ant Design 아이콘 사용

아이콘을 사용하기 위해 따로 패키지를 설치해야 된다
```
npm install --save @ant-design/icons
```

홈페이지에서 원하는 아이콘을 선택하면 자동으로 해당하는 컴포넌트정보가 복사가된다

App.js
```javascript
import './App.css';
import { GithubOutlined } from '@ant-design/icons';

function App() {
  return (
    <div className="App">
        <GithubOutlined />
    </div>
  );
}

export default App;
```