import { computed } from 'vue'
import { useNamespace } from '.'
import useMenuColor from './use-menu-color'


export const useMenuCssVar = (props, level) => {
  const ns = useNamespace('ddx')
  return computed(() => {
    return ns.cssVarBlock({
      'text-color': props.textColor || '',
      'hover-text-color': props.textColor || '',
      'bg-color': props.backgroundColor || '',
      'hover-bg-color': useMenuColor(props).value || '',
      'active-color': props.activeTextColor || '',
      level: `${level}`,
    })
  })
}
