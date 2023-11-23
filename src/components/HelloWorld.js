
import { ref,h,defineComponent } from 'vue'

export default defineComponent({
  name: 'ddxMenu',
  props:{
    childComponent: {
      type: Object,
      default: null,
    },
  },
  setup(props, { emit, slots, expose }) {
    // const count = ref(0);
    // console.log(props.msg)
    let comp = ''
    if(props.childComponent!=null) comp = props.childComponent
    console.log(comp)
    return ()=>{
      return h(
        'div',
        {
          class:'demo',
        },
        [
          h(comp,{data:'xxxxxx'}),
          h(
            'p',
            {
              class: ['second'],
            },
            [slots.default?.()]
          ),
        ]
      )
    }
  }
})

