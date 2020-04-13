<template>
  <div>
    <img src="../assets/imgs/logo.png">
    <h1>Hello Vue 3!</h1>
    <m-button @click="inc">Clicked {{ count }} times.</m-button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import MButton from '../MButton'
import { useRoute } from 'vue-router'

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default {
  components: { MButton },
  setup (props, { emit }) {
    const $route = useRoute()
    console.log('$route', JSON.stringify($route.query))
    const count = ref(0)
    const inc = async () => {
      count.value++
      await sleep(1000)
      return 11
    }

    onMounted(() => {
      console.log('onMounted', Object.assign({}, $route.query))
    })

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
