<template>
  <div class="pb-2">
    <nav class="bg-gray-800 text-white">
      <h2 class="text-2xl font-sans  py-2">基金總覽</h2>
      <ul>
        <li class=" inline-block mx-3">
          <router-link to="/" class=" text-blue-300">回首頁</router-link>
        </li>
      </ul>
    </nav>
    <Fund
      v-for="item in list" :key="item.id"
      :time="item.day"
      :name="item.name"
      :id="item.id"
      :risk="item.risk"
      :gain_all="item.gain_all"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Fund from '../components/fund.vue'
import api from '../lib/api'
export default {
  components: {
    Fund
  },
  setup () {
    const store = useStore()
    const token = computed(() => store.state.token)
    const bfno = computed(() => store.state.BFNo)
    const list = computed(() => store.getters.formatList)
    api.getTradeInfo(token.value, bfno.value)
      .then(res => {
        store.commit('setFundList', res)
      })
    return {
      list
    }
  }
}
</script>