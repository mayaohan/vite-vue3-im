<template>
  <li
    :class="[
      nsMenuItem.b(),
      nsMenuItem.is('active', active),
      nsMenuItem.is('disabled', disabled),
    ]"
    role="menuitem"
    tabindex="-1"
    @click="handleClick"
  >
    <el-tooltip
      v-if="
        parentMenu.type.name === 'ddxMenu' &&
        rootMenu.props.collapse &&
        $slots.title
      "
      :effect="rootMenu.props.popperEffect"
      placement="right"
      :fallback-placements="['left']"
      persistent
    >
      <template #content>
        <slot name="title" />
      </template>
      <div :class="nsMenu.be('tooltip', 'trigger')">
        <slot />
      </div>
    </el-tooltip>
    <template v-else>
      <slot />
      <slot name="title" />
    </template>
  </li>
</template>

<script >

import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRef,
} from 'vue'
// import { throwError } from '@element-plus/utils'
import { useDeprecated, useNamespace,flattedChildren } from '../use'
import useMenu from './util'

const COMPONENT_NAME = 'ddxMenuItem'
export default defineComponent({
  name: COMPONENT_NAME,
  props: {
    index: {
      default: null,
    },
    route: {
      type: String,
    },
    disabled: Boolean,
  },
  emits: {
    click: (item) => typeof item.index === 'string' && Array.isArray(item.indexPath),
  },

  setup(props, { emit,$slots }) {
    const instance = getCurrentInstance()
    const rootMenu = inject('rootMenu')
    const nsMenu = useNamespace('menu')
    const nsMenuItem = useNamespace('menu-item')
    // if (!rootMenu) throwError(COMPONENT_NAME, 'can not inject root menu')

    const { parentMenu, indexPath } = useMenu(instance, toRef(props, 'index'))
    // console.log(parentMenu.value)
    const subMenu = inject(`subMenu:${parentMenu.value.uid}`)
    // if (!subMenu) throwError(COMPONENT_NAME, 'can not inject sub menu')

    const active = computed(() => props.index === rootMenu.activeIndex)
    const item = reactive({
      index: props.index,
      indexPath,
      active,
    })

    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.handleMenuItemClick({
          index: props.index,
          indexPath: indexPath.value,
          route: props.route,
        })
        emit('click', item)
      }
    }

    onMounted(() => {
      subMenu.addSubMenu(item)
      rootMenu.addMenuItem(item)
    })

    onBeforeUnmount(() => {
      subMenu.removeSubMenu(item)
      rootMenu.removeMenuItem(item)
    })

    return {
      parentMenu,
      rootMenu,
      active,
      nsMenu,
      nsMenuItem,
      handleClick,
    }
  },
})
</script>
