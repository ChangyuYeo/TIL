## 컴포넌트의 속성, 상속

App.vue
```vue
<template>
  <Btn
    class="btn-2"
    style="background-color:crimson;">
    Button
  </Btn>
</template>

<script>
import Btn from '~/components/Btn'

export default {
  components: {
    Btn
  }
}
</script>
```

Btn.vue
```vue
<template>
  <div class="btn">
    <slot></slot>
  </div>
  <!-- <div></div> -->
  <!-- 최상위 요소가 여러 개 있으면 클래스, 스타일 상속이 안된다 -->
  <div
    class="btn"
    v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  // 상속하지 않겠다는 설정
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

## 컴포넌트 Emit

App.vue
```vue
<template>
  <Btn
    @test="log"
    @change-msg="logMsg">
    Button
  </Btn>
</template>

<script>
import Btn from '~/components/Btn'

export default {
  components: {
    Btn
  },
  methods: {
    log(event) {
      console.log('버튼이 클릭됐어요!')
      console.log(event)
    },
    logMsg(msg) {
      console.log(msg)
    }
  }
}
</script>
```


Btn.vue
```vue
<template>
  <div class="btn">
    <slot></slot>
  </div>
  <div
    class="btn" 
    @dblclick="$emit('test', $event)">
    Click
  </div>
  <input
    type="text"
    v-model="msg" />
</template>

<script>
export default {
  emits: [
    'test',
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

## 컴포넌트 Slot

### Fallback Contents
App.vue
```vue
<template>
  <Btn>
    Button
  </Btn>
  <Btn />
</template>

<script>
import Btn from '~/components/Btn'

export default {
  components: {
    Btn
  }
}
</script>
```

Btn.vue
```vue
<template>
  <div class="btn">
    <!-- Fallback Contents, slot값 없을 때 대체 -->
    <slot>버튼</slot>
  </div>
</template>

<script>
export default {

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


### 이름을 갖는 Slot
app.vue
```vue
<template>
  <Btn>
    <template #icon>
      <span>Button</span>
    </template>
    <template #text>
      <span>(2)</span>
    </template>
  </Btn>
</template>

<script>
import Btn from '~/components/Btn'

export default {
  components: {
    Btn
  }
}
</script>
```


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

<script>
export default {

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

## 컴포넌트 - Provide, Inject

App.vue
```vue
<template>
  <Parent :msg="message" />
</template>

<script>
import Parent from '~/components/Parent'

export default {
  components: { 
    Parent 
  },
  data() {
    return {
      message: 'Hello World!'
    }
  }
}
</script>
```


Parent.vue
```vue
<template>
  <Child :msg="msg" />
</template>

<script>
import Child from './Child.vue'

export default {
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  components: { 
    Child 
  },
}
</script>
```


Child.vue
```vue
<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>
```


- 개선 후

App.vue
```vue
<template>
  <button @click="message = 'Good?'">
    Click!
  </button>
  <h1>App: {{ message }}</h1>
  <Parent />
</template>

<script>
import Parent from '~/components/Parent'

export default {
  components: { 
    Parent 
  },
  data() {
    return {
      message: 'Hello World!'
    }
  },
  provide() {
    return {
      // 반응성이 사라진다
      msg: this.message
    }
  }
}
</script>
```


Parent.vue
```vue
<template>
  <Child />
</template>

<script>
import Child from './Child.vue'

export default {
  components: { 
    Child 
  },
}
</script>
```


Child.vue
```vue
<template>
  <div>
    Child: {{ msg }}
  </div>
</template>

<script>
export default {
  inject: [
    'msg'
  ]
}
</script>
```

### 문제점 해결

App.vue
<template>
  <button @click="message = 'Good?'">
    Click!
  </button>
  <h1>App: {{ message }}</h1>
  <Parent />
</template>

<script>
import Parent from '~/components/Parent'
import { computed } from 'vue'

export default {
  components: { 
    Parent 
  },
  data() {
    return {
      message: 'Hello World!'
    }
  },
  provide() {
    return {
      msg: computed(() => this.message)
    }
  }
}
</script>
```

Child.vue
```vue
<template>
  <div>
    Child: {{ msg.value }}
  </div>
</template>

<script>
export default {
  inject: [
    'msg'
  ]
}
</script>
```


## 컴포넌트 ref

```vue
<template>
  <div id="text">
    Hello world!
  </div>
</template>

<script>
export default {
  mounted() {
    const El = document.querySelector('#text')
    console.log(El.textContent)
  }
}
</script>
```

개선 후
```vue
<template>
  <div ref="text">
    Hello world!
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$refs.text) // undefined
  },
  mounted() {
    console.log(this.$refs.text.textContent)
  }
}
</script>
```

## 참조하기

```vue
<template>
  <Hello ref="text" />
</template>

<script>
import Hello from '~/components/Hello'

export default {
  components: {
    Hello
  },
  created() {
    console.log(this.$refs.text)
  },
  mounted() {
    console.log(this.$refs.text.$refs)
  }
}
</script>
```

```vue
<template>
  <h1>Hello~</h1>
  <h1 ref="good">
    Hello~
  </h1>
</template>
```