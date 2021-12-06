<template>
  <div class="topNav">
    <h3 class="logo" @click="$router.push('/')">logo</h3>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
</template>

<script lang="ts">
import {inject,Ref} from 'vue'

export default {
  name: 'TopNav',
  setup(){
    const menuVisible = inject < Ref < boolean >> ('menuVisible')
    const toggleMenu = ()=>{
      menuVisible.value = !menuVisible.value
    }
    return {toggleMenu}
  }
  // setup() {
  //   const menuVisible = inject < Ref < boolean >> ('menuVisible') // get
  //   const toggleMenu = () => {
  //     menuVisible.value = !menuVisible.value
  //   }
  //   return {toggleMenu}
  // },
}
</script>

<style scoped lang='scss'>
@import "src/assets/style/helper.scss";
.topNav {
  background: $bannerColor;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.3);

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    width: 24px;
    height: 24px;
    background: $mainColor;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.3);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>