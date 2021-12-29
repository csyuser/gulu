<template>
<!--  <Teleport to="body" v-if="appendToBody">-->
<!--    <template v-if="visible">-->
<!--      <div class="pipi-dialog-overlay"></div>-->
<!--      <div class="pipi-dialog-wrapper" @click.self="handleClickOverlay">-->
<!--        <div class="pipi-dialog" :style="dialogStyle">-->
<!--          <header>{{ title }} <span class="pipi-dialog-close" @click="closeDialog"></span></header>-->
<!--          <main>-->
<!--            <slot></slot>-->
<!--          </main>-->
<!--          <footer>-->
<!--            <slot name="footer"></slot>-->
<!--          </footer>-->
<!--        </div>-->
<!--      </div>-->
<!--    </template>-->
<!--  </Teleport>-->
  <template v-if="visible">
    <div class="pipi-dialog-overlay"></div>
    <div class="pipi-dialog-wrapper" @click.self="handleClickOverlay">
      <div class="pipi-dialog" :style="dialogStyle">
        <header>{{ title }} <span class="pipi-dialog-close" @click="closeDialog"></span></header>
        <main>
          <slot></slot>
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import {computed} from 'vue';
import Button from './Button.vue';

export default {
  name: 'Dialog',
  components: {Button},
  props: {
    title: {type: String, default: '提示'},  //弹窗的标题，String，默认“提示”
    visible: {type: Boolean, default: false},  //控制弹窗显示，Boolean，默认false
    closeOnClickOverlay: {type: Boolean, default: true},  //是否点击遮罩关闭弹窗，Boolean，true
    top: {type: String},  //弹窗距离顶部的距离，String，没有默认值，但是若未传的话，top为15vh
    width: {type: String},  //弹窗的宽度，String，没有默认值，但是若未传的话，width为30%
    appendToBody: {type: Boolean, default: false},  //是否挂在到body上，一般用于嵌套的dialog中的inner dialog，Boolean，默认是false
  },
  setup(props, context) {
    const {closeOnClickOverlay, top, width} = props;
    const closeDialog = () => {
      context.emit('update:visible', false);
    };
    const handleClickOverlay = () => {
      if (closeOnClickOverlay) {
        closeDialog();
      }
    };
    const dialogStyle = computed(() => {

      return {
        width,
        marginTop: top
      };
    });
    return {closeDialog, handleClickOverlay, dialogStyle};
  },
};
</script>

<style lang='scss'>
$radius: 4px;
$border-color: #d9d9d9;
$blue: #40a9ff;

.pipi-dialog {
  background: #ffffff;
  border-radius: $radius;
  box-shadow: 0 1px 3px fade-out(black, 0.7);
  min-width: 15em;
  max-width: 100%;
  width: 30%;
  margin: 15vh auto 50px;

  &-overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: fade-out(black, 0.7);
  }

  &-wrapper {
    position: fixed;
    z-index: 11;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  > header {
    padding: 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;

    > .pipi-dialog-close {
      display: inline-block;
      width: 1em;
      height: 1em;
      position: relative;
      cursor: pointer;

      &:hover:before, &:hover:after {
        background: $blue;
      }

      &:before, &:after {
        content: '';
        display: block;
        position: absolute;
        height: 1px;
        background: black;
        width: 100%;
        top: 50%;
        left: 50%;
        transition: background-color 250ms;
      }

      &:before {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    > .pipi-dialog-footer {
      display: block;
      padding: 12px 16px;
      text-align: right;
      border-top: 1px solid $border-color;
    }

  }
}
</style>