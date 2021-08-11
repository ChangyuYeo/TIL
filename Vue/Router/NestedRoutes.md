# 중첩된 라우트
- 중첩된 라우터는 여러 단계로 중첩 된 컴포넌트를 다루기 위해 사용하는 라우팅 기능이다.
- 특정 페이지 내에서 라우트를 나누는 것이라 생각하면 된다.
<br />

예를 들면, detail/0/about로 이동하면 detail 페이지 내에 작성자 정보를 보여주고 
<br />
detail/0/reply로 이동하면 detail 페이지 내에 댓글들을 보여줄 수 있게 만들 수 있다.
<br /><br />

## 중첩된 라우트 사용방법

```javascript
import { createRouter, createWebHashHistory } from "vue-router";
import Detail from './Detail'
import About from './About'
import Reply from './Reply'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/detail/:id',
      component: Detail,
      children: [
        {
          path: 'about',
          component: About
        },
        {
          path: 'reply',
          component: Reply
        }
      ]
    }
  ]
})
```

`children` 이라는 항목을 이용해서 해당하는 라우트에 하위 라우트를 추가할 수 있게된다. 
<br />

detail/:id/about, detail/:id/reply 로 접근했을 때, 해당 컴포넌트가 보여줄 수 있도록 설정이 끝났다.
<br />

설정이 끝나면 children을 설정했던 Detail 컴포넌트에 `RouterView` 컴포넌트를 추가해 주어야 컴포넌트가 보인다.