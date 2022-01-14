<template>
  <section>
    <!--    <div class="example">-->
    <header>
      <h3>{{ title }}</h3>
      <div class="tools">
        <svg class="icon">
          <use xlink:href="#icon-code"></use>
        </svg>
      </div>
    </header>
    <main>
      <div class="description">
        <slot name="description"></slot>
      </div>
      <div class="example">
        <slot name="example"></slot>
      </div>
      <div class="code">
        <slot name="code"></slot>
      </div>
    </main>
    <!--    </div>-->
  </section>
</template>

<script lang="ts">
export default {
  name: 'DocDemo',
  props: {title: {type:String}}
}
</script>

<style scoped lang='scss'>
$borderColor: #dcdfe6;

section {
  header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid $borderColor;
    padding: 16px;

    > .tools {
      margin-left: auto;

      .icon {
        cursor: pointer;

        &:hover {
          color: lighten(#24292E, 20%)
        }
      }
    }
  }

  > main {
    padding: 16px;
  }

  margin-top: 16px;
  border: 1px solid $borderColor;
  border-radius: 4px;
}
</style>