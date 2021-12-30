<template>
  <section>
    <p>基本用法：</p>
    <Tabs>
      <TabPane title="标题1" name="first">内容1</TabPane>
      <TabPane title="标题2" name="second">内容2</TabPane>
    </Tabs>
  </section>
</template>

<script>
import Tabs from '../lib/Tabs.vue'
import TabPane from '../lib/TabPane.vue'

export default {
  name: 'TabsDemo',
  components: {Tabs, TabPane}
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