<template>
  <TopNav></TopNav>
  <div class="home">
    <router-link to="/Doc">文档</router-link>
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'

export default {
  name: 'Home',
  components: {TopNav}
}
</script>

<style scoped lang='scss'>
.home{
  margin-top: 100px;
}
</style>