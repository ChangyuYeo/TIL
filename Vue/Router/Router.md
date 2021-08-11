# Router(라우터) 란?
- 페이지를 여러개 만들고 이동하고 싶을 때 라우터를 사용하는데,
- 페이지를 이동할 때 서버에 요청하여 새로 페이지를 갱신하는 것이 아닌, 
- 미리 해당 페이지를 받고 페이지를 이동 시 클라이언트의 라우팅을 이용하여 화면을 갱신하는 것을 말한다.
- 이러한 방식을 `싱글 페이지 애플리케이션(SPA)`이라고 한다.

<br />
셋팅 방법 (Vue3 기준)

```
npm install vue-router@4
```
<br />

## Router의 컴포넌트
라우터에는 2가지 컴포넌트가 있다.
<br />

### 1. RouterView
- 페이지가 출력(렌더링)되는 영역 컴포넌트
- 변경되는 페이지의 영역이라고 생각하면 된다.


### 2. RouterLink
- 페이지 이동을 위한 링크 컴포넌트
- html의 a태그대신 사용하며, 실제 랜더링이 되고 결과를 보면 a태그로 되어있는 것을 볼 수 있다.
- to를 이용해 클릭 시 원하는 페이지로 이동하게 할 수 있다.
<br /><br />

## Router의 객체
마찬가지로 2가지의 라우터 객체가 있는데,
<br />

### 1. $route
- 페이지의 정보를 가지는 객체
- $route는 여러가지 속성을 이용해 활용할 수 있는데,
- fullPath 속성: 접근된 해당 페이지의 대한 전체  경로
- params 속성: 접근된 해당 페이지의 대한 파라미터 정보
- $route 객체는 접근된 페이지에 여러가지 정보들을  조회할 수 있는 객체라고 생각하면 된다.
<br/>

### 2. $router
- 페이지를 조작하기 위해 사용하는 객체
- $router에는 사용할 수 있는 여러 메소드들이 있는데, 대표적으로 push() 가 있다.
- push(): 설정한 페이지로 이동시켜줄수있는 메소드
- go() : go는 뒤로가기 기능을 수행할 수 있는데 1이라고 쓰면 앞으로한번, -2라고 쓰면 두번 뒤로 가게된다.
<br /><br />

## Router 설정 방법

routes 폴더를 만들고 라우터를 설정할 index.js을 만들어 내용을 작성한다.
```javascript
import { createRouter, createWebHashHistory } from "vue-router";
import Detail from './Detail'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/detail',
      component: Detail
    }
  ]
})
```

<br />
라우터 설정한 index.js 파일을 main.js에 import를 한다.
<br />

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes' // index.js 생략가능

createApp(App)
  .use(router) // ues: 플러그인 추가!
  .mount('#app')
```

- use로 import한 router를 넣어주면 설정이 끝난다.
- index.js은 파일명을 생략할 수 있다.
<br />

원하는 곳에 `RouterView`를 이용해서 페이지를 출력한다.
<br />

App.vue
```vue
<template>
  <RouterView />
</template>
```
<br /><br />

## Hash mode, HTML5 mode
routes 폴더안에 index.js에서 history를 설정할 떄
```javascript
import { createRouter, createWebHashHistory } from "vue-router";
import Detail from './Detail'

export default createRouter({
  history: createWebHashHistory(),
})
```

`history: createWebHashHistory()` 로 설정했는데, 이것을 Hash mode 라고 한다.
<br />
Hash mode는 URL에 전부 #이 붙은 채로 시작하는데, # 뒤에 있는 내용들은 서버로 전달되지 않는 특징이 있다.
<br />
서버가 라우팅을 채가는 일을 방지할 수 있어 서버가 없다면 설정을 해주어야 한다.
<br /><br />

HTML5 mode 라는 것도 있는데,
```javascript
import { createRouter, createWebHistory } from "vue-router";
import Detail from './Detail'

export default createRouter({
  history: createWebHistory(),
})
```

`history: createWebHistory()`는 Hash mode와는 다르게 #이 붙지않아 해당 URL을 서버로 부터 요청하게 된다.
<br />
즉, /detail 을 접근하면 서버에 /detail 를 요청하게 된다.