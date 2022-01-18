<template>
  <button class="pipi-button" :class="classes" :disabled="disabled">
    <span class="pipi-loading-indicator" v-if="loading"></span>
    <span class="pipi-button-inner-span">
          <slot/>
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
    disabled:{type:Boolean},
    loading:{type:Boolean},
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
$grey:grey;

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
  > .pipi-loading-indicator{
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 4px;
    border-style: solid;
    border-radius: 8px;
    border-width: 2px;
    border-color: $blue $blue $blue transparent;
    animation: pipi-spin 1s infinite linear;
  }
  > .pipi-button-inner-span{
    line-height:1;
    background: transparent;
  }
  @keyframes pipi-spin {
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
  }
  & + & {
    margin-left: 8px;
  }
  &:hover, &:focus {
    color: $blue;
    border-color: $blue;
  }
  &[disabled]{
    cursor: not-allowed;
    color: #c0cfe3;
    border-color: #c0cfe3;
    &:hover, &:focus {
      color: #c0cfe3;
      border-color: #c0cfe3;
    }
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
    &[disabled]{
      background: lighten($blue,10%);
      border: 1px solid lighten($blue,10%);
      &:hover, &:focus{
        color: #ffffff;
      }
    }
  }
  &.pipi-level-warn{
    background: $yellow;
    color: #ffffff;
    border: 1px solid $yellow;
    &:hover, &:focus{
      background: lighten($yellow,10%);
    }
    &[disabled]{
      background: lighten($yellow,10%);
      border: 1px solid lighten($yellow,10%);
      &:hover, &:focus{
        color: #ffffff;
      }
    }
  }
  &.pipi-level-danger{
    background: $red;
    border: 1px solid $red;
    color: #ffffff;
    &:hover, &:focus{
      background: lighten($red,10%);
    }
    &[disabled]{
      background: lighten($red,10%);
      border: 1px solid lighten($red,10%);
      &:hover, &:focus{
        color: #ffffff;
      }
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
    &[disabled]{
      &:hover, &:focus {
        border-color: transparent;
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
      text-decoration: underline;
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
    &[disabled]{
      &:hover, &:focus {
        border-color: transparent;
      }
    }
  }

}
</style>