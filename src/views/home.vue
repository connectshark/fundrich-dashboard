<template>
<div>
  <nav class=" bg-gray-800 text-white py-5">
    <h1 class="text-3xl">{{title}}</h1>
  </nav>
  <div class="py-3 font-sans">
    <p class=" text-gray-700 text-2xl">本網站僅供查詢不提供盈利用途</p>
    <p class=" text-gray-700 text-2xl">本站不會儲存您的帳號密碼</p>
  </div>
  <div>
    <router-link to="/login" class=" text-blue-400">前往登入</router-link>
  </div>
</div>
</template>

<script>
export default {
  setup () {
    return {
      title: '基富通查詢後台'
    }
  }
}
</script>
