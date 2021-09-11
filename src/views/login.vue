<template>
  <div class="pt-10">
    <div class=" w-5/6 mx-auto bg-white rounded-xl p-3 max-w-screen-md">
      <h2 class="mb-4 text-gray-700 text-2xl">基富通登入</h2>
      <div class="mb-4 w-7/12 mx-auto">
        <input type="text" v-model.trim="id" placeholder="身份證字號" maxlength="10" class="placeholder-opacity-80 w-full text-base p-1 rounded-xl border-2 border-yellow-300 focus:shadow transition focus:outline-none focus:ring focus:border-blue-300">
      </div>
      <div class="mb-4 w-7/12 mx-auto">
        <input type="password" v-model.trim="pw" @keyup.enter="login" placeholder="登入密碼" class="placeholder-opacity-80 border-2 border-yellow-300 w-full text-base p-1 rounded-xl focus:shadow transition focus:outline-none focus:ring focus:border-blue-300">
      </div>
      <div @click="login" class="text-white bg-blue-600 w-40 p-2 rounded-xl mx-auto cursor-pointer hover:bg-blue-400 transition">
        <p v-if="loading"><i class='bx bx-loader bx-spin' ></i></p>
        <p v-else>登入</p>
      </div>
    </div>
  </div>
  
</template>

<script>
import { ref } from 'vue'
import api from '../lib/api'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const store = useStore()
    const router = useRouter()
    const id = ref('')
    const pw = ref('')
    const loading = ref(false)
    const login = () => {
      if (id.value === '' || pw.value === '' || loading.value) return
      loading.value = true
      api.login(id.value, pw.value)
        .then(res => {
          store.commit('setUserInfo', res)
          router.push('/dashboard')
          loading.value = false
        })
        .catch(err => {
          loading.value = false
        })
    }
    
    return {
      id,
      pw,
      login,
      loading
    }
  }
}
</script>