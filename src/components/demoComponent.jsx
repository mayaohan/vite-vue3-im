
import { ref,defineComponent,watchEffect } from 'vue'

export default defineComponent({
  name: 'ddxMenu',
  props:{
    msg: {
      type: String,
      default: '',
    },
    childComponent:{
      type:Object,
      default:null
    }
  },
  setup(props, { emit, slots, expose }) {
    const count = ref(0);
    const classString = ref('demo')
    const add = ()=>{
      count.value++
    }
    watchEffect(()=>{
      console.log(slots)
      // console.log(count.value)
    })
    watchEffect(()=>{
      // console.log(slots.default()[0].children)
      console.log(count.value)
    })
    return {
        count,
        classString,
        add
    }
  },
  render() {
    const message = 'Hello, World!';
    console.log(this.$props)
    let comp = ''
    if(this.$props.childComponent!=null) comp = this.$props.childComponent
    return (
      <div
        className={this.classString}
      >
        {this.count}
        <p>{this.$slots.default?.()}</p>
        <comp data={message} />
        <button onClick={this.add}>+</button>
      </div>
    );
  },
})