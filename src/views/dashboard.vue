<template>
  <div class="pb-2">
    <Fund
      v-for="item in list" :key="item.id"
      :time="item.day"
      :name="item.name"
      :id="item.id"
      :risk="item.risk"
      :gain_all="item.gain_all"
      :value="item.value"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Fund from '../components/fund.vue'
import api from '../lib/api'

export default {
  components: {
    Fund
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const token = computed(() => store.state.token)
    const bfno = computed(() => store.state.BFNo)
    const list = computed(() => store.getters.formatList)
    api.getTradeInfo(token.value, bfno.value)
      .then(res => {
        store.commit('setFundList', res)
      })
      .catch(() => {
        store.commit('clearUserInfo')
        router.push('/login')
      })
    return {
      list
    }
  }
}
</script>