<template>
  <div class="">
    <nav class="bg-gray-800 text-white">
      <h2 class="text-2xl font-sans  py-2">基金總覽</h2>
      <ul>
        <li class=" inline-block mx-3">
          <router-link to="/" class=" text-blue-300">回首頁</router-link>
        </li>
        <li class=" inline-block mx-3">
          <router-link to="/dashboard/detail" class=" text-blue-300">列表</router-link>
        </li>
        <li class=" inline-block mx-3">
          <router-link to="/dashboard/chart" class=" text-blue-300">圖表</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  setup () {
    return {

    }
  }
}
</script>