# watch
- **watch** 프로퍼티는 특정 데이터의 변화를 감지하여 자동으로 특정 로직을 수행해주는 속성, **감시자** 라고 불리기도 한다.
- 데이터 변경에 대한 응답으로 비동기 작업 등을 처리하려는 경우에 많이 사용한다.


```vue
<template>
  <h1 @click="changeMessage">
    {{ message }}
  </h1>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>
export default {
  data() {
    return {
      message: 'watchTest'
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('')
    }
  },
  watch: {
    message(value) {
      console.log(`message: ${ value }`);
    },
    reversedMessage(value) {
      console.log(`reversedMessage: ${ value }`);
    }
  },
  methods: {
    changeMessage() {
      this.message = 'change!'
    }
  }
}
</script>
```