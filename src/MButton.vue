<template>
  <button @click="onClick" :class="classes">{{localLoading}}<slot/></button>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
export default {
  name: 'MButton',
  inheritAttrs: false,
  setup (props, { emit }) {
    const state = reactive({
      localLoading: false
    })

    state.classes = computed(() => {
      return {
        'is-loading': state.localLoading
      }
    })

    const onClick = async () => {
      if (state.localLoading) {
        return
      }
      state.localLoading = true
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
