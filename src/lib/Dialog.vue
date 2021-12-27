<template v-if="visible">
  <div class="pipi-dialog-overlay"></div>
  <div class="pipi-dialog-wrapper">
    <div class="pipi-dialog">
      <header>标题 <span class="pipi-dialog-close"></span></header>
      <main>
        <p>第一行内容</p>
        <p>第二行内容</p>
      </main>
      <footer>
        <Button>取消</Button>
        <Button level="primary">确定</Button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue';

export default {
  name: 'Dialog',
  components:{Button},
  props:{
    visible:{type:Boolean,default:false}
  }
};
</script>

<style lang='scss'>
$radius:4px;
$border-color:#d9d9d9;
$blue: #40a9ff;

.pipi-dialog{
  background: #ffffff;
  border-radius: $radius;
  box-shadow: 0 1px 3px fade-out(black,0.7);
  min-width: 15em;
  max-width: 90%;
  &-overlay{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: fade-out(black,0.7);
  }
  &-wrapper{
    position: fixed;
    z-index: 11;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  > header{
    padding: 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .pipi-dialog-close{
      display: inline-block;
      width: 1em;
      height: 1em;
      position: relative;
      cursor: pointer;
        &:hover:before,&:hover:after{
          background: $blue;
        }
      &:before,&:after{
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
      &:before{
        transform: translate(-50%,-50%) rotate(45deg);
      }
      &:after{
        transform: translate(-50%,-50%) rotate(-45deg);
      }
    }
  }
  > main{
    padding: 12px 16px;
  }
  > footer{
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
}
</style>