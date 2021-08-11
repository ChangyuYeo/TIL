# Named Views
- Named View는 특정 페이지로 이동했을 때 여러 개의 컴포넌트를 동시에 표시하는 라우팅 방식이다.
- Nested Router와 다르게 여러 개의 컴포넌트를 동시에 표시할 때 사용한다.

## Named Views 사용예시

```javascript
import { createRouter, createWebHashHistory } from "vue-router";
import Detail from './Detail'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/detail',
      component: {
        default: Detail,
        one: DetailOne,
        two: DetailTwo
      }
    }
  ]
})
```
routes 폴더안에 라우터 설정파일 index.js 에서 해당 컴포넌트의 설정을 위 코드 처럼 해주게 된다면,
<br />
- default 값으로 name속성이 없다면 Detail 컴포넌트를 출력하고,
- name이 one인 경우 DetailOne 컴포넌트를,
- name이 two인 경우 DetailTwo 컴포넌트를 출력하게 된다.
<br />

```vue
<RouterView class="view A"></RouterView>
<RouterView class="view B" name="one"></RouterView>
<RouterView class="view C" name="two"></RouterView>
```

원하는 곳에 RouterView 컴포넌트를 이용해서 설정한 name을 이용해 출력해줄 수 있다.