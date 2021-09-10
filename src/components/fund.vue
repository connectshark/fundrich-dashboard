<template>
<div class="mb-5 text-left bg-white w-11/12 mx-auto rounded shadow p-4 text-sm" @click="active = !active">
  <h4 class="text-base"><span class="text-sm text-red-900">{{time}}</span>{{name}}</h4>
  <p v-if="active" class="text-left">{{risk}}</p>
  <p v-if="gain_all < 0">含息報酬率(%)<span class=" text-green-400"><i class='bx bx-trending-down'></i>{{gain_all}}</span></p>
  <p v-else>含息報酬率(%)<span class=" text-red-400"><i class='bx bx-trending-up'></i>{{gain_all}}</span></p>
  <p>市值<i class='bx bx-dollar' ></i><span>22401</span></p>
</div>
</template>

<script>
import dayjs from 'dayjs'
import { ref } from 'vue'
export default {
  props: {
    time: {
      type: String
    },
    name: {
      type: String
    },
    id: {
      type: String
    },
    risk: {
      type: String
    },
    gain_all: {
      type: Number
    }
  },
  setup (props) {
    const active = ref(true)
    return {
      time: dayjs(props.time).format('MM/DD'),
      active
    }
  }
}
</script>