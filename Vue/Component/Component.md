# 컴포넌트
- 컴포넌트(Component)란 조합하여 화면을 구성할 수 있는 블록을 말한다. 
- 컴포넌트를 활용하면 화면을 빠르게 구조화하여 개발 할 수 있으며
- 코드를 이해하기 쉬워지고 **재사용**할 수 있다.

<br /><br />

## 사용 예시
App.vue
```vue
<template>
  <Btn />
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

컴포넌트 연결하는 과정
1. Btn 이라는 컴포넌트를 import 하고
1. components 에 가지고온 Btn을 연결해 준 다음에
1. template 안에 마치 html 태그 처럼 사용해주면 된다.

<br />

물론 Btn 이라는 컴포넌트는 따로 만들어 줘야 된다.
<br />
Btn.vue
```vue
<template>
  <div class="btn">
    Button
  </div>
</template>

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

<br /><br />

## props
불러온 컴포넌트는 여러번 재사용이 가능하지만, <br />
모두 같은 모양이라면 활용도가 떨어질 수 있다. <br />

각각에 컴포넌트에 독립적인 모양을 만들고 싶을때, <br />
`props` 를 이용해서 해결할수있다. <br />

App.vue
```vue
<template>
  <Btn color="royalblue" />
  <Btn />
  <Btn />
</template>
```

첫번째 Btn에서 color를 props로 보내주고,

Btn.vue
```vue
<template>
  <div
    :style="{ 'background-color': color }" 
    class="btn">
    Button
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    }
  }
}
</script>
```

script 부분에 받아온 props를 설정해준다.
- 받아온 color 를 객체리터럴로 입력해주고,
- type을 지정해준다. (받아온 color는 String)
- default는 기본 값을 설정해주는 부분이다. <br />
(별도의 입력 값이 없으면 기본 값으로 설정 된다.)

props를 이용해서 데이터바인딩으로 스타일을 지정하는데, <br />
배경색을 받아온 color의 값으로 설정하는 구조이다.

> 이런 방식은 `부모 <-> 자식 간의 데이터 통신 방법` 이라고도 말한다.

<br /><br />

## props 활용해보기

App.vue
```vue
<template>
  <Btn large>
    Button1
  </Btn>
  <Btn color="crimson">
    Button2
  </Btn> 
  <Btn :color="color">
    Button3
  </Btn> 
  <Btn color="#000">
    <span style="color: crimson">Button4</span>
  </Btn>
</template>

<script>
import Btn from './components/Btn'

export default {
  components: {
    Btn
  },
  data() {
    return {
      color: '#555'
    }
  }
}
</script>
```

Btn.vue
```vue
<template>
  <div
    :class="{ large }"
    :style="{ 'background-color': color }" 
    class="btn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'royalblue'
    },
    large: {
      type: Boolean,
      default: false
    }
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
    &.large {
      width: 300px;
      height: 80px;
      line-height: 80px;
    }
  }
</style>
```

1. large라는 porps는 boolean형이며, large를 받았을 때 class 바인딩을 통해서 large 클래스를 추가해 줄 수 있고 이를 활용해서 스타일을 만들어 낼 수 있다.
1. slot을 이용해서 컴포넌트도 일반 html 태그처럼 열고닫는 형태로 사용이 가능해진다.

> 컴포넌트를 열고닫는 사이에 들어간 내용들은 \<slot>\</slot> 을 대채해서 들어간다고 생각하면 된다. <br />
