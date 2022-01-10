<template>
  <TopNav></TopNav>
  <div class="banner">
    <h1>皮皮UI</h1>
    <h2>一个快乐的 UI 框架</h2>
    <p class="actions">
      <a href="https://github.com">GitHub</a>
      <router-link to="/doc">开始</router-link>
    </p>
  </div>
  <ul class="features">
    <li>
      <svg class="icon">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <h3>基于 Vue 3</h3>
      <p>骄傲地使用了 Vue 3 Composition API</p>
    </li>
    <li>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <h3>基于 TypeScript </h3>
      <p>源代码采用 TypeScript 书写（非严格检查）</p>
    </li>
    <li>
      <svg class="icon">
        <use xlink:href="#icon-light"></use>
      </svg>
      <h3>代码易读</h3>
      <p>每个组件的源代码都极其简洁</p>
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
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #e28746;
  line-height: 1.5;
  background: linear-gradient(150deg, rgba(246, 236, 213, 1) 0%, rgba(254, 192, 138, 1) 100%);;
  clip-path: ellipse(80% 60% at 53% 40%);

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #ef9452;
      display: inline-block;
      border-radius: 4px;
      padding: 8px 16px;
      color: #ffffff;
    }
  }
}

.features {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  margin: 64px auto;

  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }

  > li {
    margin: 16px 0;
    display: grid;
    justify-content: start;
    align-content: space-between;
    grid-template-areas:
    'icon title'
    'icon text';
    grid-template-columns: 80px auto;
    grid-template-rows: 1fr auto;
    cursor: pointer;

    > svg {
      grid-area: icon;
      width: 64px;
      height: 64px;
    }

    > h3 {
      grid-area: title;
      font-size: 28px;
    }

    > p {
      grid-area: text;
    }
  }

}

</style>