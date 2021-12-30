<template>
  <div class="pipi-tabs">
    <div class="pipi-tabs-nav">
      <div class="pipi-tabs-nav-item pipi-selected" v-for="item in navs" :key="item.name">{{ item.title }}</div>
    </div>
    <div class="pipi-tabs-content">
      <component :is="defaultSlots[0]"></component>
      <component :is="defaultSlots[1]"></component>
      <component :is="defaultSlots[2]"></component>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';
import TabPane from './TabPane.vue';

export default {
  name: 'Tabs',
  setup(props, context) {
    const defaultSlots = context.slots.default();
    console.log(defaultSlots);
    defaultSlots.forEach((item) => {
      if (item.type !== TabPane) {
        throw new Error('Tabs标签里面只能是TabPane标签');
      }
    });
    const navs = defaultSlots.map((item) => {
      return item.props;
    });
    return {defaultSlots, navs};
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

    &-item {
      margin: 0 16px;
      padding: 8px 0;
      cursor: pointer;

      &:first-child {margin-left: 0}
      &:last-child {margin-right: 0}
      &.pipi-selected{color: $blue;}
    }
  }
  &-content{
    padding: 8px 0;
    color: $color;
  }
}
</style>