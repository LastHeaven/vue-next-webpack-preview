<template>
  <button @click="onClick">{{localLoading}}<slot/></button>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'MButton',
  inheritAttrs: false,
  setup (props, { emit }) {
    const state = reactive({
      localLoading: false
    })

    const onClick = async () => {
      if (state.localLoading) {
        return
      }
      state.localLoading = true
      console.log('onclick')
      try {
        await Promise.all(emit('click'))
      } finally {
        state.localLoading = false
      }
    }

    return {
      ...toRefs(state),
      onClick
    }
  }
}
</script>

<style></style>
