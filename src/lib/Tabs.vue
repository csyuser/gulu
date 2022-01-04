<template>
  <div class="pipi-tabs">
    <div class="pipi-tabs-nav" ref="navContainer">
      <div class="pipi-tabs-nav-item" v-for="item in navs" :key="item.name" :class="{'pipi-selected':item.name === activeName}"
          :ref="setItemRef" @click="select(item.name)">{{ item.title }}</div>
      <div class="pipi-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="pipi-tabs-content">
      <component :is="current" :key="current.props.name"></component>
    </div>
  </div>
</template>

<script lang="ts">
import {ref,onMounted,onUpdated,computed} from 'vue';
import TabPane from './TabPane.vue';

export default {
  name: 'Tabs',
  props:{
    activeName:{type:String}
  },
  setup(props, context) {
    const selectedNav = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const navContainer = ref<HTMLDivElement>(null)

//设置选中标题nav的宽以及位置
    const x = ()=>{
      let {width} = selectedNav.value.getBoundingClientRect()
      let {left:left1} = navContainer.value.getBoundingClientRect()
      let {left:left2} = selectedNav.value.getBoundingClientRect()
      let xxx = left2 - left1
      indicator.value.style.width = `${width}px`
      indicator.value.style.left = `${xxx}px`
    }

    onMounted(x)
    onUpdated(x)
//获取tabs组件的默认slot，并判断只能是TabPane标签
    const defaultSlots = context.slots.default();
    defaultSlots.forEach((item) => {
      if (item.type !== TabPane) {
        throw new Error('Tabs标签里面只能是TabPane标签');
      }
    });
//从默认slot里面获取slot的props，用以渲染标题
    const navs = defaultSlots.map((item) => {
      return item.props;
    });
//设置navItem的ref，找到选中的navItem
    const setItemRef = (el)=>{
        if(el?.classList.contains('pipi-selected')){
          selectedNav.value = el;
        }
    }
//标题nav的select事件
    const select = (name:String)=>{
      context.emit('update:activeName',name)
    }
    const current = computed(()=>{
      return defaultSlots.filter((item)=>{
       return  item.props.name === props.activeName
      })[0]
    })
    return {defaultSlots, navs,setItemRef,indicator,navContainer,select,current};
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
      //left: 0;
      bottom: -2px;
      height: 2px;
      background: $blue;
      transition: all 250ms;
    }
  }
  &-content{
    padding: 8px 0;
    color: $color;
  }
}
</style>