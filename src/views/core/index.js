import * as hooks from 'vue'
export const dataHandler =
  ({ api, props, vm }) =>
  () => {
    console.log('dataHandler',vm)
    vm.chartHandler()
  }

  export const setup = ({ props, context, renderless,vm}) => {
    console.log('core/index.js')
    const sdk = renderless(props,context,hooks,vm)
    console.log(sdk)
    // sdk.dataHandler()
    return renderless(props,context,hooks,vm)
  }

  export const renderless = (
    props,context,
    { computed, onBeforeUnmount, onMounted, reactive, watch },
    vm
  ) => {
    const api = {
    }
  
    // onMounted(() => api.mounted())
    // onBeforeUnmount(() => api.clean())
  
    return Object.assign(api, {
      dataHandler: dataHandler({ api,props,vm }),
    })
  }