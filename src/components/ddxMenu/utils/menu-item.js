
import { triggerEvent } from './trigger-event'
import SubMenu from './submenu'
const EVENT_CODE = {
  tab: 'Tab',
  enter: 'Enter',
  space: 'Space',
  left: 'ArrowLeft', // 37
  up: 'ArrowUp', // 38
  right: 'ArrowRight', // 39
  down: 'ArrowDown', // 40
  esc: 'Escape',
  delete: 'Delete',
  backspace: 'Backspace',
  numpadEnter: 'NumpadEnter',
  pageUp: 'PageUp',
  pageDown: 'PageDown',
  home: 'Home',
  end: 'End',
}

class MenuItem {
  submenu = null
  constructor(domNode, namespace) {
    this.submenu = null
    this.init(namespace,domNode)
    this.domNode = domNode
    console.log(domNode, namespace)
  }

  init(namespace,domNode) {
    console.log(domNode)
    domNode.setAttribute('tabindex', '0')
    const menuChild = domNode.querySelector(`.${namespace}-menu`)
    if (menuChild) {
      this.submenu = new SubMenu(this, menuChild)
    }
    this.addListeners(domNode)
  }

  addListeners(domNode) {
    domNode.addEventListener('keydown', (event) => {
      let prevDef = false
      switch (event.code) {
        case EVENT_CODE.down: {
          triggerEvent(event.currentTarget, 'mouseenter')
          this.submenu && this.submenu.gotoSubIndex(0)
          prevDef = true
          break
        }
        case EVENT_CODE.up: {
          triggerEvent(event.currentTarget, 'mouseenter')
          this.submenu &&
            this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1)
          prevDef = true
          break
        }
        case EVENT_CODE.tab: {
          triggerEvent(event.currentTarget, 'mouseleave')
          break
        }
        case EVENT_CODE.enter:
        case EVENT_CODE.space: {
          prevDef = true
          ;(event.currentTarget).click()
          break
        }
      }
      if (prevDef) {
        event.preventDefault()
      }
    })
  }
}

export default MenuItem
