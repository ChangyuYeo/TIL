# 동적 라우트 매칭
동적 라우트 매칭은 패턴을 가진 라우트를 동일한 컴포넌트에 매칭시켜야 할 경우에 사용한다. 
<br /><br /> 
만약 상품의 상세정보 detail 이라는 컴포넌트가 있고, 상품에 ID에 맞는 라우트에 접근하기 위해서 사용할 수 있는데,

```javascript
import { createRouter, createWebHashHistory } from "vue-router";
import Detail from './Detail'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      // : 을 이용해서 동적 라우트를 설정할 수 있다.
      path: '/detail/:id',
      component: Detail
    }
  ]
})
```

`콜론(:)`을 이용해 해당 라우트에 설정을 하면 /detail/ 뒤에 아무거나 들어왔을 때 항상 Detail.vue를 보여줄 수 있게 된다.
<br />

`콜론(:)` 으로 작성된 곳을 동적 세그먼트라고 하는데 동적 세그먼트의 값은 모두 `this.$route.params` 에 저장된다.

> `this.$route.params.id` 를 이용해서 id의 값을 가져와 활용할 수 있게 된다.