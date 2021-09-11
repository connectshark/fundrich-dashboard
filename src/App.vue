<template>
  <Head/>
  <router-view></router-view>
</template>

<script>
import { useStore } from 'vuex'
import Head from './components/head.vue'
export default {
  components: {
    Head
  },
  setup () {
    const store = useStore()
    store.dispatch('init')
  }
}
</script>


<style>
#app {
  text-align: center;
}
</style>
