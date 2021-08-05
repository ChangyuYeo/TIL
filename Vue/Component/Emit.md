# Emit (이벤트 발생)
Emit 이란? <br />
컴포넌트 통신 방식 중 하위 컴포넌트에서 상위 컴포넌트로 통신하는 방식이다. <br /><br />

App.vue
```vue
<template>
  <Btn @click="log">
    Button
  </Btn>
</template>
```

App.vue 에서 컴포넌트 Btn을 배치하고 클릭 이벤트로 log 라는 메소드를 준 상태이다.

```vue
methods: {
  log() {
    console.log('버튼을 클릭했어요!')
  }
}
```

log의 메소드는 해당 요소를 클릭하면 콘솔창에 출력되는 형태로 만들었다.
<br /><br />

Btn.vue
```vue
<template>
  <div class="btn">
    <slot></slot>
  </div>
</template>
```

자식 컴포넌트 Btn에는 최상위 요소 하나만 있는 상태고 개발창에서 결과를 확인해보면 버튼을 누를 때마다 콘솔 창에 출력되는 것을 볼 수 있다.
<br /><br />

만약 Btn 컴포넌트에 최상위 요소가 한 개 이상이거나 inheritAttrs가 false인 상태라면?

```vue
<template>
  <div class="btn">
    <slot></slot>
  </div>
  <span>Button</span>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>
```

inheritAtter 속성을 false로 해서 실행시켜보면 log()메소드는 실행이 되지 않는 것을 볼 수 있다.
<br />

> 속성의 상속과 같은 방식으로 실행되는 것을 알 수 있다.

<br />

이때 `emit`을 이용하면 원하는 요소에 이벤트를 설정할 수 있게 된다.

Btn.vue
```vue
<template>
  <div class="btn">
    <slot></slot>
  </div>
  <span @click="$emit('click')">Button</span>
</template>

<script>
export default {
  emits: [
    'click'
  ]
}
</script>
```

1. 먼저 script에서 emits를 배열 데이터로 만든 다음 부모 컴포넌트에서 정의한 click 이벤트를 가져오고
2. 이벤트를 넘겨주고 싶은 요소에게 $emit 속성을 이용해서 가져온 이벤트를 넘겨주면 된다.

> 부모컴포넌트의 이벤트 이름은 원하는대로 작명이 가능하다. <br />
> 꼭 click 이벤트가 아니더라도 input, dblclick 등 도 사용이 가능하다.

<br />

App.vue
```vue
<template>
  <Btn @log="log">
    Button
  </Btn>
</template>
```
<br />

Btn.vue
```vue
<template>
  <div class="btn">
    <slot></slot>
  </div>
  <span @dblclick="$emit('log')">Button</span>
</template>

<script>
export default {
  emits: [
    'log'
  ]
}
</script>
```

<br />

## event 활용
부모 컴포넌트의 해당되는 이벤트의 메서드 안에 매개변수를 활용해 볼 수 있다.

App.vue
```vue
methods: {
  log(event) {
    console.log('버튼을 클릭했어요!')
    console.log(event)
  }
}
```

log메소드에 event라는 매개변수를 받아 출력을 해보면

```
버튼을 클릭했어요!
undefined
```

event를 출력한 곳이 undefined 으로 나오는 것을 확인 할 수 있는데,
<br />
이벤트 객체를 emit으로 재대로 활용하기 위해서는

```vue
<template>
  <div class="btn">
    <slot></slot>
  </div>
  <span @click="$emit('log', '이벤트가 실행될 때 데이터')">Button</span>
</template>
```

이런 식으로 emit의 두번째 인수로 이벤트가 실행될 때 데이터를 입력해준다.

```
버튼을 클릭했어요!
이벤트가 실행될 때 데이터
```

결과를 보면 이렇게 출력이 되는 것을 볼 수 있다. <br />
테스트로 입력했던 문자열 대신에 `$event` 라는 객체를 전달해주면 

```vue
<template>
  <div class="btn">
    <slot></slot>
  </div>
  <span @click="$emit('log', $event)">Button</span>
</template>
```

해당이벤트의 대한 이벤트 객체가 출력되는 것을 볼 수 있다. 

```
PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
```

<br /><br />

### input태그를 이용한 활용 예시
input에 입력할 때마다 콘솔 창에 출력해 주는 예시이다.
<br />

App.vue
```vue
<template>
  <Btn
    @log="log"
    @change-msg="logMsg">
    Button
  </Btn>
</template>
```

changeMsg라는 이벤트를 새로 추가해주는데, HTML은 기본적으로 카멜케이스를 <br /> 
사용하지 않기 때문에 케밥케이스 change-msg로 바꾸어 써준다.


```vue
logMsg(event) {
  console.log(event)
}
```

script 부분에서 changeMsg 이벤트가 실행되면 동작할 메소드를 설정했다 
<br /><br />

Btn.vue
```vue
<template>
  <div class="btn">
    <slot></slot>
  </div>
  <span @click="$emit('log', $event)">Button</span>
  <input
    type="text"
    v-model="msg" />
</template>
```

Btn.vue에 마지막요소에서 input 태그를 추가한 후에, v-model로 양뱡향 데이터 바인딩을 하도록 설정했고,
<br />

```vue
<script>
export default {
  emits: [
    'log',
    'changeMsg' // 추가
  ],
  data() {
    return {
      msg: ''
    }
  },
  watch: {
    msg() {
      this.$emit('changeMsg', this.msg)
    }
  }
}
</script>
```

- 데이터 바인딩을 할 수 있도록 script에서 msg라는 데이터를 만들었고,
- msg라는 데이터가 변경될때마다 확인을 해주기 위해서 `watch` 옵션을 추가해 msg를 감시하게 설정했다.

> msg라는 데이터가 변경될 때 마다, $emit 메소드를 실행하여, App.vue 에서 설정한 changeMsg 이벤트를 연결하고 this.msg를 데이터로 넘겨준다.

<br />
이제 결과화면에 나오는 input창에 글씨를 입력할 때 마다 콘솔창에 출력되는 결과를 볼 수 있다.

<br /><br />

### 총정리 코드

App.vue
```vue
<template>
  <Btn
    @log="log"
    @change-msg="logMsg">
    Button
  </Btn>
</template>

<script>
import Btn from './components/Btn'

export default {
  components: {
    Btn
  },
  methods: {
    log(event) {
      console.log('버튼을 클릭했어요!')
      console.log(event)
    },
    logMsg(event) {
      console.log(event)
    }
  }
}
</script>
```
<br />

App.vue
```vue
<template>
  <div class="btn">
    <slot></slot>
  </div>
  <span @click="$emit('log', $event)">Button</span>
  <input
    type="text "
    v-model="msg" />
</template>

<script>
export default {
  emits: [
    'log',
    'changeMsg'
  ],
  data() {
    return {
      msg: ''
    }
  },
  watch: {
    msg() {
      this.$emit('changeMsg', this.msg)
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
  }
</style>
```