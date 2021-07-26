<template>
  <TopNav></TopNav>
  <div class="doc">
    <aside v-if="menuVisible">侧边栏</aside>
    <main>主要内容</main>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {inject,Ref} from 'vue'

export default {
  name: 'Doc',
  components:{TopNav},
  setup(){
    const menuVisible  = inject<Ref<boolean>>('menuVisible')
    return {menuVisible}
  }
};
</script>

<style scoped lang='scss'>
.doc{
  margin-top: 100px;
}
</style>