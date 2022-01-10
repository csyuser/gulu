<template>
  <div class="home-wrapper">
    <TopNav></TopNav>
    <div class="banner">
      <h1>皮皮UI</h1>
      <h2>一个快乐的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <ul class="features">
    <li>
      <svg class="icon">
        <use xlink:href="#icon-vue"></use>
      </svg>
    </li>
    <li>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
    </li>
    <li>
      <svg class="icon">
        <use xlink:href="#icon-light"></use>
      </svg>
    </li>
  </ul>
</template>

<script>
import TopNav from '../components/TopNav.vue'

export default {
  name: 'Home',
  components: {TopNav}
}
</script>
<style scoped lang='scss'>
@import "src/assets/style/helper.scss";
.home-wrapper{
  //background: rgb(240,218,211);
  //background: linear-gradient(150deg, rgba(240,218,211,1) 0%, rgba(249,191,143,1) 100%);
  background: linear-gradient(150deg, rgba(246,236,213,1) 0%, rgba(254,192,138,1) 100%);;
  clip-path: ellipse(80% 60% at 53% 40%);
  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #e28746;
    line-height: 1.5;
    > .actions{
      padding: 8px 0;
      a {
        margin:0 8px;
        background: #ef9452;
        display: inline-block;
        border-radius: 4px;
        padding: 8px 16px;
        color: #ffffff;
      }
    }
  }
}

</style>