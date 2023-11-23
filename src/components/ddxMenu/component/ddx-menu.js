
import {
  computed,
  defineProps,
  getCurrentInstance,
  h,
  nextTick,
  onMounted,
  provide,
  reactive,
  ref,
  watch,
  watchEffect,
  defineEmits,
  defineComponent
} from 'vue'

import { useDeprecated, useNamespace,flattedChildren } from '../use'
import { useResizeObserver } from '@vueuse/core'
import { useMenuCssVar } from '../use/use-menu-css-var'
import ddxSubMenu from './ddx-sub-menu'
import ElMenuCollapseTransition from './menu-collapse-transition.vue'
import Menubar from '../utils/menu-bar'
import { More } from '@element-plus/icons-vue'
const checkIndexPath = (indexPath) => Array.isArray(indexPath) && indexPath.every((path) => typeof path === 'string')
const xprops = {
  mode: {
    type: String,
    values: ['horizontal', 'vertical'],
    default: 'vertical',
  },
  defaultActive: {
    type: String,
    default: '',
  },
  defaultOpeneds: {
    default: () => [],
  },
  uniqueOpened: Boolean,
  router: Boolean,
  menuTrigger: {
    type: String,
    values: ['hover', 'click'],
    default: 'hover',
  },
  collapse: Boolean,
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
  collapseTransition: {
    type: Boolean,
    default: true,
  },
  ellipsis: {
    type: Boolean,
    default: true,
  },
  popperEffect: {
    type: String,
    values: ['dark', 'light'],
    default: 'dark',
  },
}

