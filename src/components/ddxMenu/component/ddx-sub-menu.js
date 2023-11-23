


import {
  Fragment,
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
  vShow,
  watch,
  toRef,
  withDirectives,
} from 'vue'
import { useMenuCssVar } from '../use/use-menu-css-var'
import { useTimeoutFn } from '@vueuse/core'
import useMenu from './util'
import ElCollapseTransition from './collapse-transition.vue'
import { useDeprecated, useNamespace } from '../use'
import { ArrowDown, ArrowRight } from '@element-plus/icons-vue'
console.log(ArrowRight)
const xprops = {
  index: {
    type: String,
    required: true,
  },
  showTimeout: {
    type: Number,
    default: 300,
  },
  hideTimeout: {
    type: Number,
    default: 300,
  },
  popperClass: String,
  disabled: Boolean,
  popperAppendToBody: {
    type: Boolean,
    default: undefined,
  },
  teleported: {
    type: Boolean,
    default: undefined,
  },
  popperOffset: {
    type: Number,
    default: 6,
  },
  expandCloseIcon: {
  },
  expandOpenIcon: {
  },
  collapseCloseIcon: {
  },
  collapseOpenIcon: {
  }
}
export default defineComponent({
  name: 'ddxSubMenu',
  props: xprops,
  emits:['select'],
  setup(props, { emit,slots, expose }) {

    useDeprecated(
      {
        from: 'popper-append-to-body',
        replacement: 'teleported',
        scope: 'ddxSubMenu',
        version: '2.3.0',
        ref: 'https://element-plus.org/en-US/component/menu.html#submenu-attributes',
      },
      computed(() => props.popperAppendToBody !== undefined)
    )

    const instance = getCurrentInstance()
    const rootMenu = inject('rootMenu')
    const { parentMenu, indexPath } = useMenu(instance, toRef(props, 'index'))
    const nsMenu = useNamespace('menu')
    const nsSubMenu = useNamespace('sub-menu')
    const mode = computed(() => rootMenu.props.mode)
    const subMenu = inject(`subMenu:${parentMenu.value.uid}`)
    const backgroundColor = computed(() => rootMenu.props.backgroundColor || '')
    const isFirstLevel = computed(() => {
      return subMenu.level === 0
    })
    const appendToBody = computed(() => {
      const value = props.teleported ?? props.popperAppendToBody
      return value === undefined ? isFirstLevel.value : value
    })
    const fallbackPlacements = computed(() =>
      mode.value === 'horizontal' && isFirstLevel.value
        ? [
            'bottom-start',
            'bottom-end',
            'top-start',
            'top-end',
            'right-start',
            'left-start',
          ]
        : [
            'right-start',
            'left-start',
            'bottom-start',
            'bottom-end',
            'top-start',
            'top-end',
          ]
    )
    const menuTransitionName = computed(() =>
      rootMenu.props.collapse
        ? `${nsMenu.namespace.value}-zoom-in-left`
        : `${nsMenu.namespace.value}-zoom-in-top`
    )
    const verticalTitleRef = ref(null)
    const vPopper = ref(null)
    const handleMouseenter = (
      event,
      showTimeout = props.showTimeout
    ) => {
      if (event.type === 'focus') {
        return
      }
      if (
        (rootMenu.props.menuTrigger === 'click' &&
          rootMenu.props.mode === 'horizontal') ||
        (!rootMenu.props.collapse && rootMenu.props.mode === 'vertical') ||
        props.disabled
      ) {
        return
      }
      subMenu.mouseInChild.value = true

      timeout?.()
      ;({ stop: timeout } = useTimeoutFn(() => {
        rootMenu.openMenu(props.index, indexPath.value)
      }, showTimeout))

      if (appendToBody.value) {
        parentMenu.value.vnode.el?.dispatchEvent(new MouseEvent('mouseenter'))
      }
    }
    const handleMouseleave = (deepDispatch = false) => {
      if (
        (rootMenu.props.menuTrigger === 'click' &&
          rootMenu.props.mode === 'horizontal') ||
        (!rootMenu.props.collapse && rootMenu.props.mode === 'vertical')
      ) {
        return
      }
      timeout?.()
      subMenu.mouseInChild.value = false
      ;({ stop: timeout } = useTimeoutFn(
        () =>
          !mouseInChild.value &&
          rootMenu.closeMenu(props.index, indexPath.value),
        props.hideTimeout
      ))

      if (appendToBody.value && deepDispatch) {
        if (instance.parent?.type.name === 'ElSubMenu') {
          subMenu.handleMouseleave?.(true)
        }
      }
    }



    if (!subMenu) throwError(COMPONENT_NAME, 'can not inject sub menu')

    const items = ref({})
    const subMenus = ref({})

    let timeout;
    const mouseInChild = ref(false)

    // computed
    const currentPlacement = computed(() =>
      mode.value === 'horizontal' && isFirstLevel.value
        ? 'bottom-start'
        : 'right-start'
    )
    const subMenuTitleIcon = computed(() => {
      return (mode.value === 'horizontal' && isFirstLevel.value) ||
        (mode.value === 'vertical' && !rootMenu.props.collapse)
        ? props.expandCloseIcon && props.expandOpenIcon
          ? opened.value
            ? props.expandOpenIcon
            : props.expandCloseIcon
          : ArrowDown
        : props.collapseCloseIcon && props.collapseOpenIcon
        ? opened.value
          ? props.collapseOpenIcon
          : props.collapseCloseIcon
        : ArrowRight
    })

    const opened = computed(() => rootMenu.openedMenus.includes(props.index))
    const active = computed(() => {
      let isActive = false

      Object.values(items.value).forEach((item) => {
        if (item.active) {
          isActive = true
        }
      })

      Object.values(subMenus.value).forEach((subItem) => {
        if (subItem.active) {
          isActive = true
        }
      })

      return isActive
    })
    const activeTextColor = computed(() => rootMenu.props.activeTextColor || '')
    const textColor = computed(() => rootMenu.props.textColor || '')
    const item = reactive({
      index: props.index,
      indexPath,
      active,
    })

    const ulStyle = useMenuCssVar(rootMenu.props, subMenu.level + 1)
    const titleStyle = computed(() => {
      if (mode.value !== 'horizontal') {
        return {
          color: textColor.value,
        }
      }
      return {
        borderBottomColor: active.value
          ? rootMenu.props.activeTextColor
            ? activeTextColor.value
            : ''
          : 'transparent',
        color: active.value ? activeTextColor.value : textColor.value,
      }
    })

    // methods
    const doDestroy = () => vPopper.value?.popperRef?.popperInstanceRef?.destroy()

    const handleCollapseToggle = (value) => {
      if (!value) {
        doDestroy()
      }
    }

    const handleClick = () => {
      if (
        (rootMenu.props.menuTrigger === 'hover' &&
          rootMenu.props.mode === 'horizontal') ||
        (rootMenu.props.collapse && rootMenu.props.mode === 'vertical') ||
        props.disabled
      )
        return

      rootMenu.handleSubMenuClick({
        index: props.index,
        indexPath: indexPath.value,
        active: active.value
      })
    }

    watch(
      () => rootMenu.props.collapse,
      (value) => handleCollapseToggle(Boolean(value))
    )

    // provide
    {
      const addSubMenu = (item) => {
        subMenus.value[item.index] = item
      }
      const removeSubMenu = (item) => {
        delete subMenus.value[item.index]
      }
      provide(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        handleMouseleave,
        mouseInChild,
        level: subMenu.level + 1,
      })
    }

    // expose
    expose({
      opened,
    })

    // lifecycle
    onMounted(() => {
      rootMenu.addSubMenu(item)
      subMenu.addSubMenu(item)
    })

    onBeforeUnmount(() => {
      subMenu.removeSubMenu(item)
      rootMenu.removeSubMenu(item)
    })

    return ()=>{
      const titleTag = [
        slots.title?.(),
        h(
          ElIcon,
          {
            class: nsSubMenu.e('icon-arrow'),
            style: {
              transform: opened.value
                ? (props.expandCloseIcon && props.expandOpenIcon) ||
                  (props.collapseCloseIcon &&
                    props.collapseOpenIcon &&
                    rootMenu.props.collapse)
                  ? 'none'
                  : 'rotateZ(180deg)'
                : 'none',
            },
          },
          {
            default: () =>
            typeof subMenuTitleIcon.value === 'string'
                ? h(instance.appContext.components[subMenuTitleIcon.value])
                : h(subMenuTitleIcon.value),
          }
        ),
      ]
      // console.log(rootMenu.isMenuPopup)
      const child = rootMenu.isMenuPopup
      ? h(
        // TODO: correct popper's type.
        ElTooltip,
        {
          ref: vPopper,
          visible: opened.value,
          effect: 'light',
          pure: true,
          offset: props.popperOffset,
          showArrow: false,
          persistent: true,
          popperClass: props.popperClass,
          placement: currentPlacement.value,
          teleported: appendToBody.value,
          fallbackPlacements: fallbackPlacements.value,
          transition: menuTransitionName.value,
          gpuAcceleration: false,
        },
        {
          content: () =>
            h(
              'div',
              {
                class: [
                  nsMenu.m(mode.value),
                  nsMenu.m('popup-container'),
                  props.popperClass,
                ],
                onMouseenter: (evt) =>
                  handleMouseenter(evt, 100),
                onMouseleave: () => handleMouseleave(true),
                onFocus: (evt) => handleMouseenter(evt, 100),
              },
              [
                h(
                  'ul',
                  {
                    class: [
                      nsMenu.b(),
                      nsMenu.m('popup'),
                      nsMenu.m(`popup-${currentPlacement.value}`),
                    ],
                    style: ulStyle.value,
                  },
                  [slots.default?.()]
                ),
              ]
            ),
          default: () =>
            h(
              'div',
              {
                class: nsSubMenu.e('title'),
                style: [
                  titleStyle.value,
                  { backgroundColor: backgroundColor.value },
                ],
                onClick: handleClick,
              },
              titleTag
            ),
        }
      )
    : h(Fragment, {}, [
        h(
          'div',
          {
            class: nsSubMenu.e('title'),
            style: [
              titleStyle.value,
              { backgroundColor: backgroundColor.value },
            ],
            ref: verticalTitleRef,
            onClick: handleClick,
          },
          titleTag
        ),
        h(
          ElCollapseTransition,
          {},
          {
            default: () =>
              withDirectives(
                h(
                  'ul',
                  {
                    role: 'menu',
                    class: [nsMenu.b(), nsMenu.m('inline')],
                    style: ulStyle.value,
                  },
                  [slots.default?.()]
                ),
                [[vShow, opened.value]]
              ),
          }
        ),
      ])

      return h(
        'li',
        {
          class: [
            nsSubMenu.b(),
            nsSubMenu.is('active', active.value),
            nsSubMenu.is('opened', opened.value),
            nsSubMenu.is('disabled', props.disabled),
          ],
          role: 'menuitem',
          ariaHaspopup: true,
          ariaExpanded: opened.value,
          onMouseenter: handleMouseenter,
          onMouseleave: () => handleMouseleave(true),
          onFocus: handleMouseenter,
        },
        [child]
      )
    }
  },
})
