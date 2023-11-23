import { isClient, isIOS } from '@vueuse/core'

import { camelize } from '@vue/shared'
const keysOf = (arr) => Object.keys(arr)
const entriesOf = (arr) => Object.entries(arr)
export const classNameToArray = (cls = '') =>
  cls.split(' ').filter((item) => !!item.trim())

export const hasClass = (el, cls) => {
  if (!el || !cls) return false
  if (cls.includes(' ')) throw new Error('className should not contain space.')
  return el.classList.contains(cls)
}

export const addClass = (el, cls) => {
  if (!el || !cls.trim()) return
  el.classList.add(...classNameToArray(cls))
}

export const removeClass = (el, cls) => {
  if (!el || !cls.trim()) return
  el.classList.remove(...classNameToArray(cls))
}

export const getStyle = (
  element,
  styleName
) => {
  if (!isClient || !element || !styleName) return ''

  let key = camelize(styleName)
  if (key === 'float') key = 'cssFloat'
  try {
    const style = (element.style)[key]
    if (style) return style
    const computed = document.defaultView?.getComputedStyle(element, '')
    return computed ? computed[key] : ''
  } catch {
    return (element.style)[key]
  }
}

export const setStyle = (
  element,
  styleName,
  value
) => {
  if (!element || !styleName) return

  if (isObject(styleName)) {
    entriesOf(styleName).forEach(([prop, value]) =>
      setStyle(element, prop, value)
    )
  } else {
    const key = camelize(styleName)
    element.style[key] = value
  }
}

export const removeStyle = (
  element,
  style
) => {
  if (!element || !style) return

  if (isObject(style)) {
    keysOf(style).forEach((prop) => removeStyle(element, prop))
  } else {
    setStyle(element, style, '')
  }
}
