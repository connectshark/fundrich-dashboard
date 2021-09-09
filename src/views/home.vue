<template>
  <nav class=" bg-gray-800 text-white">
    <h1 class="text-base">{{title}}</h1>
    <ul>
      <li>
        <router-link to="/login" class=" text-xs">登入</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  setup () {
    return {
      title: '基富通後台'
    }
  }
}
</script>
