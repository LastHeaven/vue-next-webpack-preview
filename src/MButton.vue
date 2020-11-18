<template>
  <button @click="onSClick" :class="classes">{{localLoading}}<slot/></button>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
export default {
  name: 'MButton',
  inheritAttrs: false,
  props: {
    onClick: {
      type: Function,
      default: () => () => {}
    }
  },
  setup (props, { emit }) {
    const state = reactive({
      localLoading: false
    })

    state.classes = computed(() => {
      return {
        'is-loading': state.localLoading
      }
    })

    const onSClick = async () => {
      if (state.localLoading) {
        return
      }
      state.localLoading = true
      try {
        await props.onClick()
      } finally {
        state.localLoading = false
      }
    }

    return {
      ...toRefs(state),
      onSClick
    }
  }
}
</script>

<style></style>
