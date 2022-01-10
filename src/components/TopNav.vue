<template>
  <div class="topNav">
    <h3 class="logo" @click="$router.push('/')">
      <svg class="icon">
        <use xlink:href="#icon-cloud"></use>
      </svg>
    </h3>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleMenu" v-if="toggleMenuButtonVisible">
      <svg class="icon">
        <use xlink:href="#icon-toggleMenu"></use>
      </svg>
    </span>
  </div>
</template>

<script lang="ts">
import {inject,Ref} from 'vue'

export default {
  name: 'TopNav',
  props:{
    toggleMenuButtonVisible:{type:Boolean,default:false}
  },
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
$textColor:#e28746;

.topNav {
  //background: $mainColor;
  background: linear-gradient(150deg, rgba(246,236,213,1) 0%, rgba(252,202,156,1) 100%);
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
  box-shadow: 0 1px 3px 0 rgba(226, 135, 70,0.3);

  > .logo {
    max-width: 6em;
    margin-right: auto;
    cursor: pointer;
    > svg{
      width: 32px;
      height: 32px;
      color: $textColor;
      &:hover{
        color: lighten($textColor,5%);
      }
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    color: #ef6909;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    cursor: pointer;
    > svg{
      width: 24px;
      height: 24px;
      color: $textColor;
    }
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