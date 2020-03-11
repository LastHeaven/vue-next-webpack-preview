<template>
  <div>
    <img src="./logo.png">
    <h1>Hello Vue 3!</h1>
    <m-button @click="inc">Clicked {{ count }} times.</m-button>
  </div>
</template>

<script>
import { ref } from 'vue'
import MButton from './MButton'

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default {
  components: { MButton },
  setup (props, { emit }) {
    const count = ref(0)
    const inc = async () => {
      count.value++
      await sleep(1000)
      return 11
    }
    return {
      count,
      inc
    }
  }
}
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
