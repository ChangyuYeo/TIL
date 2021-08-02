# Computed
## 캐싱(cache)
**computed** 프로퍼티는 methods와 비슷하지만, `캐싱(cache)` 이라는 기능을 가지고 있다.
<br />

> computed 에는 캐싱이라는 기능이 있는데, 한번 연산을 해놓은 값이 있으면 <br />
>반복적으로 사용해도  저장된 캐싱 값으로 사용되기 때문에 불필요한 연산을 안 한다 <br />
> 때문에 computed을 **계산된 데이터** 라고 불리기도 한다.

<br />
반복적인 데이터를 사용해야 될 때 computed의 캐싱기능을 사용하면 리소스낭비를 줄일 수 있다.
<br />

```vue
<template>
  <h1>{{ reverseMessage() }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>
export default {
  data() {
    return {
      message: 'Computed'
    }
  },
  methods: {
    reverseMessage() {
      return this.message.split('').reverse().join('')    
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('')
    }
  }
}
</script>
```

\* computed 사용 시 주의할 점 : reversedMessage 사용 시, () 를 뺀 값으로 사용한다. 함수로 구현을 하지만 값을 사용할땐 데이터 값으로 사용함

<br />

## Getter / Setter
computed 에 있는 메소드들은 기본적으로 Getter 를 이용해 값을 가져온다고 보면 된다.

```javascript
  computed: {
    reversedMessage {
      get() {
        return this.message.split('').reverse().join('')
      }
    }
  }
```

computed 안에는 get이 생략이 되어있고, 풀어서 써보면 이런 식의 코드가 나온다. 
<br /><br />
computed 는 Setter를 이용해서 값을 세팅할 수가 있다.

```vue
<template>
  <button 
    @click="add()">
    Button
  </button>
  <h1>{{ reverseMessage() }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>
export default {
  data() {
    return {
      message: 'Computed'
    }
  },
  methods: {
    reverseMessage() {
      return this.message.split('').reverse().join('')    
    }
  },
  computed: {
    reversedMessage: {
      get() {
        return this.message.split('').reverse().join('')
      }
      // reversedMessage 가 할당될 때만 실행됨
      set(value) {
        this.message = value
      }
    }
  },
  methods: {
    add() {
      this.reversedMessage += '!?'
    }
  }
}
</script>
```

이제 버튼을 누를 때 마다 reversedMessage의 값이 할당이 되고, 
<br />
할당이 될 때마다 set 메소드가 실행되어 할당된 값을 파라미터로 받아서
<br />
computed의 값을 세팅해주는 과정이 된다.
<br /><br />
\* set() 사용 시 주의할 점 : 무조건 하나의 파라미터(=새로운 값)이 있어야 된다.