const xemit = {
  close: (index, indexPath) => typeof index === 'string' && checkIndexPath(indexPath),
  open: (index, indexPath) => typeof index === 'string' && checkIndexPath(indexPath),
  select: ( index, indexPath, item, routerResult ) =>
    typeof index === 'string' && checkIndexPath(indexPath) && item !== null && typeof item === 'object' &&
    (routerResult === undefined || routerResult instanceof Promise)
}
export default defineComponent({
  name: 'ddxMenu',

  props: xprops,
  emits: xemit,
  setup(props, { emit, slots, expose }) {
    const menu = ref()
    const instance = getCurrentInstance()
    const isMenuPopup = computed(() => {
      return (
        props.mode === 'horizontal' ||
        (props.mode === 'vertical' && props.collapse)
      )
    })
    const nsMenu = useNamespace('menu')
    const nsSubMenu = useNamespace('sub-menu')
    const router = instance.appContext.config.globalProperties.$router
    const sliceIndex = ref(-1)

    const openedMenus = ref(
      props.defaultOpeneds && !props.collapse
        ? props.defaultOpeneds.slice(0)
        : []
    )
    const activeIndex = ref(props.defaultActive)
    const items = ref({})
    const subMenus = ref({})

    const isNil = (array) => !(Array.isArray(array) && array.length)
    // methods
    const initMenu = () => {
      const activeItem = activeIndex.value && items.value[activeIndex.value]
      if (!activeItem || props.mode === 'horizontal' || props.collapse) return

      const indexPath = activeItem.indexPath

      // 展开该菜单项的路径上所有子菜单
      // expand all subMenus of the menu item
      indexPath.forEach((index) => {
        const subMenu = subMenus.value[index]
        subMenu && openMenu(index, subMenu.indexPath)
      })
    }

    const openMenu = (index, indexPath) => {
      if (openedMenus.value.includes(index)) return
      // 将不在该菜单路径下的其余菜单收起
      // collapse all menu that are not under current menu item
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index) =>
          indexPath.includes(index)
        )
      }
      openedMenus.value.push(index)
      emit('open', index, indexPath)
    }

    const close = (index) => {
      const i = openedMenus.value.indexOf(index)
      if (i !== -1) {
        openedMenus.value.splice(i, 1)
      }
    }

    const closeMenu = (index, indexPath) => {
      close(index)
      emit('close', index, indexPath)
    }

    const handleSubMenuClick = ({
      index,
      indexPath,
    }) => {
      const isOpened = openedMenus.value.includes(index)

      if (isOpened) {
        closeMenu(index, indexPath)
      } else {
        openMenu(index, indexPath)
      }
    }

    const handleMenuItemClick = (
      menuItem
    ) => {
      if (props.mode === 'horizontal' || props.collapse) {
        openedMenus.value = []
      }

      const { index, indexPath } = menuItem
      if (isNil(index) || isNil(indexPath)) return

      if (props.router && router) {
        const route = menuItem.route || index
        const routerResult = router.push(route).then((res) => {
          if (!res) activeIndex.value = index
          return res
        })
        emit(
          'select',
          index,
          indexPath,
          { index, indexPath, route },
          routerResult
        )
      } else {
        activeIndex.value = index
        emit('select', index, indexPath, { index, indexPath })
      }
    }

    const updateActiveIndex = (val) => {
      const itemsInData = items.value
      const item =
        itemsInData[val] ||
        (activeIndex.value && itemsInData[activeIndex.value]) ||
        itemsInData[props.defaultActive]

      if (item) {
        activeIndex.value = item.index
      } else {
        activeIndex.value = val
      }
    }

    const calcSliceIndex = () => {
      console.log(menu.value)
      if (!menu.value) return -1
      const items = Array.from(menu.value?.childNodes ?? []).filter(
        (item) =>
          // remove comment type node #12634
          item.nodeName !== '#comment' &&
          (item.nodeName !== '#text' || item.nodeValue)
      )
      // console.log(items)
      const moreItemWidth = 64
      const paddingLeft = Number.parseInt(
        getComputedStyle(menu.value).paddingLeft,
        10
      )
      const paddingRight = Number.parseInt(
        getComputedStyle(menu.value).paddingRight,
        10
      )
      // console.log(menu.value.clientWidth)
      const menuWidth = menu.value.clientWidth - paddingLeft - paddingRight
      let calcWidth = 0
      let sliceIndex = 0
      items.forEach((item, index) => {
        // console.log(item.offsetWidth)
        calcWidth += item.offsetWidth || 0
        if (calcWidth <= menuWidth - moreItemWidth) {
          sliceIndex = index + 1
        }
      })
      // console.log(sliceIndex,items.length)
      return sliceIndex === items.length ? -1 : sliceIndex
    }

    // Common computer monitor FPS is 60Hz, which means 60 redraws per second. Calculation formula: 1000ms/60 ≈ 16.67ms, In order to avoid a certain chance of repeated triggering when `resize`, set wait to 16.67 * 2 = 33.34
    const debounce = (fn, wait = 33.34) => {
      let timmer
      return () => {
        timmer && clearTimeout(timmer)
        timmer = setTimeout(() => {
          fn()
        }, wait)
      }
    }

    let isFirstTimeRender = true
    const handleResize = () => {
      // console.log(12345)
      const callback = () => {
        sliceIndex.value = -1
        nextTick(() => {
          sliceIndex.value = calcSliceIndex()
        })
      }
      // execute callback directly when first time resize to avoid shaking
      isFirstTimeRender ? callback() : debounce(callback)()
      isFirstTimeRender = false
    }

    watch(
      () => props.defaultActive,
      (currentActive) => {
        if (!items.value[currentActive]) {
          activeIndex.value = ''
        }
        updateActiveIndex(currentActive)
      }
    )

    watch(
      () => props.collapse,
      (value) => {
        if (value) openedMenus.value = []
      }
    )

    watch(items.value, initMenu)

    let resizeStopper
    watchEffect(() => {
      if (props.mode === 'horizontal' && props.ellipsis)
        resizeStopper = useResizeObserver(menu, handleResize).stop
      else resizeStopper?.()
    })

    // provide
    {
      const addSubMenu = (item) => {
        subMenus.value[item.index] = item
      }

      const removeSubMenu = (item) => {
        delete subMenus.value[item.index]
      }

      const addMenuItem = (item) => {
        items.value[item.index] = item
      }

      const removeMenuItem = (item) => {
        delete items.value[item.index]
      }
      provide(
        'rootMenu',
        reactive({
          props,
          openedMenus,
          items,
          subMenus,
          activeIndex,
          isMenuPopup,

          addMenuItem,
          removeMenuItem,
          addSubMenu,
          removeSubMenu,
          openMenu,
          closeMenu,
          handleMenuItemClick,
          handleSubMenuClick,
        })
      )
      provide(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        mouseInChild: ref(false),
        level: 0,
      })
    }
    // lifecycle
    onMounted(() => {
      if (props.mode === 'horizontal') {
        console.log(instance.vnode.el, nsMenu.namespace.value)
        new Menubar(instance.vnode.el, nsMenu.namespace.value)
      }
    })

    {
      const open = (index) => {
        const { indexPath } = subMenus.value[index]
        indexPath.forEach((i) => openMenu(i, indexPath))
      }

      expose({
        open,
        close,
        handleResize
      })
    }

    return ()=>{
      let slot = slots.default?.() ?? []
      console.log(slot)
      const vShowMore = []

      if (props.mode === 'horizontal' && menu.value) {
        const originalSlot = flattedChildren(slot)
        console.log(originalSlot)
        const slotDefault =
          sliceIndex.value === -1
            ? originalSlot
            : originalSlot.slice(0, sliceIndex.value)

        const slotMore =
          sliceIndex.value === -1 ? [] : originalSlot.slice(sliceIndex.value)
        console.log(slotMore)
        if (slotMore?.length && props.ellipsis) {
          slot = slotDefault
          vShowMore.push(
            h(
              ddxSubMenu,
              {
                index: 'sub-menu-more',
                class: nsSubMenu.e('hide-arrow'),
              },
              {
                title: () =>
                  h(
                    ElIcon,
                    {
                      class: nsSubMenu.e('icon-more'),
                    },
                    { default: () => h(More) }
                  ),
                default: () => slotMore,
              }
            )
          )
        }
      }

      const ulStyle = useMenuCssVar(props, 0)

      const vMenu = h(
        'ul',
        {
          key: String(props.collapse),
          role: 'ddxmenubar',
          ref: menu,
          style: ulStyle.value,
          class: {
            [nsMenu.b()]: true,
            [nsMenu.m(props.mode)]: true,
            [nsMenu.m('collapse')]: props.collapse,
          },
        },
        [...slot, ...vShowMore]
      )

      if (props.collapseTransition && props.mode === 'vertical') {
        return h(ElMenuCollapseTransition, () => vMenu)
      }

      return vMenu
    }
  }
})
