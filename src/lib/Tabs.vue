<template>
  <div class="pipi-tabs">
    <div class="pipi-tabs-nav"></div>
    <div class="pipi-tabs-content">
<!--      <component :is=""></component>-->
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'
import TabPane from './TabPane.vue';

export default {
  name: 'Tabs',
  setup(props, context) {
    const defaultSlots = context.slots.default()
    defaultSlots.forEach((item)=>{
      if (item.type !==TabPane){
        throw new Error('Tabs标签里面只能是TabPane标签')
      }
    })
  }
};
</script>

<style lang='scss'>

</style>