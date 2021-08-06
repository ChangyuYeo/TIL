# Refs
- vue에서 제공하는 기능, 특정한 요소나 컴포넌트를 참조하는 방식이다.
- 기존에 자바스크립트를 사용하여 참조하는 방법을 개선할 수 있다. 

<br />
id가 text인 요소의 내용을 콘솔창에 출력해보기 위해 자바스크립트의 document를 사용하는데,
<br /><br />
App.vue

```vue
<template>
  <span id="text">
    안녕하세요!
  </span>
</template>

<script>
export default {
  mounted() {
    console.log(document.querySelector('#text'))
  }
}
</script>
```

콘솔창 출력 화면
```
<span id="text"> 안녕하세요! </span>
```
이 코드를 vue에서 제공하는 `Refs` 기능을 사용하면 좀 더 간결하고 쉽게 만들어 낼 수 있다.
<br /><br />
App.vue

```vue
<template>
  <span ref="text">
    안녕하세요!
  </span>
</template>

<script>
export default {
  created() {
    console.log(this.$refs.text) // undefined
  },
  mounted() {
    console.log(this.$refs.text)
  }
}
</script>
```

콘솔창 출력 결과
```
undefined
<span> 안녕하세요! </span>
```

- `Refs`는 ref(reference의 약어)속성은 해당하는 특정한 요소를 선언한 이름으로 참조하는 속성이다.
- ref 선택자는 $refs로 참조가 가능하다.
- `Refs`는 HTML 요소들이 컴포넌트와 연결이된 직후에만 사용이 가능하기 때문에 `created` 라이프 사이클에서는 undefined 이 출력 된다.
<br /><br />

## Refs의 활용
Refs를 이용하여 컴포넌트에서도 활용할 수 있다.

Child.vue
```vue
<template>
  <span>Child 컴포넌트 입니다!</span>
</template>
```
Child 라는 컴포넌트를 새로 만들어서
<br />
App.vue
```vue
<template>
  <Child ref="text" />
</template>
```
App에 Child 컴포넌트를 적용시키고, ref 속성을 추가해서 이름을 text로 명시했다.
<br />
콘솔창에 결과를 확인해보면,
```
Proxy {…}
  [[Handler]]: Object
  [[Target]]: Object
    // 중략
    $el: (...)
    // 중략
  [[IsRevoked]]: false
```

- Proxy 라는 객체 데이터가 출력이 되는데 Target 속성에는 $로 시작되는 여러가지 vue에서 사용할 수 있는 기본 객체들이 명시가 되어있다.
- 그중에서 `$el` 속성은 해당하는 컴포넌트의 최상위 컴포넌트를 사용할 수 있게 해주는 속성으로,

```vue
console.log(this.$refs.text.$el)
```

이런 식으로 출력하게 되면 Child컴포넌트에 있는 요소가 출력되는 것을 볼 수 있다.

```
<span>Child 컴포넌트 입니다!</span>
```

### 주의 사항
만약 자식컴포넌트의 최상위 요소가 여러 개 라면?

Child.vue
```vue
<template>
  <span>Child 컴포넌트 입니다!</span>
  <span>안녕하세요!</span>
</template>
```

최상위 요소가 2개이기 때문에 $el은 특정한 요소를 지정할 수 없어 객체 데이터형식의 무언가가 출력이된다.

```
#text
```

이런 경우에는 원하는 요소에 참조할 수 있게 만들어 줄 수 있는데,

Child.vue
```vue
<template>
  <span>Child 컴포넌트 입니다!</span>
  <span ref="child">
    안녕하세요!
  </span>
</template>
```

원하는 요소에 ref 속성으로 이름을 정해주고,

App.vue
```vue
console.log(this.$refs.text.$refs.child)
```

$refs로 명시한 이름을 참조하면
```
<span> 안녕하세요! </span>
```
원하는 요소의 정보가 출력이 되는 것을 볼 수 있다.
<br /><br />

### 총정리 코드

App.vue
```vue
<template>
  <Child ref="text" />
</template>

<script>
import Child from './components/Child'

export default {
  components: {
    Child
  },
  mounted() {
    console.log(this.$refs.text.$refs.child)
  }
}
</script>
```
<br />

Child.vue
```vue
<template>
  <span>Child 컴포넌트 입니다!</span>
  <span ref="child">
    안녕하세요!
  </span>
</template>
```