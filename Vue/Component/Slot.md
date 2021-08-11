# Slot (슬롯)
슬롯은 가져온 컴포넌트를 마치 HTML태그처럼 사용할 수 있는 기능을 말한다.
<br />

App.vue
 ```vue
 <template>
  <Btn>
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
</template>

// 중략
```

부모컴포넌트 App에서 자식컴포넌트 Btn을 HTML 태그처럼 열고 닫는 형식으로 사용할 수 있는데, <br />
그 사이에 내용을 입력할 수 있게 되는데 입력한 내용들은 자식컴포넌트 Btn에 있는 `<slot></slot>` 을 대체하게 된다.
<br />

또한 부모 컴포넌트에서 열고닫는 컴포넌트형식 사이에 내용이 없을 떄,

Btn.vue
```vue
<div class="btn">
  <slot>버튼</slot>
</div>
// 중략
```

slot 사이에 마치 기본 값을 설정하는 것 처럼 만들 수 있어 입력한 내용이 없을 때, <br />
slot 사이에 있는 '버튼' 이라는 문자열을 출력하는 구조로 만들 수 있다.

> 슬롯태그 사이에 있는 내용을 출력하는 것을 `Fallback Contents` 라고 한다.

<br /><br />

## 이름을 갖는 Slot
App.vue
```vue
<template>
  <Btn>
    <template #icon>
      <span>Button</span>
    </template>
    <template #text>
      <span>(1)</span>
    </template>
  </Btn>
</template>
```

template을 이용해서 슬롯의 이름을 설정할 수 있는데, <br />
v-slot은 약어로 #을 사용하는데 #을 이용해서 슬롯의 이름을 지정할 수 있다.

Btn.vue
```vue
<template>
  <div class="btn">
    <slot name="icon">
    </slot> 
    <slot name="text">
    </slot> 
  </div>
</template>
```

slot에 name 속성에 해당하는 자리로 들어가 대체하게된다 <br />
부모 컨테이너에서 요소들의 순서가 바뀌어도 해당하는 슬롯의 이름에 맞게 순서를 보장할 수 있는 형태가 된다.
