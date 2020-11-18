<template>
  <div>
    <img src="../assets/imgs/logo.png">
    <h1>Hello Vue 3!</h1>
    <m-button @click="inc">Clicked {{ count }} times.</m-button>

    <div v-for="(item, key) in list" :key="key">{{ isInList(item) }}</div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
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

    watch(count, v => {
      console.log('count', v)
    }, { immediate: true })

    onMounted(() => {
      console.log('onMounted', Object.assign({}, $route.query))
    })

    const list = [
      { foo: 1 },
      { bar: 2 }
    ]

    function isInList (item) {
      // item here is a proxy of the original!
      return list.includes(item)
    }

    return {
      isInList,
      list,
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
