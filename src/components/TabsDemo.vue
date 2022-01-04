<template>
  <section>
    <p>基本用法：</p>
    <Tabs v-model:active-name="activeName">
      <TabPane title="标题1" name="first">内容1</TabPane>
      <TabPane title="标题2" name="second">内容2</TabPane>
      <TabPane title="标题3" name="third">内容3</TabPane>
    </Tabs>
  </section>
</template>

<script>
import {ref} from 'vue'
import Tabs from '../lib/Tabs.vue'
import TabPane from '../lib/TabPane.vue'

export default {
  name: 'TabsDemo',
  components: {Tabs, TabPane},
  setup(){
    const activeName = ref('second')
    return {activeName}
  },
}
</script>

<style scoped lang='scss'>
section {
  //display: flex;
  //align-items: center;
  margin-top: 16px;

  p {
    line-height: 1.5;
  }
}
</style>