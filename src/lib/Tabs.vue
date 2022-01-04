<template>
  <div class="pipi-tabs">
    <div class="pipi-tabs-nav">
      <div class="pipi-tabs-nav-item" v-for="item in navs" :key="item.name" :class="{'pipi-selected':item.name === activeName}"
          :ref="setItemRef" @click="select(item.name)">{{ item.title }}</div>
      <div class="pipi-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="pipi-tabs-content">
      <component :is="defaultSlots[0]"></component>
      <component :is="defaultSlots[1]"></component>
      <component :is="defaultSlots[2]"></component>
    </div>
  </div>
</template>

<script lang="ts">
import {ref,onMounted,onUpdated} from 'vue';
import TabPane from './TabPane.vue';

export default {
  name: 'Tabs',
  props:{
    activeName:{type:String}
  },
  setup(props, context) {
    const selectedNav = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)

    const x = ()=>{
      let {width} = selectedNav.value.getBoundingClientRect()
      indicator.value.style.width = `${width}px`
    }

    onMounted(x)
    onUpdated(x)
    const defaultSlots = context.slots.default();
    defaultSlots.forEach((item) => {
      if (item.type !== TabPane) {
        throw new Error('Tabs标签里面只能是TabPane标签');
      }
    });
    const navs = defaultSlots.map((item) => {
      return item.props;
    });
    const setItemRef = (el)=>{
        if(el?.classList.contains('pipi-selected')){
          selectedNav.value = el;
        }
    }
    const select = (name:String)=>{
      context.emit('update:activeName',name)
    }

    return {defaultSlots, navs,setItemRef,indicator,select};
  }
};
</script>

<style lang='scss'>
@import "public.scss";

.pipi-tabs {
  &-nav {
    display: flex;
    border-bottom: 2px solid $border-color;
    color: $color;
    position: relative;

    &-item {
      margin: 0 16px;
      padding: 8px 0;
      cursor: pointer;

      &:first-child {margin-left: 0}
      &:last-child {margin-right: 0}
      &.pipi-selected{color: $blue;}
    }
    &-indicator{
      position: absolute;
      left: 0;
      bottom: -2px;
      height: 2px;
      background: $blue;
    }
  }
  &-content{
    padding: 8px 0;
    color: $color;
  }
}
</style>