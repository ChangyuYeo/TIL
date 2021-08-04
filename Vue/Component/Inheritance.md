# 속성 상속 (Attribute Inheritance)
App.vue에서 Btn이라는 컴포넌트를 사용해 화면을 출력하고 있을 때, <br />
클래스와 스타일을 넣으면 어떻게 될까?

App.vue
```vue
<template>
  <Btn 
    class="btn-2"
    style="background-color: crimson;">
    Button
  </Btn>
</template>
```

Btn.vue
```vue
<template>
  <div class="btn">
    <slot></slot>
  </div>
</template>
```

개발 환경을 열어서 Btn의 상태를 개발자 도구로 보면,

```
<div class="btn btn-2" data-v-0ae0165c=""> Button </div>
```

이처럼 App에 명시했던 클래스명과 스타일이 그대로 상속되어 적용이 되어있는 것을 볼 수 있다.
<br /><br />

만약 Btn.vue의 형제요소가 생겼다고 가정해봤을때,

```vue
<template>
  <div class="btn">
    <slot></slot>
  </div>
  <div class="btn">
    <slot></slot>
  </div>
</template>
```

개발자 도구로 다시 결과를 보면

```
<div class="btn" data-v-0ae0165c=""> Button </div>
```

상속받아야 될 클래스명이 없고 스타일도 적용이 안된다는 것을 알 수 있다.

> tmeplate의 바로 자식 요소를 해당하는 컴포넌트의 `최상위(root) 요소` 라고 하는데 <br />
> 최상위 요소가 두개가 있는 경우 상속을 받지 못하고 그냥 랜더링이 되버린다.

<br />

## inheritAttrs 속성
inheritAttrs 속성을 이용해서 상속의 대한 방식을 하나로 통일을 시켜줄 수 있다.
<br />

Btn.vue에 script 부분에 사용하면 된다.

```vue
<script>
export default {
  inheritAttrs: false
}
</script>
```

`inheritAttrs: false` 을 설정해주면 최상위 요소가 하나여도 상속을 받지 못하는 구조가 된다.
<br />

## attrs
만약 최상위 요소가 두 개 이상이지만 부모 컴포넌트에서 속성 상속을 받고 싶다면?
<br />
일단 `$attrs`라는 특정한 객체가 있다.

```vue
<script>
export default {
  inheritAttrs: false,
  created() {
    console.log(this.$attrs)
  }
}
</script>
```

created() 라는 라이프사이클 훅을 이용해서 $attrs 라는 객체를 출력해보면

```
{
    "class": "btn-2",
    "style": {
        "background-color": "crimson"
    }
}
```
이런 모양을 한 Proxy 객체가 출력되는 것을 확인 할 수 있는데, <br />
이 객체를 이용해서 원하는 요소에 상속해줄 수 있다.

```vue
<template>
  <div class="btn">
    <slot></slot>
  </div>
  <div
    class="btn"
    :class="$attrs.class"
    :style="$attrs.style">
    <slot></slot>
  </div>
</template>
```

이렇게 클래스와 스타일을 데이터 바인드를 통해서 결과 화면을 보면, <br />

```
<div class="btn btn-2" data-v-0ae0165c="" style="background-color: crimson;"> Button </div>
```

클래스명이 상속이되며 스타일까지 적용되는 모습을 확인할 수 있다.
<br />
> 이렇게 루트 엘리먼트가 하나이상이거나 하나밖에없을때 상속하지 않는 옵션을 `(inheritAttrs: false)`, <br />
> 설정해준 후에 실제 들어오는 속성들을 내가 원하는 요소에 연결을 해줄 때, `$attrs`를 활용해 볼 수 있다.

또한, 모든 속성을 상속받을 경우라면,

```vue
<template>
  <div class="btn">
    <slot></slot>
  </div>
  <div
    class="btn"
    v-bind="$attrs">
    <slot></slot>
  </div>
</template>
```

`v-bind="$attrs"` 으로 더 간단하게 사용할 수 도 있다.

<br />

총정리 코드

App.vue
```vue
<template>
  <Btn 
    class="btn-2"
    style="background-color: crimson;">
    Button
  </Btn>
</template>

<script>
import Btn from './components/Btn'

export default {
  components: {
    Btn
  }
}
</script>
```

<br />

Btn.vue
```vue
<template>
  <div class="btn">
    <slot></slot>
  </div>
  <div
    class="btn"
    v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  created() {
    console.log(this.$attrs)
  }
}
</script>


<style lang="scss" scoped>
  .btn {
    width: 200px;
    height: 50px;
    font-size: 30px;
    margin: 4px;
    padding: 6px 12px;
    line-height: 50px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    text-align: center;
    background-color: royalblue;
  }
</style>
```