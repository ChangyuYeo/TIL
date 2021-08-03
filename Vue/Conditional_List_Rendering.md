# 조건부 랜더링

1
```vue
<template>
  <button @click="handler()">
    버튼
  </button>
  <h1 v-if="isShow">
    Rendering
  </h1>
  <h1 v-else-if="count > 3">
    Count > 3
  </h1>
  <h1 v-else> 
    off
  </h1>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      count: 0
    }
  },
  methods: {
    handler() {
      this.isShow = !this.isShow
      this.count += 1
    }
  }
}
</script>
```

2
```vue
<template>
  <button @click="handler()">
    버튼
  </button>
  <template v-if="isShow">
    <h1>title</h1>
    <p>content_1</p>
    <p>content_2</p>
  </template>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      count: 0
    }
  },
  methods: {
    handler() {
      this.isShow = !this.isShow
      this.count += 1
    }
  }
}
</script>
```


# 리스트 랜더링