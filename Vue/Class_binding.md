# 클래스 바인딩



1
```vue
<template>
  <h1
    :class="{ active: isActive }" 
    @click="activate">
    Class-Style binding
  </h1>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    activate() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>
  .active {
    color: crimson;
    font-weight: bold;
  }
</style>
```


2
```vue
<template>
  <h1
    :style="{color, fontSize}"
    @click="changeStyle">
    Class-Style binding
  </h1>
</template>

<script>
export default {
  data() {
    return {
      color: 'crimson',
      fontSize: '30px'
    }
  },
  methods: {
    changeStyle() {
      this.color = 'royalblue'
      this.fontSize = '50px'
    }
  }
}
</script>

<style>

</style>
```


3

```vue
<template>
  <h1
    :style="[fontStyle, backgroundStyle]"
    @click="changeStyle">
    Class-Style binding
  </h1>
</template>

<script>
export default {
  data() {
    return {
      fontStyle: {
        color: 'crimson',
        fontSize: '30px'
      },
      backgroundStyle: {
        backgroundColor: 'black'
      }
    }
  },
  methods: {
    changeStyle() {
      this.fontStyle.color = 'royalblue'
      this.fontStyle.fontSize = '50px'
    }
  }
}
</script>

<style>

</style>
```