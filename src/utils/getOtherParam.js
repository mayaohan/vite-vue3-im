
import { shallowRef,isVNode } from 'vue'
import { camelize, isArray } from '@vue/shared'


export const flattedChildren = (children) => {
    const vNodes = isArray(children) ? children : [children]
    const result = []
  
    vNodes.forEach((child) => {
      if (isArray(child)) {
        result.push(...flattedChildren(child))
      } else if (isVNode(child) && isArray(child.children)) {
        result.push(...flattedChildren(child.children))
      } else {
        result.push(child)
        if (isVNode(child) && child.component?.subTree) {
          result.push(...flattedChildren(child.component.subTree))
        }
      }
    })
    return result
}

const getOrderedChildren = (
    vm,
    childComponentName,
    children
  ) => {
    const nodes = flattedChildren(vm.subTree).filter(
      (n) =>
        isVNode(n) &&
        n.type?.name === childComponentName &&
        !!n.component
    )
    const uids = nodes.map((n) => [null,undefined].includes(n.component)||n.component.uid)
    return uids.map((uid) => children[uid]).filter((p) => !!p)
  }
  

export const useOrderedChildren = (
    vm,
    childComponentName
  ) => {
    const children = {}
    const orderedChildren = shallowRef([])
  
    const addChild = (child) => {
      children[child.uid] = child
      orderedChildren.value = getOrderedChildren(vm, childComponentName, children)
    }
    const removeChild = (uid) => {
      delete children[uid]
      orderedChildren.value = orderedChildren.value.filter(
        (children) => children.uid !== uid
      )
    }
  
    return {
      children: orderedChildren,
      addChild,
      removeChild,
    }
  }