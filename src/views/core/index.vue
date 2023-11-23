<template>
  <div class="core">
    <div>123</div>
    <slot></slot>
  </div>
</template>

<script lang="tsx">
import { renderless,setup } from './index'
import { defineComponent,computed,getCurrentInstance } from 'vue'

export default defineComponent({
  name:'ChartCore',
  props: {
    afterConfig: { type: Function },
    afterSetOption: { type: Function },
  },
  emits: ['ready', 'ready-once'],
  setup(props, context) {
    const { proxy } = getCurrentInstance()
    return setup({
      props,
      context,
      renderless,
      proxy
    })
  }
})
</script>
