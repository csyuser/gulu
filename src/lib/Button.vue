<template>
  <button class="pipi-button" :class="classes">
    <span class="pipi-button-inner-span">
          <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  name: 'Button',
  props:{
    theme:{type:String},
    size:{type:String},
    level:{type:String},
  },
  setup(props) {
    const {theme,size,level} = props
    const classes = computed(() => {
      return {[`pipi-theme-${theme}`]:theme,[`pipi-size-${size}`]:size,[`pipi-level-${level}`]:level};
    });
    return{classes}
  }
};
</script>

<style lang='scss'>
//$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$yellow: #ebb563;

.pipi-button {
  //height: $h;
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
  > .pipi-button-inner-span{
    line-height:1;
    background: transparent;
  }
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
  &.pipi-size-big{
    padding: 8px 14px;
    > .pipi-button-inner-span{
      font-size: 24px;
    }
  }
  &.pipi-size-small{
    padding: 6px;
    > .pipi-button-inner-span{
      font-size: 12px;
    }
  }
  &.pipi-level-primary{
    background: $blue;
    color: #ffffff;
    border: 1px solid $blue;
    &:hover, &:focus{
      background: lighten($blue,10%);
    }
  }
  &.pipi-level-warn{
    background: $yellow;
    color: #ffffff;
    border: 1px solid $yellow;
    &:hover, &:focus{
      background: lighten($yellow,10%);
    }
  }
  &.pipi-level-danger{
    background: $red;
    border: 1px solid $red;
    color: #ffffff;
    &:hover, &:focus{
      background: lighten($red,10%);
    }
  }
  &.pipi-theme-text{
    background: transparent;
    border-color: transparent;
    box-shadow: none;
    &.pipi-level-warn {
      color: $yellow;
      &:hover, &:focus {
        background:transparent;
        color: darken($yellow, 10%);
      }
    }
    &.pipi-level-danger {
      color: $red;
      &:hover, &:focus {
        background:transparent;
        color: darken($red, 10%);
      }
    }

  }
  &.pipi-theme-link{
    background: transparent;
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,&:focus{
      color: lighten($blue,10%);
    }
    &.pipi-level-warn {
      color: $yellow;
      &:hover, &:focus {
        background:transparent;
        color: darken($yellow, 10%);
      }
    }
    &.pipi-level-danger {
      color: $red;
      &:hover, &:focus {
        background:transparent;
        color: darken($red, 10%);
      }
    }
  }
}
</style>