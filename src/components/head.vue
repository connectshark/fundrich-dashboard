<template>
<header class=" bg-gray-800 text-white py-5">
  <h1 class="text-3xl">
    <router-link to="/">基富通查詢後台</router-link>
  </h1>
  <nav>
    <ul>
      <li class=" inline-block mx-2 hover:underline" v-if="!token">
        <router-link to="/login">登入</router-link>
      </li>
      <li class="inline-block mx-2 hover:underline">
        <router-link to="/dashboard">後台</router-link>
      </li>
    </ul>
  </nav>
</header>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const token = computed(() => store.state.token)
    return {
      token
    }
  }
}
</script>