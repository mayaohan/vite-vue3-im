import { computed, inject, ref, unref,isVNode,watch } from 'vue'

export const defaultNamespace = 'ddx'
const statePrefix = 'is-'

const _bem = (
  namespace,
  block,
  blockSuffix,
  element,
  modifier
) => {
  let cls = `${namespace}-${block}`
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  if (element) {
    cls += `__${element}`
  }
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}

export const namespaceContextKey =
  Symbol('namespaceContextKey')

export const useGetDerivedNamespace = (
  namespaceOverrides
) => {
  const derivedNamespace =
    namespaceOverrides || inject(namespaceContextKey, ref(defaultNamespace))
  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace
  })
  return namespace
}

export const useNamespace = (
  block,
  namespaceOverrides
) => {
  const namespace = useGetDerivedNamespace(namespaceOverrides)
  const b = (blockSuffix = '') =>
    _bem(namespace.value, block, blockSuffix, '', '')
  const e = (element) =>
    element ? _bem(namespace.value, block, '', element, '') : ''
  const m = (modifier) =>
    modifier ? _bem(namespace.value, block, '', '', modifier) : ''
  const be = (blockSuffix, element) =>
    blockSuffix && element
      ? _bem(namespace.value, block, blockSuffix, element, '')
      : ''
  const em = (element, modifier) =>
    element && modifier
      ? _bem(namespace.value, block, '', element, modifier)
      : ''
  const bm = (blockSuffix, modifier) =>
    blockSuffix && modifier
      ? _bem(namespace.value, block, blockSuffix, '', modifier)
      : ''
  const bem = (blockSuffix, element, modifier) =>
    blockSuffix && element && modifier
      ? _bem(namespace.value, block, blockSuffix, element, modifier)
      : ''
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true
    return name && state ? `${statePrefix}${name}` : ''
  }

  // for css var
  // --el-xxx: value;
  const cssVar = (object) => {
    const styles = {}
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key]
      }
    }
    return styles
  }
  // with block
  const cssVarBlock = (object) => {
    const styles = {}
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key]
      }
    }
    return styles
  }

  const cssVarName = (name) => `--${namespace.value}-${name}`
  const cssVarBlockName = (name) =>
    `--${namespace.value}-${block}-${name}`

  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    // css
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName,
  }
}

export const flattedChildren = (
  children
) => {
  const vNodes = Array.isArray(children) ? children : [children]
  const result  = []

  vNodes.forEach((child) => {
    if (Array.isArray(child)) {
      result.push(...flattedChildren(child))
    } else if (isVNode(child) && Array.isArray(child.children)) {
      result.push(...flattedChildren(child.children))
    } else {
      result.push(child)
      // console.log(child.component,child)
      if (isVNode(child) && child.component?.subTree) {
        console.log('有')
        result.push(...flattedChildren(child.component.subTree))
      }
    }
  })
  return result
}

export const useDeprecated = (
  { from, replacement, scope, version, ref, type = 'API' },
  condition
) => {
  watch(
    () => unref(condition),
    (val) => {
      if (val) {
        debugWarn(
          scope,
          `[${type}] ${from} is about to be deprecated in version ${version}, please use ${replacement} instead.
For more detail, please visit: ${ref}
`
        )
      }
    },
    {
      immediate: true,
    }
  )
}
