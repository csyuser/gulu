<template>
  <section>
    <!--    <div class="example">-->
    <header>
      <h3>{{ title }}</h3>
      <ul class="tools">
        <li @click="toggleCodeVisible">
          <svg class="icon">
            <use xlink:href="#icon-code"></use>
          </svg>
        </li>
      </ul>
    </header>
    <main>
      <section class="description">
        <slot name="description"></slot>
      </section>
      <section class="example">
        <slot name="example"></slot>
      </section>
      <section class="code" v-if="codeVisible">
        <slot name="code"></slot>
      </section>
    </main>
    <!--    </div>-->
  </section>
</template>

<script lang="ts">
import {ref} from 'vue'

export default {
  name: 'DocDemo',
  props: {title: {type: String}},
  setup() {
    const codeVisible = ref(false)
    const toggleCodeVisible = () => {
      codeVisible.value = !codeVisible.value
    };
    return {codeVisible,toggleCodeVisible};
  }
};
</script>

<style scoped lang='scss'>
$borderColor: #dcdfe6;

section {
  margin-top: 16px;
  border: 1px solid $borderColor;
  border-radius: 8px;
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
    padding: 0 16px 16px;
    > section{
      margin-top: 16px;
      border: none;
    }
  }
}
</style>