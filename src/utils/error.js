class ElementPlusError extends Error {
    constructor(m) {
      super(m)
      this.name = 'ElementPlusError'
    }
}
  
export function throwError(scope, m) {
throw new ElementPlusError(`[${scope}] ${m}`)
}

export function debugWarn(scope, message) {
    if (process.env.NODE_ENV !== 'production') {
        const error = isString(scope)
        ? new ElementPlusError(`[${scope}] ${message}`)
        : scope
        // eslint-disable-next-line no-console
        console.warn(error)
    }
}