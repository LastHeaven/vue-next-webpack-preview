<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import store from '@/store/install'

export default {
  setup () {
    store.use()
    return {}
  }
}
</script>

<style></style>
