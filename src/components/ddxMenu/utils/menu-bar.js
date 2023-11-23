import MenuItem from './menu-item'


class Menu {
  constructor(domNode, namespace) {
    this.init(namespace,domNode)
  }
  init(namespace,domNode) {
    const menuChildren = domNode.childNodes
    Array.from(menuChildren).forEach((child) => {
      if (child?.nodeType === 1) {
        new MenuItem(child, namespace)
      }
    })
  }
}

export default Menu
