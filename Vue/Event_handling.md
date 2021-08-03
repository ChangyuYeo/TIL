# 이벤트 헨들링


1
```vue
<template>
  <ul>
    <li
      v-for="fruit in fruits"
      :key="fruit.id">
      {{ fruit.name }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Cherry'],
      // computed에서 계산된 값
      // newFruits: [
      //   { id: 0, name: 'Apple'},
      //   { id: 1, name: 'Banana'},
      //   { id: 2, name: 'Cherry'}
      // ]
    }
  },
  computed: {
    newFruits() {
      return this.fruits.map((fruit, index) => {
        return {
          id: index,
          name: fruit
        }
      })
    }
  }
}
</script>
```