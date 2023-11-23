import { computed } from 'vue'

export default function useMenu(
  instance,
  currentIndex
) {
  const indexPath = computed(() => {
    let parent = instance.parent
    const path = [currentIndex.value]
    while (parent.type.name !== 'ddxMenu') {
      if (parent.props.index) {
        path.unshift(parent.props.index)
      }
      parent = parent.parent
    }
    return path
  })

  const parentMenu = computed(() => {
    let parent = instance.parent
    while (parent && !['ddxMenu', 'ddxSubMenu'].includes(parent.type.name)) {
      parent = parent.parent
    }
    return parent
  })

  return {
    parentMenu,
    indexPath,
  }
}
