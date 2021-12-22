<template>
  <button class="pipi-button" :class="classes">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  name: 'Button',
  props:{
    theme:{type:String},
    size:{type:String},
  },
  setup(props) {
    const {theme,size} = props
    const classes = computed(() => {
      return {[`pipi-theme-${theme}`]:theme,[`pipi-size-${size}`]:size};
    });
    return{classes}
  }
};
</script>

<style lang='scss'>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;

.pipi-button {
  height: $h;
  padding: 8px 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: all 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover, &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.pipi-theme-text{
    background: transparent;
    border-color: transparent;
    box-shadow: none;
  }
  &.pipi-theme-link{
    background: transparent;
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,&:focus{
      color: lighten($blue,10%);
    }
  }
  &.pipi-size-big{
    font-size: 24px;
    height: 40px;
    padding: 8px 14px;
  }
  &.pipi-size-small{
    font-size: 14px;
    height: 28px;
    padding: 8px;
  }
}
</style>