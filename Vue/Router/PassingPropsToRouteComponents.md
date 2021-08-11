# 라우트 컴포넌트에 속성 전달
컴포넌트에서 $route를 사용하면 해당 라우터의 정보를 이용할 수있는데, 
이를 통해 라우터로 데이터를 전달하는 할 수 있게된다.
<br />

## params
동적 라우트 매칭을 이용해서 해당 컴포넌트에 `this.$route.params` 을 사용해 동적 세그먼트의 정보들을 사용할 수 있다.
<br /><br />
/:id 로 설정했을 경우 `this.$route.params.id`로 값을 가져와 활용할 수 있는데,
<br /><br />
컴포넌트에서 $route를 사용하면 컴포넌트가 URL에 의존적이게 되어 재사용성이 떨어지게되어 이 의존성을 제거하기 위해서 props 옵션을 사용한다.

```vue
<template>
  <div>number: {{ $route.params.id }} </div>
</template>
```

<br />
의존성 제거, props사용

```vue
<template>
  <div>number: {{ id }} </div>
</template>

<script>
  export default {
    props: [ id ]
  }
</script>
```

<br />

## Boolean 모드
props를 true로 설정하면 `route.params`가 컴포넌트 props로 설정된다.

```javascript
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/detail',
      component: Detail,
      props: true
    }
  ]
})
```

<br />

## 객체 모드
props가 객체일때 컴포넌트 props가 있는 그대로 설정된다.(props가 정적일 때 유용)

<br />

## 함수 모드
props를 반환하는 함수를 만들 수 있다.