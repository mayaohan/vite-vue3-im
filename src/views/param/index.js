import Core from '../core/index.vue'
import {defineComponent} from 'vue'

export default defineComponent({
  ...Core,
  ...{
    name:'DemoCore',
    data() {
      this.chartHandler = ()=>{
        console.log('chartHandler')
      }
      return {}
    }
  }
})
