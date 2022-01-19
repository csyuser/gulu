<demo>常规用法</demo>

<template>
  <Tabs v-model:active-name="activeName">
    <TabPane title="标题1" name="first">内容1</TabPane>
    <TabPane title="标题2222" name="second">内容2222</TabPane>
    <TabPane title="标题333333333" name="third">内容333333333</TabPane>
  </Tabs>
</template>

<script lang="ts">
import {ref} from 'vue'
import Tabs from '../../lib/Tabs.vue';
import TabPane from '../../lib/TabPane.vue';

export default {
  name: 'SwitchNormal',
  components: {Tabs, TabPane},
  setup(){
    const activeName = ref('second')
    return {activeName}
  },
}
</script>
