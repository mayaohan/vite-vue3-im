import { computed } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'


export default function useMenuColor(props) {
  const menuBarColor = computed(() => {
    const color = props.backgroundColor
    if (!color) {
      return ''
    } else {
      return new TinyColor(color).shade(20).toString()
    }
  })
  return menuBarColor
}
